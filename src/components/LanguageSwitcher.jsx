import { useTranslation } from "react-i18next";

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center gap-2">

      <button
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("mr")}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        मराठी
      </button>

      <button
        onClick={() => changeLanguage("hi")}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        हिंदी
      </button>

    </div>
  );
}

export default LanguageSwitcher;