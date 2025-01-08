import { LocationMapWeather, useEffect, useState, WeatherDashboard, StatusDays, useSelector, Header } from '../../index.js';
const Main = () => {
	const weatherData = useSelector(state => state.weather.data);
	const [time, setTime] = useState({ hour: '', minute: '' });
	const [date, setDate] = useState('');

	useEffect(() => {
		const updateClock = () => {
			const now = new Date();
			const hours = String(now.getHours()).padStart(2, '0');
			const minutes = String(now.getMinutes()).padStart(2, '0');
			setTime({ hour: hours, minute: minutes });
			const options = { month: 'long', day: 'numeric' };
			const formattedDate = now.toLocaleDateString('en-US', options);
			setDate(formattedDate);
		};

		updateClock();
		const intervalId = setInterval(updateClock, 60000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Header />
			<main className="grid lg:grid-cols-3 col-span-4 md:gap-2 md:p-2 mt-5">
				<section className="col-span-2 lg:col-span-1">
					<div className="bg-slate-600 p-2 rounded-lg h-[30vh] ">
						<section className="flex flex-col items-center text-white ">
							<span className="text-[30px] font-bold">{weatherData?.name ? weatherData?.name : 'Search for the desired city'}</span>
							<span>{weatherData?.sys?.country}</span>
							<p className="text-[50px] font-extrabold">
								{time.hour}:{time.minute}
							</p>
							<p className="text-[20px]">{date}</p>
						</section>
					</div>
					<section className="bg-slate-300 p-2 rounded-lg mt-5">
						<StatusDays />
					</section>
				</section>

				<section className="col-span-2 grid  grid-rows-3 gap-4">
					<section className="row-span-1 bg-[#D9D9D9] rounded-lg p-3">
						<WeatherDashboard />
					</section>

					<section className="row-span-2 bg-[#D9D9D9] rounded-lg p-3 h-[70vh]">
						<LocationMapWeather />
					</section>
				</section>
			</main>
		</>
	);
};

export default Main;
