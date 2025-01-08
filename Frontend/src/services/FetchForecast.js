import { toast, axios } from '../index';

export const fetchWeatherForecast = async city => {
	try {
		// آدرس صحیح به فایل PHP
		const response = await axios.get(`http://localhost/weather_forecast.php?city=${city}`);
		console.log(response.data);
		return response.data; // داده‌های پیش‌بینی وضعیت آب و هوا برگشت داده می‌شود
	} catch (error) {
		toast.error(error.message, 'Error fetching forecast');
		throw new Error('Failed to fetch weather forecast data');
	}
};
