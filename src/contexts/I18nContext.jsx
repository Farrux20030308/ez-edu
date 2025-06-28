import { createContext, useContext, useState } from 'react';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import uz from '../locales/uz.json';
let currentLang = localStorage.getItem('lang') || 'ru';
const translations = { ru, en, uz };

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('ru');

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), translations[language]);
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) setLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
export const setLang = (lang) => {
  if (languages[lang]) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
  }
};