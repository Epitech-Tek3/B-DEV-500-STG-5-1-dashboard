import React from "react";
import { Text, TextProps } from "rebass";

export type SectionTitleProps = Omit<TextProps, "css">;

export const SectionTitle: React.FC<SectionTitleProps> = ({ ...props }) => {
  return (
    <Text
      as="h3"
      color="black"
      fontSize={[3, 4]}
      fontWeight="700"
      mb={2}
      {...props}
      sx={{ "&:first-letter": { textTransform: "capitalize" }, ...props.sx }}
    >
      {props.children}
    </Text>
  );
};
