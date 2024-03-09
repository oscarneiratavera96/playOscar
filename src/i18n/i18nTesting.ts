import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './config';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  resources,
  ns: ['plays'],
});

export default i18n;
