import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useWeather } from "../context/WeatherContext";
import { BiMapPin, BiMoon, BiSun } from "react-icons/bi";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const { getLocationWeather, loading } = useWeather();

  return (
    <header
      className={`sticky top-0 z-10 py-4 shadow-md transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex max-w-4xl items-center justify-between px-4">
        <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text md:text-2xl">
          {t("appTitle")}
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={getLocationWeather}
            disabled={loading}
            className="p-2 rounded-full transition hover:bg-blue-100 dark:hover:bg-gray-700 disabled:opacity-50"
            aria-label={t("useMyLocation")}
            title={t("useMyLocation")}
          >
            <BiMapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </button>

          <button
            onClick={toggleLanguage}
            className="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-600 transition hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
            aria-label={t("languageToggle")}
          >
            {t("languageToggle")}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition hover:bg-blue-100 dark:hover:bg-gray-700"
            aria-label={t("themeToggle")}
            title={t("themeToggle")}
          >
            {theme === "dark" ? (
              <BiSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <BiMoon className="h-5 w-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
