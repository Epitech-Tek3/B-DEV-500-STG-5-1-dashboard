import { useTheme } from "@hooks/useTheme";
import React from "react";
import { Box, BoxProps } from "rebass";

export interface BoxShadowedProps extends Omit<BoxProps, "css"> {
  hover?: boolean;
}

export const BoxShadowed: React.FC<BoxShadowedProps> = ({ children, ...props }) => {
  const { isDark } = useTheme();

  return (
    <Box
      bg="white"
      width="fit-content"
      overflow="hidden"
      px={3}
      py={2}
      {...props}
      sx={{
        boxShadow: isDark
          ? "rgba(255, 255, 255, 0.12) 0 1px 6px, rgba(255, 255, 255, 0.12) 0 1px 4px"
          : "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
        borderRadius: 5,
        cursor: props.hover ? "pointer" : "default",
        transition: ".15s",
        ":hover": { bg: props.hover ? (isDark ? "lightWhite" : "lightGrey") : "default" },
        ...props.sx
      }}
    >
      {children}
    </Box>
  );
};
