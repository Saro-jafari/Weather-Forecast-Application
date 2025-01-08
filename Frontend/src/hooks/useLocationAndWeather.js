import { useEffect } from 'react';
import { useDispatch, axios, setWeatherData, setWeatherForecastData, toast } from '../index';

const useLocationAndWeather = (latitude, longitude) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchWeatherData = async () => {
			if (latitude && longitude) {
				try {
					// اطمینان از URL صحیح و اطمینان از تنظیم CORS
					const response = await axios.get(`http://localhost/location_weather.php?lat=${latitude}&lon=${longitude}`);

					// بررسی داده‌های دریافتی
					if (response.data && response.data.current_weather && response.data.forecast) {
						dispatch(setWeatherData(response.data.current_weather));
						dispatch(setWeatherForecastData(response.data.forecast));
					} else {
						toast.error('Invalid weather data received.');
					}
				} catch (error) {
					// مدیریت خطا
					if (error.response) {
						// اگر سرور پاسخ داده باشد
						toast.error('Error fetching weather data: ' + error.response.data.error);
					} else {
						// در غیر این صورت
						toast.error('Error fetching weather data: ' + error.message);
					}
				}
			} else {
				toast.error('Latitude and Longitude are required.');
			}
		};

		fetchWeatherData();
	}, [latitude, longitude, dispatch]);
};

export default useLocationAndWeather;
