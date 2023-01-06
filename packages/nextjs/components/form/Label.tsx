import React from "react";
import { Text as RbText } from "rebass";

interface IProps {
  name: string;
  help?: string;
  label: string;
  small?: boolean;
}

export const Text = ({ name, label, small }: IProps) => {
  return (
    <RbText
      as="label"
      htmlFor={name}
      mb={2}
      fontSize={small ? 1 : [1, 2]}
      fontWeight={2}
      color="text"
      sx={{ display: "inline-block" }}
    >
      {label}
      {/* {help && <Tool help={help} />} */}
    </RbText>
  );
};
