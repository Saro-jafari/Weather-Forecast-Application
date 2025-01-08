import { configureStore, weatherReducer, forecastReducer, locationReducer } from '../index';
const store = configureStore({
	reducer: {
		weather: weatherReducer,
		forecast: forecastReducer,
		location: locationReducer,
	},
});

export default store;
