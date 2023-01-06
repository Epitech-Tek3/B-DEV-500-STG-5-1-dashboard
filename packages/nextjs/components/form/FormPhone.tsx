import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Box, BoxProps } from "rebass";
import { FormInputLabel } from "./input/Label";
import { makeSerieNumber } from "@utils/makekey";

export interface FormPhoneProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  containerProps?: Omit<BoxProps, "css">;
}

export const FormPhone: React.FC<FormPhoneProps & { ref }> = React.forwardRef(
  ({ label, defaultValue, id, name, placeholder, containerProps }, ref) => {
    const [value, setValue] = useState(defaultValue);
    const [required, setRequired] = useState(false);
    const idLabel = `form-places-${makeSerieNumber(5)}`;

    return (
      <Box width="100%" {...containerProps}>
        <FormInputLabel
          isError={required}
          errorRequired={required}
          onError={() => null}
          label={label}
          name=""
          id={idLabel}
        />
        <Box
          width="100%"
          sx={{
            "& > div": {
              height: 50,
              px: 3,
              width: "100%",
              border: `solid 1px`,
              borderColor: `${required ? "error" : "inputBorderColor"}`,
              bg: "inputColor",
              borderRadius: 7,
              ":hover": {
                borderColor: "rgba(26,115,232, 0.5)"
              },
              ":focus": {
                borderColor: "rgba(26,115,232, 0.5)"
              },
              "& > input": {
                color: "lightGrey",
                bg: "transparent",
                border: "none",
                height: "100%",
                width: "100%"
              }
            }
          }}
        >
          <PhoneInput
            placeholder={placeholder}
            id={id}
            value={value}
            ref={ref as any}
            onChange={(value) => {
              setValue(value.toString());
              setRequired(false);
            }}
            name={name}
            required
            onBlur={(v) => {
              // @ts-ignore
              !v.currentTarget.value && setRequired(true);
            }}
          />
        </Box>
      </Box>
    );
  }
);

FormPhone.displayName = "FormPhone";
