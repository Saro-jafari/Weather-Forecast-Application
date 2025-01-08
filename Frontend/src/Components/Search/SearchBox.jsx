import {
	useDispatch,
	useState,
	useWeatherForecast,
	useEffect,
	toast,
	setWeatherLoading,
	setWeatherForecastLoading,
	setWeatherForecastError,
	setWeatherError,
	setWeatherData,
	setWeatherForecastData,
	useWeather,
	FormControl,
	TextField,
	InputAdornment,
	SearchIcon,
	ClearIcon,
} from '../../index.js';
const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();

	// Fetch current weather
	const { data, isLoading, error } = useWeather(searchTerm);

	// Fetch weather forecast
	const { data: dataForecast, isLoading: isLoadingForecast, error: errorForecast } = useWeatherForecast(searchTerm);

	// Handle current weather
	useEffect(() => {
		if (isLoading) {
			dispatch(setWeatherLoading());
			toast.loading('Please wait');
		} else {
			toast.dismiss();
		}

		if (data) {
			dispatch(setWeatherData(data));
			toast.success('Current weather saved');
		} else if (error) {
			dispatch(setWeatherError(error.message));
			toast.error('The desired city does not exist');
		}
	}, [data, isLoading, error, dispatch]);

	// Handle forecast data
	useEffect(() => {
		if (isLoadingForecast) {
			dispatch(setWeatherForecastLoading());
			toast.loading('Loading forecast...');
		} else {
			toast.dismiss();
		}

		if (dataForecast) {
			dispatch(setWeatherForecastData(dataForecast)); // save the forecast data
			toast.success('Prediction saved');
		} else if (errorForecast) {
			dispatch(setWeatherForecastError(errorForecast.message));
			toast.error('Error getting prediction');
		}
	}, [dataForecast, isLoadingForecast, errorForecast, dispatch]);

	return (
		<FormControl fullWidth className="rounded-full">
			<TextField
				className="md:w-[45rem] w-[20rem] sm:w-[20rem]"
				variant="outlined"
				placeholder="Search..."
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)} // Update searchTerm state
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
					endAdornment: searchTerm && (
						<InputAdornment position="end">
							<ClearIcon onClick={() => setSearchTerm('')} style={{ cursor: 'pointer' }} />
						</InputAdornment>
					),
				}}
			/>
		</FormControl>
	);
};

export default SearchBox;
