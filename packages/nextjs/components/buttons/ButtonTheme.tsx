import { useTheme } from "@hooks/useTheme";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import React from "react";
import { Flex } from "rebass";

export const ButtonTheme = () => {
  const { isDark, setDarkTheme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Flex
      alignItems="center"
      mr={width < 415 ? 0 : 3}
      sx={{ svg: { fill: "grey" }, cursor: "pointer" }}
      onClick={() => {
        if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
          localStorage.setItem("darkMode", String(!isDark));
        }
      }}
    >
      {isDark ? (
        <Brightness7 onClick={() => setDarkTheme((isDark) => !isDark)} />
      ) : (
        <Brightness4 onClick={() => setDarkTheme((isDark) => !isDark)} />
      )}
    </Flex>
  );
};
