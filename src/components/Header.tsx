import React from 'react';

import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useWeather } from '../context/WeatherContext';
import { BiMapPin, BiMoon, BiSun } from 'react-icons/bi';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const { getLocationWeather } = useWeather();

  return (
    <header className={`sticky top-0 z-10 py-4 shadow-lg transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container flex items-center justify-between max-w-4xl px-4 mx-auto">
        <h1 className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">
          {t('appTitle')}
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={getLocationWeather}
            className="p-2 transition rounded-full hover:bg-blue-100 dark:hover:bg-gray-700"
            aria-label={t('useMyLocation')}
            title={t('useMyLocation')}
          >
            <BiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </button>

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm text-blue-600 transition bg-blue-100 rounded-md dark:bg-gray-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-600"
            aria-label={t('languageToggle')}
          >
            {t('languageToggle')}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 transition rounded-full hover:bg-blue-100 dark:hover:bg-gray-700"
            aria-label={t('themeToggle')}
            title={t('themeToggle')}
          >
            {theme === 'dark' ? (
              <BiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <BiMoon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;