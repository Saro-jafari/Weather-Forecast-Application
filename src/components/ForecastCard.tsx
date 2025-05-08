import React from 'react';
import { DailyForecast } from '../types/weather';
import { useLanguage } from '../context/LanguageContext';
import WeatherIcon from './WeatherIcon';

interface ForecastCardProps {
  forecast: DailyForecast;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const { t } = useLanguage();

  return (
    <div className="p-4 transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg">
      <div className="text-center">
        <p className="font-medium text-gray-500 dark:text-gray-400">{forecast.day}</p>
        <div className="flex justify-center my-2">
          <WeatherIcon code={forecast.weather.id} size={40} />
        </div>
        <p className="mb-2 text-sm capitalize">{forecast.weather.description}</p>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-red-500 dark:text-red-400">{t('high')}: {Math.round(forecast.maxTemp)}°</span>
          <span className="text-blue-500 dark:text-blue-400">{t('low')}: {Math.round(forecast.minTemp)}°</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;