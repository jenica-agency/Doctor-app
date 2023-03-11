import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateAr from './locale/ar.json';
import languageDetector from 'i18next-browser-languagedetector';
const resources = {
 
  ar: {
    translation: translateAr
  }
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", 

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense: true
    }

  });

  export default i18n;