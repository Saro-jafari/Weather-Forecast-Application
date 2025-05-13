import React, { ReactNode } from 'react';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { theme } = useTheme();
	const { direction } = useLanguage();

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${
				theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-800'
			}`}
			dir={direction}>
			<Header />
			<main className="container max-w-4xl px-4 py-6 mx-auto">{children}</main>
			<div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
		</div>
	);
};

export default Layout;
