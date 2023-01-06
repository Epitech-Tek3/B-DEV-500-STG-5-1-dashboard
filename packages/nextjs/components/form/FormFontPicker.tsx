import { Flex } from "rebass";
import { FormInput, FormInputI } from "./input";
import { scrollBar } from "@utils/style";
import dynamic from "next/dynamic";
import React from "react";

const FontPicker = dynamic(() => import("font-picker-react"), { ssr: false });

interface FormFontPickerProps extends FormInputI {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

export const FormFontPicker: React.FC<FormFontPickerProps & { ref }> = React.forwardRef(
  ({ font, setFont, ...props }, ref) => {
    return (
      <Flex
        width={1 / 3}
        sx={{
          "& > #font-picker": {
            bg: "inputColor",
            borderRadius: 7,
            py: 2,
            px: 2,
            border: "solid 1px lightGrey",
            width: "100%"
          },
          "& > #font-picker > button": {
            bg: "inputColor"
          },
          "& > #font-picker > .font-list": {
            left: 0,
            top: "calc(100% + 10px)",
            borderRadius: 7,
            boxShadow: "rgb(0 0 0 / 12%) 0 1px 6px, rgb(0 0 0 / 12%) 0 1px 4px",
            zIndex: 10,
            ...scrollBar
          },
          "& > #font-picker > .font-list > .font-list-item": {
            bg: "inputColor",
            "button:hover": { bg: "white" }
          }
        }}
      >
        <FormInput name="font" id="font" display="none" value={font} readOnly ref={ref} {...props} />
        {/* @ts-ignore */}
        <FontPicker
          apiKey="AIzaSyAG2IQfudCbo-oLiG11-U_7nxLEhZxu4I0"
          activeFontFamily={font}
          variants={[
            "100",
            "100italic",
            "200",
            "200italic",
            "300",
            "300italic",
            "500",
            "500italic",
            "600",
            "600italic",
            "700",
            "700italic",
            "800",
            "800italic",
            "900",
            "900italic",
            "italic",
            "regular"
          ]}
          onChange={(nextFont) => setFont(nextFont.family)}
        />
      </Flex>
    );
  }
);

FormFontPicker.displayName = "FormFontPicker";
