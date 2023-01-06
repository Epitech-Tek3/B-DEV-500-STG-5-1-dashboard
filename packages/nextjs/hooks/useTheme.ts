import React from "react";
import { ThemeContext } from "@contexts/ThemeContext";

type ProviderThemeT = {
  isDark: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useTheme = (): ProviderThemeT => {
  return React.useContext(ThemeContext);
};
