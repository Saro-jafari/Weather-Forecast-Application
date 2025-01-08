import {
	useWeatherForecast,
	useSelector,
	BsSunrise,
	BsSunset,
	WiStrongWind,
	WiHumidity,
	IoMdSpeedometer,
	FaTemperatureHigh,
} from '../../index.js';
const WheatherDashbaord = () => {
	let weatherData = useSelector(state => state.weather.data?.main);
	let matchData = useSelector(state => state.weather.data?.name);
	useWeatherForecast(matchData);
	let weatherDataIcon = useSelector(state => state.weather);
	let wheatherSys = useSelector(state => state.weather.data?.sys);
	let wheatherOther = useSelector(state => state.weather.data);
	let sunriseDate = new Date(wheatherSys?.sunrise * 1000);
	let sunsetDate = new Date(wheatherSys?.sunset * 1000);

	return (
		<section className="grid grid-cols-1  md:grid-cols-3 gap-4 p-4">
			<section className="bg-gray-800 rounded-lg p-4 text-white">
				<div className="flex flex-col items-center">
					<h1 className="text-6xl font-bold">{weatherData?.temp ? weatherData.temp : 'none'}°C</h1>
					<span className="text-xl">Feels like: {weatherData?.feels_like ? weatherData.feels_like : 'none'}°C</span>
				</div>
				<div className="flex flex-col mt-8">
					<div className="flex justify-evenly">
						<BsSunrise size="55" className="align-middle" />
						<div>
							<p>Sunrise</p>
							<p>{sunriseDate.toLocaleTimeString() ? sunriseDate.toLocaleTimeString() : undefined}</p>
						</div>
					</div>

					<div className="flex justify-evenly mt-5">
						<BsSunset size="55" className="align-middle" />
						<div>
							<p>Sunset</p>
							<p>{sunsetDate.toLocaleTimeString() ? sunsetDate.toLocaleTimeString() : undefined}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-800 rounded-lg p-4  flex flex-col justify-center items-center ">
				<img
					src={`https://openweathermap.org/img/wn/${weatherDataIcon.data?.weather[0].icon}@4x.png`}
					alt={weatherDataIcon.data?.weather[0]?.description || 'Weather Icon'}
				/>
				<h2 className="text-white text-[22px] font-bold">{weatherDataIcon.data?.weather[0]?.description || 'Weather Icon'}</h2>
			</section>

			<section className="bg-gray-800 rounded-lg p-4 text-white">
				<h2 className="text-2xl font-bold mb-4">Weather Details</h2>
				<ul className="grid grid-cols-2 gap-4">
					<li className="flex flex-col items-center">
						<WiStrongWind size="50" />
						<span className="text-xl font-bold">{wheatherOther?.wind?.speed}Kh</span>
						<p>wind speed</p>
					</li>
					<li className="flex flex-col items-center">
						<WiHumidity size="50" />
						<span className="text-xl font-bold">{weatherData?.humidity}%</span>
						<p>humidity</p>
					</li>
					<li className="flex flex-col items-center">
						<IoMdSpeedometer size="50" />
						<span className="text-xl font-bold">{weatherData?.pressure}</span>
						<p>Pressure</p>
					</li>
					<li className="flex flex-col items-center">
						<FaTemperatureHigh size="40" />
						<span className="text-xl font-bold">{weatherData?.grnd_level}</span>
						<p>grand-level</p>
					</li>
				</ul>
			</section>
		</section>
	);
};

export default WheatherDashbaord;
