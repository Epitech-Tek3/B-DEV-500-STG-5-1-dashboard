import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { Box } from "rebass";
import { FormInput, FormInputI } from "./input";
import "react-color-palette/lib/css/styles.css";
import { Popover } from "@material-ui/core";

export const FormColorPicker: React.FC<FormInputI & { ref }> = React.forwardRef(({ ...props }, ref) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [color, setColor] = useColor("hex", props.defaultValue?.toString() ?? "#ffffff");

  const closePicker = () => setPickerOpen(false);

  const { m, ml, mr, mt, mb } = props;

  return (
    <Box
      m={m}
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
      sx={{
        ".rcp-light": {
          bg: "lightGrey"
        },
        "#colorContainer::after": {
          content: "''",
          bg: color.hex,
          width: 60,
          height: 45,
          borderTopRightRadius: 7,
          borderBottomRightRadius: 7,
          position: "absolute",
          top: 1.5,
          right: 1.5,
          zIndex: 5
        }
      }}
      width="100%"
    >
      <FormInput
        noCross
        containerId="colorContainer"
        value={color.hex}
        ref={ref}
        name={props.name}
        {...props}
        defaultValue=""
        onClick={() => setPickerOpen(true)}
        width="100%"
        sx={{ cursor: "pointer" }}
      />
      <Popover
        open={pickerOpen}
        disableScrollLock
        onBackdropClick={closePicker}
        onEscapeKeyDown={closePicker}
        anchorEl={document.getElementById(props.id)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <ColorPicker onChange={setColor} height={200} width={300} color={color} hideHSV />
      </Popover>
    </Box>
  );
});

FormColorPicker.displayName = "FormColorPicker";
