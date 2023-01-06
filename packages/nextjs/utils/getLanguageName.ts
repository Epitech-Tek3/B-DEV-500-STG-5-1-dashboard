import { LangNameT } from "@hooks/useTranslate";
import { Locale } from "@libraries/translation/types";

export const getLanguageName = (lang: Locale) =>
  lang == "fr"
    ? "Français"
    : lang == "en"
    ? "English"
    : lang == "es"
    ? "Spanish"
    : lang == "de"
    ? "Deutsch"
    : "Russian";

export const getLanguageValue = (lang: LangNameT) =>
  lang == "Français" ? "fr" : lang == "English" ? "en" : lang == "Spanish" ? "es" : lang == "Deutsch" ? "de" : "ru";
