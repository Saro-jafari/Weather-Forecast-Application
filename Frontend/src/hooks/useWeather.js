import { useDispatch, useCallback, setWeatherData, useQuery, setWeatherError, fetchWeather } from '../index';

const useWeather = city => {
	const dispatch = useDispatch();

	// Callback functions for dispatch
	const handleSuccess = useCallback(
		data => {
			dispatch(setWeatherData(data)); // Save data to Redux store
		},

		[dispatch],
	);

	const handleError = useCallback(
		error => {
			dispatch(setWeatherError(error.message)); // Save error to Redux store
		},
		[dispatch],
	);

	// React Query hook
	const query = useQuery({
		queryKey: ['weather', city],
		queryFn: () => fetchWeather(city),
		enabled: !!city,
		onSuccess: handleSuccess,
		onError: handleError,
	});

	return query; // Return query object for component-level control
};

export default useWeather;
