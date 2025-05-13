import React, { createContext, useContext, useState, ReactNode } from "react";
import { fetchWeatherData } from "../services/weatherService";
import { CurrentWeatherData, ForecastData } from "../types/weather";

// ────────────── Types ──────────────

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  currentWeather: CurrentWeatherData | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string | null;
  searchCity: (cityName: string) => Promise<void>;
  getLocationWeather: () => Promise<void>;
}

// ────────────── Context Setup ──────────────

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

// ────────────── Provider Component ──────────────

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [city, setCity] = useState<string>("");
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchCity = async (cityName: string) => {
    if (!cityName.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(cityName);
      setCurrentWeather(data.current);
      setForecast(data.forecast);
      if (city !== cityName) {
        setCity(cityName);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "دریافت اطلاعات آب‌وهوا ناموفق بود."
      );
      console.error("Error fetching weather data:", err);
    } finally {
      setLoading(false);
    }
  };

  const getLocationWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!navigator.geolocation) {
        throw new Error("مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند.");
      }

      const position = await getPositionWithRetry(MAX_RETRIES, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });

      const { latitude, longitude } = position.coords;
      const data = await fetchWeatherData(undefined, {
        lat: latitude,
        lon: longitude,
      });

      setCurrentWeather(data.current);
      setForecast(data.forecast);
      setCity(data.current.name);
    } catch (error) {
      let message = "دریافت موقعیت مکانی ناموفق بود.";

      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = "دسترسی به موقعیت مکانی رد شد. لطفاً آن را فعال کنید.";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "موقعیت مکانی در دسترس نیست.";
            break;
          case error.TIMEOUT:
            message = "درخواست موقعیت مکانی زمان‌بر شد.";
            break;
        }
      } else if (error instanceof Error) {
        message = error.message;
      }

      setError(message);
      console.error("Geolocation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        currentWeather,
        forecast,
        loading,
        error,
        searchCity,
        getLocationWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// ────────────── Helpers ──────────────

const RETRY_DELAY = 2000;
const MAX_RETRIES = 3;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCurrentPosition = (
  options: PositionOptions
): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const getPositionWithRetry = async (
  retries: number,
  options: PositionOptions
): Promise<GeolocationPosition> => {
  try {
    return await getCurrentPosition(options);
  } catch (error) {
    if (retries === 0 || !(error instanceof GeolocationPositionError)) {
      throw error;
    }

    if (error.code === error.POSITION_UNAVAILABLE) {
      await wait(RETRY_DELAY);
      return getPositionWithRetry(retries - 1, options);
    }

    throw error;
  }
};
