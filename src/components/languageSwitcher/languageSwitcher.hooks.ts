import { useTranslation } from "react-i18next";

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return { i18n, changeLanguage };
};
