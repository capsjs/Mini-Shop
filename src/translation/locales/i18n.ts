import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import intervalPlural from "i18next-intervalplural-postprocessor";
import { initReactI18next } from "react-i18next";

import commonEn from "./en_GB/translation.json";
import commonFr from "./fr_FR/translation.json";

export const RESOURCES = {
  en: { common: commonEn },
  fr: { common: commonFr },
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

export const defaultNS = "common";

i18n
  .use(LanguageDetector)
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources: RESOURCES,
    defaultNS,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;