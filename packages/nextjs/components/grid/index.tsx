import { FlexProps } from "@interfaces/rebass";
import React from "react";
import { Flex } from "rebass";
import { Grid as GridStyled, GridStyledProps } from "./styles";

export const Grid: React.FC<{ containerProps?: FlexProps } & GridStyledProps> = ({ containerProps, ...props }) => {
  return (
    <Flex {...containerProps}>
      <GridStyled {...props}>{props.children}</GridStyled>
    </Flex>
  );
};
