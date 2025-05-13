import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '../i18n/translations';

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  direction: 'ltr' | 'rtl';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    return savedLocale || 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLanguage = () => {
    setLocale(prev => prev === 'en' ? 'fa' : 'en');
  };

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  const direction = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ locale, t, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};