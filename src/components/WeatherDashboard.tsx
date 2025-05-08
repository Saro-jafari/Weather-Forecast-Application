import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import ForecastList from './ForecastList';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import { useWeather } from '../context/WeatherContext';

const WeatherDashboard: React.FC = () => {
	const { loading, error, currentWeather, forecast, getLocationWeather } = useWeather();
	
	useEffect(() => {
		// Try to get the user's location weather on the first load
		getLocationWeather();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-col space-y-6">
			<SearchBar />

			{loading && <LoadingSpinner />}

			{error && <ErrorMessage message={error} />}

			{!loading && !error && currentWeather && <CurrentWeather data={currentWeather} />}

			{!loading && !error && forecast && <ForecastList data={forecast} />}
		</div>
	);
};

export default WeatherDashboard;
