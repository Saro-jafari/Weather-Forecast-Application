// React and ReactDOM
export { default as React } from 'react';

// Redux imports
export { Provider } from 'react-redux';
export { useSelector, useDispatch } from 'react-redux';
export { createSlice, configureStore } from '@reduxjs/toolkit';

// React hooks
export { useEffect, useState, useCallback } from 'react';

// React Query imports
export { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// UI Components and Material UI
export { FormControl, InputAdornment, TextField } from '@mui/material';
export { default as SearchIcon } from '@mui/icons-material/Search';
export { default as ClearIcon } from '@mui/icons-material/Clear';
export { default as MyLocationOutlinedIcon } from '@mui/icons-material/MyLocationOutlined';

// React Toastify
export { ToastContainer, toast } from 'react-toastify';

// Leaflet Map

export { MapContainer, TileLayer, useMap } from 'react-leaflet';

// Components
export { default as Header } from './Components/header/Header';
export { default as LocationMapWeather } from './Components/LocationWeatherCity/LocationWeatherCity';
export { default as SearchBox } from './Components/Search/SearchBox';
export { default as Main } from './Components/main/main';
export { default as StatusDays } from './Components/statusDays/StatusDays';
export { default as WeatherDashboard } from './Components/WeatherDashboard/WheatherDashboard';
export { default as App } from './App';

// Redux slices and reducers
export { default as weatherReducer } from './redux/weatherSlice';
export { default as forecastReducer } from './redux/forecastSlice';
export { default as locationReducer } from './redux/LocationSlice';
export { setWeatherData, setWeatherError, setWeatherLoading } from './redux/weatherSlice';
export { setWeatherForecastData, setWeatherForecastLoading, setWeatherForecastError } from './redux/forecastSlice';
export { setLocation, setError } from './redux/LocationSlice';

// Custom hooks
export { default as useWeatherForecast } from './hooks/useForeCast';
export { default as useWeather } from './hooks/useWeather';
export { default as useLocationAndWeather } from './hooks/useLocationAndWeather';

// Icons from React Icons
export { WiStrongWind, WiHumidity } from 'react-icons/wi';
export { IoMdSpeedometer } from 'react-icons/io';
export { BsSunset, BsSunrise } from 'react-icons/bs';
export { FaTemperatureHigh } from 'react-icons/fa';

// Services
export { fetchWeatherForecast } from './services/FetchForecast';
export { fetchWeather } from './services/FetchWeather';

// Axios
export { default as axios } from 'axios';

// Redux Store
export { default as store } from './redux/store';
