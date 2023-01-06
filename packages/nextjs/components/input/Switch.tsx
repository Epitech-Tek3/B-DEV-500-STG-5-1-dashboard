import React from "react";
import { Text, Box, TextProps } from "rebass";

export interface SwitchIProps extends Omit<TextProps, "css"> {
  noText?: boolean;
  small?: boolean;
  theme?: "primary" | "blue" | "black" | "white" | "green" | "orange";
}

export const Switch: React.FC<SwitchIProps> = ({ noText, small, theme, ...props }) => {
  let switchClass = "switch";

  small == true ? (switchClass += " switch--small") : null;
  noText == true ? (switchClass += " switch--no-text") : null;

  return (
    <Box
      aria-label={props.id}
      className={`switch ${small == true && "switch--small"} ${noText == true && "switch--no-text"} ${
        theme && `switch--${theme}`
      }`}
    >
      <Text as="label" className="switch__label" htmlFor={props.id}>
        <Text as="input" role="switch" type="checkbox" className="switch__input" {...props} />
        <Text as="span" className="switch__text" data-on="ON" data-off="OFF" />
        <Text as="span" className="switch__handle" ml="2px" mr="2px" mt="2px" />
      </Text>
    </Box>
  );
};
