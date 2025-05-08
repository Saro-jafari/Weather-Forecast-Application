import React, { useMemo } from 'react';
import { ForecastData, DailyForecast } from '../types/weather';
import { useLanguage } from '../context/LanguageContext';
import ForecastCard from './ForecastCard';

interface ForecastListProps {
	data: ForecastData;
}

const ForecastList: React.FC<ForecastListProps> = ({ data }) => {
	const { t, locale } = useLanguage();

	const dailyForecasts = useMemo(() => {
		if (!data?.list || data.list.length === 0) {
			console.warn('No forecast data available');
			return [];
		}

		const forecasts: DailyForecast[] = [];
		const dailyData = new Map<string, ForecastData['list']>();

		// Group forecast items by day
		data.list.forEach(item => {
			const date = new Date(item.dt * 1000).toISOString().split('T')[0];
			if (!dailyData.has(date)) {
				dailyData.set(date, []);
			}
			dailyData.get(date)?.push(item);
		});

		// Get forecast data for each day
		dailyData.forEach((items, dateString) => {
			// Skip current day (assuming today is 2025-05-08 based on data)
			const today = new Date().toISOString().split('T')[0];
			if (dateString === today) return;

			// Skip if we already have 5 days
			if (forecasts.length >= 5) return;

			if (items.length === 0) return;

			const date = new Date(dateString);

			// Calculate min and max temperatures
			const temps = items.map(item => item.main.temp);
			const minTemp = Math.min(...temps);
			const maxTemp = Math.max(...temps);

			// Use the noon forecast (or closest to noon) for the weather icon
			const midDayForecast = items.reduce((prev, curr) => {
				const prevHour = new Date(prev.dt * 1000).getHours();
				const currHour = new Date(curr.dt * 1000).getHours();
				return Math.abs(prevHour - 12) < Math.abs(currHour - 12) ? prev : curr;
			}, items[0]);

			forecasts.push({
				date,
				day: date.toLocaleDateString(locale === 'fa' ? 'fa-IR' : 'en-US', { weekday: 'short' }),
				minTemp,
				maxTemp,
				weather: midDayForecast.weather[0],
			});
		});

		console.log('Daily Forecasts:', forecasts); // برای دیباگ
		return forecasts;
	}, [data.list, locale]);
	console.log(dailyForecasts, 'adasds');
	return (
		<div className="mb-6">
			<h2 className="mb-4 text-xl font-bold">{t('forecast')}</h2>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
				{dailyForecasts.length > 0 ? (
					dailyForecasts.map((forecast, index) => <ForecastCard key={index} forecast={forecast} />)
				) : (
					<p className="text-center text-gray-500">{t('no_forecast_available')},</p>
				)}
			</div>
		</div>
	);
};

export default ForecastList;
