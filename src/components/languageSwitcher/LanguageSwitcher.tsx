import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex gap-2 text-black font-bold">
      <button onClick={() => changeLanguage("en")} aria-live="polite">
        EN
      </button>
      <p>/</p>
      <button onClick={() => changeLanguage("fr")} aria-live="polite">
        FR
      </button>
    </div>
  );
};
export default LanguageSwitcher;
