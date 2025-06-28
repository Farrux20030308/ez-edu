import { createContext, useContext, useState } from 'react';
import {translations} from '../locales';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('ru'); // Язык по умолчанию

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj && obj[k] ? obj[k] : key), translations[lang]);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export  const useI18n = () => useContext(I18nContext);
