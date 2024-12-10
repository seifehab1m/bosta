import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AntProvider from "./providers/AntProvider.tsx";
import "./assets/styles/index.css";
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AntProvider>
        <App />
      </AntProvider>
    </Provider>
  </StrictMode>
);
