import React from "react";
import { Box } from "rebass";

export const Tr: React.FC<any> = ({ ...props }) => {
  return <Box display="contents">{props.children}</Box>;
};
