import ru from './ru.json';
import en from './en.json';
import uz from './uz.json';

const languages = { ru, en, uz };

let currentLang = 'ru'; // По умолчанию русский

export const setLang = (lang) => {
  if (languages[lang]) currentLang = lang;
};

export const useI18n = () => {
  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), languages[currentLang]);
  };
  return { t };
};
