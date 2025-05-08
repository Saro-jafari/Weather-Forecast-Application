import React from 'react';
import { CurrentWeatherData } from '../types/weather';
import { useLanguage } from '../context/LanguageContext';
import WeatherIcon from './WeatherIcon';
import { FaGauge } from 'react-icons/fa6';
import { LuDroplets } from 'react-icons/lu';
import { BiWind } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

interface CurrentWeatherProps {
	data?: CurrentWeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
	const { t } = useLanguage();

	const formatTime = (timestamp: number) => {
		return new Date(timestamp * 1000).toLocaleTimeString(undefined, {
			hour: '2-digit',
			minute: '2-digit',
		});
	};

	if (!data) {
		return (
			<div className="p-6 overflow-hidden text-center bg-white shadow-lg dark:bg-gray-800 rounded-xl">
				<p className="text-gray-500 dark:text-gray-400">{t('loading')}...</p>
			</div>
		);
	}

	return (
		<div className="overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl">
			<div className="px-6 py-4 text-white bg-gradient-to-r from-blue-500 to-indigo-600">
				<div className="flex flex-col items-center justify-between sm:flex-row">
					<div>
						<h2 className="text-xl font-bold sm:text-2xl">
							{data.name || 'N/A'}, {data.sys?.country || 'N/A'}
						</h2>
						<p className="text-blue-100">{new Date(data.dt * 1000).toLocaleDateString()}</p>
					</div>
					<div className="flex flex-col items-center mt-3 sm:mt-0">
						<WeatherIcon code={data?.weather[0].id} size={48} />
						<p className="text-lg capitalize">{data?.weather[0].description}</p>
					</div>
				</div>
			</div>

			<div className="p-6">
				<div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
					<div className="mb-4 text-center sm:text-left sm:mb-0">
						<p className="text-4xl font-bold">{Math.round(data?.main.temp)}°C</p>
						<p className="text-gray-500 dark:text-gray-400">
							{t('feelsLike')}: {Math.round(data?.main.feels_like)}°C
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4">
						<div className="flex items-center px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-700">
							<FaGauge className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
							<div>
								<p className="text-xs text-gray-500 dark:text-gray-400">{t('pressure')}</p>
								<p className="font-medium">
									{data?.main.pressure} {t('pressureUnit')}
								</p>
							</div>
						</div>

						<div className="flex items-center px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-700">
							<LuDroplets className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
							<div>
								<p className="text-xs text-gray-500 dark:text-gray-400">{t('humidity')}</p>
								<p className="font-medium">{data?.main.humidity}%</p>
							</div>
						</div>

						<div className="flex items-center px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-700">
							<BiWind className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
							<div>
								<p className="text-xs text-gray-500 dark:text-gray-400">{t('wind')}</p>
								<p className="font-medium">
									{data?.wind.speed} {t('windUnit')}
								</p>
							</div>
						</div>

						<div className="flex items-center px-3 py-2 rounded-lg bg-blue-50 dark:bg-gray-700">
							<BsEye className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
							<div>
								<p className="text-xs text-gray-500 dark:text-gray-400">{t('visibility')}</p>
								<p className="font-medium">
									{(data.visibility / 1000).toFixed(1)} {t('visibilityUnit')}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
					<div className="text-center">
						<p className="text-gray-500 dark:text-gray-400">{t('sunrise')}</p>
						<p className="font-medium">{formatTime(data.sys.sunrise)}</p>
					</div>
					<div className="text-center">
						<p className="text-gray-500 dark:text-gray-400">{t('sunset')}</p>
						<p className="font-medium">{formatTime(data.sys.sunset)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
