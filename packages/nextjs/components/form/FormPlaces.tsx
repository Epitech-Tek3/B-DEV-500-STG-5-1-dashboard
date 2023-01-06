import { Input } from "@rebass/forms";
import React, { useState, useEffect } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Box, BoxProps, Flex } from "rebass";
import { FormInputLabel } from "./input/Label";

export interface FormPlacesProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: any;
  containerProps?: Omit<BoxProps, "css">;
  triggerError?: boolean;
  required?: boolean;
}

export const FormPlaces: React.FC<FormPlacesProps & { ref }> = React.forwardRef(
  ({ placeholder, id, name, defaultValue, required, label, containerProps, triggerError }, ref) => {
    const [value, setValue] = useState<any>(defaultValue ? JSON.parse(defaultValue) : "");
    const [errorRequired, setErrorRequired] = useState(triggerError);

    useEffect(() => triggerError && setErrorRequired(true), [triggerError]);

    return (
      <Box {...containerProps}>
        <FormInputLabel isError={errorRequired} errorRequired={errorRequired} label={label} name="" id="" />
        <Flex width="100%">
          <Input
            type="text"
            readOnly
            value={JSON.stringify(value) ?? ""}
            name={name}
            id={id}
            display="none"
            ref={ref}
          />
          <Flex
            width="100%"
            sx={{
              "& > div > div": {
                border: `solid 1px`,
                borderColor: `${errorRequired ? "error" : "inputBorderColor"}`,
                bg: "inputColor",
                borderRadius: 7,
                ":hover": {
                  cursor: "text",
                  borderColor: !errorRequired && "rgba(26,115,232, 0.5)",
                  boxShadow: "none"
                },
                ":active": {
                  borderColor: !errorRequired && "rgba(26,115,232, 0.5)",
                  boxShadow: "none"
                },
                boxShadow: "none",
                width: "100%",
                minHeight: 50
              },
              "& > div": {
                color: "black",
                width: "100%"
              },
              "& > div > div > div > div:nth-of-type(1)": {
                color: "lightGrey"
              }
            }}
            onBlur={() => {
              if (required && !value) setErrorRequired(true);
            }}
          >
            <GooglePlacesAutocomplete
              apiKey="AIzaSyAG2IQfudCbo-oLiG11-U_7nxLEhZxu4I0"
              selectProps={{
                value,
                onChange: (value) => {
                  setValue(value);
                  setErrorRequired(false);
                },
                placeholder: placeholder ?? "5 Av. Anatole France, 75007 Paris, France"
              }}
            />
          </Flex>
        </Flex>
      </Box>
    );
  }
);

FormPlaces.displayName = "FormPlaces";
