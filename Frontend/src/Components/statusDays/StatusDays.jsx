import  {useEffect,useState,useSelector}  from "../../index.js"
const StatusDays = () => {
	const forecastData = useSelector(state => state.forecast.forecastData?.list);

	const [dailySummaries, setDailySummaries] = useState([]);

	useEffect(() => {
		if (forecastData && forecastData.length > 0) {
			const summaries = processForecastData(forecastData);
			setDailySummaries(summaries);
		}
	}, [forecastData]);

	const processForecastData = data => {
		const groupedData = {};

		//Daily data grouping
		data.forEach(item => {
			const date = item.dt_txt.split(' ')[0];
			if (!groupedData[date]) {
				groupedData[date] = [];
			}
			groupedData[date].push(item);
		});

		// Temperature forecast every day
		return Object.entries(groupedData).map(([date, items]) => {
			const avgTemp = items.reduce((sum, item) => sum + item.main.temp, 0) / items.length;
			const { icon, description } = items[0].weather[0];

			return {
				date,
				avgTemp: avgTemp.toFixed(1),
				description,
				icon,
			};
		});
	};

	const formatDate = dateStr => {
		const date = new Date(dateStr);
		const options = { weekday: 'long', month: 'long', day: 'numeric' };
		return new Intl.DateTimeFormat('en-US', options).format(date);
	};

	return (
		<div>
			<h2 className="font-bold text-[40px] text-center">5 day forecast:</h2>
			<ul className="flex flex-col mt-5">
				{dailySummaries.length === 0 ? (
					<li className="flex justify-center items-center py-10 border-b border-gray-300">
						<p className="text-lg">No forecast found</p>
					</li>
				) : (
					dailySummaries.map((summary, index) => (
						<li key={index} className="flex justify-around items-center py-2 border-b border-gray-300">
							<img src={`https://openweathermap.org/img/wn/${summary.icon}@2x.png`} alt={summary.description} className="w-10 h-10" />
							<p className="text-lg font-medium">{summary.avgTemp}°C</p>
							<p className="text-lg">{formatDate(summary.date)}</p>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default StatusDays;
