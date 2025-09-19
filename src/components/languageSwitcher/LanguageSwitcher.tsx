import { useLanguageSwitcher } from "./languageSwitcher.hooks";

const LanguageSwitcher = () => {
  const { i18n, changeLanguage } = useLanguageSwitcher();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        aria-live="polite"
        disabled={i18n.language === "en"}
        className={
          i18n.language === "en" ? "text-[#7c52b7] font-bold" : "text-gray-400"
        }
      >
        EN
      </button>
      <p className="text-gray-400">/</p>
      <button
        onClick={() => changeLanguage("fr")}
        aria-live="polite"
        disabled={i18n.language === "fr"}
        className={
          i18n.language === "fr" ? "text-[#7c52b7] font-bold" : "text-gray-400"
        }
      >
        FR
      </button>
    </div>
  );
};
export default LanguageSwitcher;
