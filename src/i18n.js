// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import other translations if needed
import translationEN from "./locales/en/translationEn.json";
import translationFR from "./locales/fr/translationFr.json";
import translationIT from "./locales/it/translationIT.json";
import translationES from "./locales/es/translationEs.json";

i18n
  .use(initReactI18next) // Lier i18n à React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
      es: {
        translation: translationES,
      },
      it: {
        translation: translationIT,
      },
      // Add more languages as needed
    },

    fallbackLng: "it", // Fallback language if translation is missing
    debug: process.env.NODE_ENV !== "production", // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes values, so no need for i18next to do it
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Chemin pour charger les traductions depuis le serveur
    },
  });

export default i18n;
