import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound: React.FC = () => {
	const { t } = useLanguage();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 rounded-md">
			<h1 className="m-0 text-blue-950 text-9xl">{t('title')}</h1>
			<p className="text-xl text-gray-600">{t('message')}</p>
			<Link to="/" className="mt-5 text-lg text-blue-600 hover:underline">
				{t('backHome')}
			</Link>
		</div>
	);
};

export default NotFound;
