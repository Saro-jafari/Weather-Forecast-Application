---
# Weather Forecast Application 🌦️

This project is a simple weather forecast application built with **React**, **Redux**, and **Material UI**. It fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and allows users to search for current weather and a 5-day forecast by city name.
---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Project Details](#project-details)
- [Future Improvements](#future-improvements)

---

## Demo

Include a link to a live demo here if available, or screenshots.
![image](https://github.com/user-attachments/assets/c10952a6-5d9b-43b1-868b-9619eddd693b)

---

## Features

- **City Search**: Users can search for current weather and a 5-day forecast for any city.
- **Current Weather**: Shows temperature, weather conditions, and an icon representing the weather.
- **5-Day Forecast**: Displays forecast data for each of the next 5 days.
- **Responsive Design**: Optimized for different screen sizes.
- **Error Handling**: Displays a user-friendly message for invalid city names or network issues.
- **Loading State**: Shows a loading indicator while data is being fetched (optional).

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Obtain API Key from OpenWeatherMap

- Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free API key.

### 4. Add API Key to Environment Variables

- Create a `.env` file in the project root directory.
- Add your OpenWeatherMap API key:
  ```env
  REACT_APP_WEATHER_API_KEY=your_openweather_api_key
  ```

### 5. Start the application

```bash
npm start
```

The application will start on `http://localhost:3000`.

---

## Usage

1. Enter a city name in the search bar and press Enter or click the search button.
2. View the current weather details and the 5-day forecast.
3. Adjust the search to look up different cities.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **Material UI**: UI component library for React.
- **OpenWeatherMap API**: Provides weather data for locations worldwide.

---

## Folder Structure

```
weather-forecast-app/
├── public/                     # Public assets
├── src/
│   ├── components/             # React components (include Material UI)
│   ├── redux/                  # Redux setup (actions, reducers, store)
│   ├── services/               # API call functions
│   ├── styles/                 # Component styles (if any)
│   ├── App.js                  # Main application component
│   ├── index.js                # Entry point
│   └── ...
├── .env                        # Environment variables
├── README.md                   # Project readme
└── package.json                # Project dependencies
```

---

## Project Details

This project demonstrates how to integrate React with Redux and Material UI. It highlights the following:

- **API Integration**: Uses OpenWeatherMap API to fetch data.
- **State Management**: Manages application state with Redux.
- **Component-Based Design**: Reusable UI components following React best practices.
- **Styling**: Uses Material UI for consistent styling across components.

---

## Future Improvements

- **Unit Testing**: Add tests for core components and Redux actions/reducers.
- **Extended Forecast**: Implement a 7-day forecast option.
- **Geolocation**: Allow users to get weather based on their location.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Thanks to the team at [OpenWeatherMap](https://openweathermap.org/) for providing an accessible weather API.

---

Feel free to customize this `README.md` to better suit your specific application and requirements.
