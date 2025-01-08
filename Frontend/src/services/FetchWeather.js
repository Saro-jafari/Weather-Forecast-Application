import { toast, axios } from '../index';

export const fetchWeather = async city => {
	try {
		const response = await axios.get(`http://localhost/weather.php?city=${city}`);
		return response.data; // This would be the weather data returned by the PHP script
	} catch (error) {
		toast.error('Error fetching forecast:', error);
		throw new Error('Failed to fetch weather forecast data');
	}
};
