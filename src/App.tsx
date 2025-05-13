import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { WeatherProvider } from './context/WeatherContext';
import Layout from './components/Layout';
import WeatherDashboard from './components/WeatherDashboard';
import NotFound from './components/NotFound'; 

function App() {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<WeatherProvider>
					<Router>
						<Layout>
							<Routes>
								<Route path="/" element={<WeatherDashboard />} />

								<Route path="*" element={<NotFound />} />
							</Routes>
						</Layout>
					</Router>
				</WeatherProvider>
			</ThemeProvider>
		</LanguageProvider>
	);
}

export default App;
