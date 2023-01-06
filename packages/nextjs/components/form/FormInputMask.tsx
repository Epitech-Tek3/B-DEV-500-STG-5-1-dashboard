import React, { useEffect, useState } from "react";
import { Box, BoxProps } from "rebass";
import InputMask from "react-input-mask";
import { FormInputLabel } from "./input/Label";

export interface FormInputMaskProps {
  id: string;
  name: string;
  defaultValue?: string;
  placeholder: string;
  label: string;
  containerProps?: Omit<BoxProps, "css">;
  required?: boolean;
  triggerError?: boolean;
}

export const FormInputMask: React.FC<FormInputMaskProps & { ref }> = React.forwardRef(
  ({ label, containerProps, placeholder, defaultValue, triggerError, id, name, required }, ref) => {
    const [errorRequired, setErrorRequired] = useState(triggerError);

    useEffect(() => triggerError && setErrorRequired(true), [triggerError]);

    return (
      <Box
        width="100%"
        {...containerProps}
        sx={{
          "& > input": {
            height: 50,
            px: 3,
            width: "100%",
            border: `solid 1px`,
            borderColor: `${errorRequired ? "error" : "inputBorderColor"}`,
            bg: "inputColor",
            borderRadius: 7,
            ":hover": {
              borderColor: !errorRequired && "rgba(26,115,232, 0.5)"
            },
            ":focus": {
              borderColor: !errorRequired && "rgba(26,115,232, 0.5)"
            },
            color: "lightGrey",
            "& > input": {
              bg: "transparent",
              border: "none",
              height: "100%",
              width: "100%"
            }
          }
        }}
      >
        <FormInputLabel id="" name="" isError={errorRequired} errorRequired={errorRequired} label={label} />
        <InputMask
          mask="999-999-999"
          ref={ref as any}
          placeholder={placeholder}
          id={id}
          name={name}
          defaultValue={defaultValue}
          onChange={() => setErrorRequired(false)}
          required={required}
          onBlur={(v) => {
            if (required && !v.target.value) setErrorRequired(true);
          }}
        />
      </Box>
    );
  }
);

FormInputMask.displayName = "FormInputMask";
