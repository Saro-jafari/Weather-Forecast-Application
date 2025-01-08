import { createSlice } from '../index';
const initialState = {
	data: null,
	loading: false,
	error: null,
};
const WeatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setWeatherData(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		setWeatherLoading(state) {
			state.loading = true;
		},
		setWeatherError(state, action) {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const { setWeatherData, setWeatherError, setWeatherLoading } = WeatherSlice.actions;
export default WeatherSlice.reducer;
