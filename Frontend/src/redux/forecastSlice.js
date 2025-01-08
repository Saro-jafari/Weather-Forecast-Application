import { createSlice } from '../index';

const initialState = {
	forecastData: null,
	loadingForecast: false,
	error: null,
};

const forecastSlice = createSlice({
	name: 'forecast',
	initialState,
	reducers: {
		setWeatherForecastData: (state, action) => {
			state.forecastData = action.payload;
		},
		setWeatherForecastLoading: (state, action) => {
			state.loadingForecast = action.payload;
		},
		setWeatherForecastError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { setWeatherForecastData, setWeatherForecastLoading, setWeatherForecastError } = forecastSlice.actions;

export default forecastSlice.reducer;
