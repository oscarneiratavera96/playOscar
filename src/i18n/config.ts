import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enPlays from './en/plays.json';
import enErrors from './en/errors.json';
import esPlays from './es/plays.json';
import esErrors from './es/errors.json';

export const resources = {
  en: {
    plays: enPlays,
    errors: enErrors,
  },
  es: {
    plays: esPlays,
    errors: esErrors,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'es',
  resources,
  ns: ['plays', 'errors'],
});
