import { createSlice } from '../index';

const initialState = {
	latitude: null,
	longitude: null,
	error: null,
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocation(state, action) {
			state.latitude = action.payload.latitude;
			state.longitude = action.payload.longitude;
			state.error = null;
		},
		setError(state, action) {
			state.error = action.payload;
		},
	},
});

export const { setLocation, setError } = locationSlice.actions;
export default locationSlice.reducer;
