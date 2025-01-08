import { useDispatch, setLocation, useSelector, setError, useLocationAndWeather, MyLocationOutlinedIcon, SearchBox } from '../../index';

const Header = () => {
	const dispatch = useDispatch();
	const location = useSelector(state => state.location);

	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords;
					dispatch(setLocation({ latitude, longitude }));
				},
				err => {
					dispatch(setError('Access to geolocation was denied or something went wrong.'));
					console.error(err);
				},
			);
		} else {
			dispatch(setError('Your browser does not support positioning'));
		}
	};

	//use hook for info WeatherApp
	useLocationAndWeather(location.latitude, location.longitude); // use a hook to get a prediction

	return (
		<header className="flex justify-around mt-[2rem]">
			<section>
				<SearchBox />
			</section>
			<section className="">
				<section className="bg-lime-500 p-2 text-white rounded-xl">
					<span className="p-2">
						<MyLocationOutlinedIcon />
					</span>
					<button onClick={handleGetLocation} className="text-[12px] md:text-[18px]">
						Current Location
					</button>
				</section>
			</section>
		</header>
	);
};

export default Header;
