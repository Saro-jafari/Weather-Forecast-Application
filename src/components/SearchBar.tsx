import React, { useState } from 'react';

import { useWeather } from '../context/WeatherContext';
import { useLanguage } from '../context/LanguageContext';
import { BiSearch } from 'react-icons/bi';

const SearchBar: React.FC = () => {
	const [searchInput, setSearchInput] = useState('');
	const { searchCity } = useWeather();
	const { t, direction } = useLanguage();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchInput.trim()) {
			searchCity(searchInput);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`flex items-center w-full ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
			<div className="relative w-full">
				<input
					type="text"
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
					placeholder={t('searchPlaceholder')}
					className={`w-full py-3 px-4 ${
						direction === 'rtl' ? 'pr-12' : 'pl-12'
					} bg-white dark:bg-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
					aria-label={t('searchPlaceholder')}
				/>
				<div className={`absolute inset-y-0 ${direction === 'rtl' ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
					<BiSearch className="w-5 h-5 text-gray-400" />
				</div>
			</div>
			<button
				type="submit"
				className="flex-shrink-0 px-5 py-3 ml-3 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
				aria-label={t('search')}>
				{t('search')}
			</button>
		</form>
	);
};

export default SearchBar;
