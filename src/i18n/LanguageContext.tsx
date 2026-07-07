import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { Lang, TranslationKey } from "./translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const htmlLangMap: Record<Lang, string> = {
  EN: "en", RU: "ru", ET: "et", LT: "lt", LV: "lv", FI: "fi", PL: "pl",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    document.documentElement.lang = htmlLangMap[lang];
  }, [lang]);

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    // Fall back to EN for languages that don't yet have translations
    return (entry as unknown as Record<string, string>)[lang] ?? entry.EN ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
