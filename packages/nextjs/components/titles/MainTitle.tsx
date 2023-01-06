import React from "react";
import { Text } from "rebass";

export const MainTitle = ({ title, ...props }) => {
  return (
    <Text as="h1" color="persistanteWhite" fontSize={[3, 6]} fontWeight="700" lineHeight="60px" my="0" {...props}>
      {title}
    </Text>
  );
};
