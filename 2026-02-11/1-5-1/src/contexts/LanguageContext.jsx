import { createContext, useContext, useState } from "react";
const translations = {
  ko: {
    greeting: "안녕하세요!",
    welcome: "환영합니다",
    changeLanguage: "언어 변경",
  },
  en: {
    greeting: "Hello!",
    welcome: "Welcome",
    changeLanguage: "Change Language",
  },
};
const LanguageContext = createContext({
  language: "ko",
  setLanguage: () => {},
  trans: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");
  const handleLanguage = () => setLanguage((p) => (p === "ko" ? "en" : "ko"));

  const trans = (key) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, handleLanguage, trans }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export const useLang = () => {
  const content = useContext(LanguageContext);
  return content;
};
