import { FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-blue-600">
			<div className="text-center bg-white bg-opacity-80 p-12 rounded-lg shadow-lg max-w-lg">
				<div className="w-32 h-32 mx-auto mb-6 text-blue-600">
					<FaCloud size={128} />
				</div>
				<h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
				<p className="text-2xl text-gray-700 mb-6">Oops! This page is a bit cloudy.</p>
				<p className="text-lg text-gray-500">Looks like the weather took this page away. Try going back to the homepage!</p>
				<Link
					to="/"
					className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
					Go to Homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
