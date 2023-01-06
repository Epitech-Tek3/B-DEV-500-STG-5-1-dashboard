import React from "react";
import { BoxShadowed } from "../containers/BoxShadowed";
import { Absolute } from "../common/Position";

export const Modal = ({ children }) => {
  return (
    <Absolute
      display="flex"
      height="calc(100vh - 64px)"
      width="100%"
      bg="rgba(0, 0, 0, .5)"
      m="auto"
      sx={{ zIndex: 1 }}
    >
      <BoxShadowed m="auto" px={4} py={3}>
        {children}
      </BoxShadowed>
    </Absolute>
  );
};
