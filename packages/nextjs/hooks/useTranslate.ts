import { useCallback, useState } from "react";

export type LangT = "fr" | "en" | "es" | "de" | "ru";
export type LangNameT = "Français" | "English" | "Spanish" | "Deutsch" | "Russian";

const getLangStorage = (): LangT => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
    return localStorage.getItem("lang") as LangT;
  }
};

const setLangStorage = (lang: LangT) => {
  if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null)
    localStorage.setItem("lang", lang);
};

export const useTranslate = () => {
  const [newLang, setLang] = useState<LangT>(getLangStorage() ? getLangStorage() : "fr");

  const changeLang = useCallback(
    (nextLang?: any) => {
      setLang(nextLang);
      setLangStorage(nextLang);
    },
    [setLang]
  );
  return [newLang, changeLang];
};
