import { useEffect, useSelector, MapContainer, TileLayer, useMap } from '../../index.js';
import 'leaflet/dist/leaflet.css';
const MapUpdater = ({ lat, lon }) => {
	const map = useMap();
	useEffect(() => {
		if (lat && lon) {
			map.flyTo([lat, lon], 10);
		}
	}, [lat, lon, map]);

	return null;
};

const LocationMapWeather = () => {
	const weatherNameCity = useSelector(state => state.weather?.data);
	const lat = weatherNameCity?.coord?.lat || 0;
	const lon = weatherNameCity?.coord?.lon || 0;

	return (
		<div style={{ height: '450px', width: '100%' }}>
			<MapContainer center={[lat, lon]} zoom={100} style={{ height: '100%', width: '100%' }}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				<TileLayer
					url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=515543a80681807f273a8b415c39e922`}
					attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
				/>

				<MapUpdater lat={lat} lon={lon} />
			</MapContainer>
		</div>
	);
};

export default LocationMapWeather;
