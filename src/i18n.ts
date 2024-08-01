import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from '../i18n/uz/translationUZ.json'
import ru from '../i18n/ru/translationRU.json'

const resources = {
  ru: {
    translation: ru
  },
  uz: {
    translation: uz
  }
};

i18n
.use(initReactI18next)    
.init({
  resources,
  fallbackLng: 'ru',
  debug: false,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n;