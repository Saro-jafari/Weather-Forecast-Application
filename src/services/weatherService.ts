import { CurrentWeatherData, ForecastData } from '../types/weather';

const API_KEY = '515543a80681807f273a8b415c39e922';

interface LocationCoords {
	lat: number;
	lon: number;
}

export interface CombinedWeatherData {
	current: CurrentWeatherData;
	forecast: ForecastData;
}

export const fetchWeatherData = async (city?: string, coords?: LocationCoords): Promise<CombinedWeatherData> => {
	try {
		let currentUrl: string;
		let forecastUrl: string;

		if (coords) {
			const { lat, lon } = coords;
			currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
			forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
		} else if (city) {
			currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
			forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
		} else {
			throw new Error('Either city name or coordinates must be provided.');
		}

		const [currentRes, forecastRes] = await Promise.all([fetch(currentUrl), fetch(forecastUrl)]);

		if (!currentRes.ok || !forecastRes.ok) {
			throw new Error('Failed to fetch weather data.');
		}

		const current: CurrentWeatherData = await currentRes.json();
		const forecast: ForecastData = await forecastRes.json();

		return { current, forecast };
	} catch (error) {
		console.error('Weather API error:', error);
		throw new Error('Unable to load weather data.');
	}
};
