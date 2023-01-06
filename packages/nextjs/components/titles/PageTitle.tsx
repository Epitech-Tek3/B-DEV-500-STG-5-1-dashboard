import React from "react";
import { Text } from "rebass";

export const PageTitle: React.FC<any> = ({ ...props }) => (
  <Text
    as="h1"
    color="black"
    fontSize={6}
    fontWeight="700"
    lineHeight="70px"
    textAlign="center"
    m="auto"
    sx={{
      "@media (max-width: 700px)": {
        fontSize: "36px",
        lineHeight: "40px"
      },
      "@media screen and (max-width: 450px)": {
        fontSize: "24px",
        lineHeight: "35px"
      }
    }}
    {...props}
  >
    {props.children}
  </Text>
);
