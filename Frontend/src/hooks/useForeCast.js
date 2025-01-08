import {
	useDispatch,
	useQuery,
	fetchWeatherForecast,
	setWeatherForecastData,
	setWeatherForecastLoading,
	setWeatherForecastError,
} from '../index';

// Custom hook to fetch weather forecast
const useWeatherForecast = city => {
	const dispatch = useDispatch();

	// Fetch data using react-query
	const { data, error, isLoading } = useQuery({
		queryKey: ['forecast', city],
		queryFn: () => fetchWeatherForecast(city),
		enabled: !!city,
		onSuccess: data => {
			dispatch(setWeatherForecastData(data));
			dispatch(setWeatherForecastLoading(false));
		},
		onError: error => {
			dispatch(setWeatherForecastError(error.message));
			dispatch(setWeatherForecastLoading(false));
		},

		onSettled: () => {
			dispatch(setWeatherForecastLoading(false));
		},
	});

	return { data, error, isLoading }; // Return data, error, and loading status
};

export default useWeatherForecast;
