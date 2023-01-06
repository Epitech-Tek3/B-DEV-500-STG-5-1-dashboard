import React from "react";
import { Grid as GridStyled, GridStyledProps } from "./styles";

export const Grid: React.FC<GridStyledProps> = ({ ...props }) => {
  return <GridStyled {...props}>{props.children}</GridStyled>;
};
