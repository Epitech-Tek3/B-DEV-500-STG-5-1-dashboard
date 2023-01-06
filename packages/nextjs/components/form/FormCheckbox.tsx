import { Checkbox, Label } from "@rebass/forms";
import React from "react";
import { Box, BoxProps } from "rebass";

export interface FormCheckboxProps extends Omit<BoxProps, "css"> {
  id: string;
  name: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps & { ref }> = React.forwardRef(({ ...props }, ref) => {
  return (
    <Label sx={{ cursor: "pointer" }} onClick={props.onClick as any}>
      <Checkbox id={props.id} variant="secondary" sx={{ fill: "secondary" }} name={props.name} ref={ref} />
      <Box ml={2} {...props}>
        {props.children}
      </Box>
    </Label>
  );
});

FormCheckbox.displayName = "FormCheckbox";
