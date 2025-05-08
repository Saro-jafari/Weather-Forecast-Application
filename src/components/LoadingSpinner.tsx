import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LoadingSpinner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-3"></div>
      <p className="text-gray-500 dark:text-gray-400">{t('loading')}</p>
    </div>
  );
};

export default LoadingSpinner;