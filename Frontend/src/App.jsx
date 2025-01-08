import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Main, ToastContainer } from './index';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './Components/not-found';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
