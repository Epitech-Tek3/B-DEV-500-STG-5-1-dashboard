import React from "react";
import { Text } from "rebass";

export const SubTitle: React.FC<any> = ({ ...props }) => (
  <Text
    as="h2"
    className="card-title"
    color="black"
    fontSize={6}
    fontWeight="700"
    lineHeight="60px"
    textAlign="center"
    sx={{
      "@media screen and (max-width: 700px)": {
        fontSize: "36px"
      },
      "@media screen and (max-width: 550px)": {
        fontSize: "24px",
        lineHeight: "25px",
        width: "80%"
      },
      "@media screen and (max-width: 400px)": {
        fontSize: "20px"
      }
    }}
  >
    {props.children}
  </Text>
);
