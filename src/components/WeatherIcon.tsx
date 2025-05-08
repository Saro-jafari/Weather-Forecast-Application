import React from 'react';
import {
	WiDaySunny,
	WiCloud,
	WiCloudy,
	WiThunderstorm,
	WiSprinkle,
	WiRain,
	WiSnow,
	WiFog,
	WiStrongWind,
	WiDayCloudy,
} from 'react-icons/wi';

interface WeatherIconProps {
	code: number;
	size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ code, size = 48 }) => {
	const getWeatherIcon = () => {
		if (code >= 200 && code < 300) {
			return <WiThunderstorm size={size} className="text-yellow-400" />;
		} else if (code >= 300 && code < 400) {
			return <WiSprinkle size={size} className="text-blue-400" />;
		} else if (code >= 500 && code < 600) {
			return <WiRain size={size} className="text-blue-500" />;
		} else if (code >= 600 && code < 700) {
			return <WiSnow size={size} className="text-blue-200" />;
		} else if (code >= 700 && code < 800) {
			if (code === 781) {
				return <WiStrongWind size={size} className="text-gray-500" />;
			}
			return <WiFog size={size} className="text-gray-400" />;
		} else if (code === 800) {
			return <WiDaySunny size={size} className="text-yellow-400" />;
		} else if (code === 801) {
			return <WiDayCloudy size={size} className="text-yellow-300" />;
		} else if (code > 801 && code < 900) {
			return <WiCloud size={size} className="text-gray-400" />;
		}

		return <WiCloudy size={size} className="text-gray-500" />;
	};

	return <div className="animate-pulse-slow">{getWeatherIcon()}</div>;
};

export default WeatherIcon;
