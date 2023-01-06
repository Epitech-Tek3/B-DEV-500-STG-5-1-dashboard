import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const useTranslation = () => {
  const { text } = useContext(LanguageContext);

  return {
    text
  };
};
