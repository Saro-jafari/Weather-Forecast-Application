import React from 'react';

import { useLanguage } from '../context/LanguageContext';
import { FiAlertTriangle } from 'react-icons/fi';

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	const { t } = useLanguage();

	return (
		<div className="flex items-start p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
			<FiAlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
			<div>
				<h3 className="font-medium text-red-800 dark:text-red-300">{t('errorTitle')}</h3>
				<p className="mt-1 text-red-700 dark:text-red-400">{message}</p>
			</div>
		</div>
	);
};

export default ErrorMessage;
