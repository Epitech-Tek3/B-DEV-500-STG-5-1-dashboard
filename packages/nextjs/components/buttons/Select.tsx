import React from "react";
import {
  FormControl,
  MenuItem,
  MenuItemProps,
  Select as SelectMui,
  SelectProps as SelectMuiProps
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { Flex } from "rebass";
import { FlexProps } from "@interfaces/rebass";
import { makeSerieNumber } from "@utils/makekey";

export interface SelectProps {
  label?: string;
  value: string;
  selectProps?: SelectMuiProps;
  containerProps?: FlexProps;
  options: Omit<MenuItemProps, "button">[];
}

export const Select = ({ label, value, options, containerProps, selectProps }: SelectProps) => {
  return (
    <Flex
      width="100%"
      sx={{
        "& > *": { zIndex: 2000000 },
        "& > div": { bg: "white", width: "100%" },
        label: { color: "white" },
        div: { color: "white" },
        zIndex: 2000000
      }}
      {...containerProps}
    >
      <FormControl variant="outlined">
        <InputLabel id="select-language-label">{label}</InputLabel>
        <SelectMui
          variant="outlined"
          label={label}
          value={value}
          id="select-language"
          {...selectProps}
          MenuProps={{ disableScrollLock: true, disablePortal: true }}
          labelId="select-language-label"
        >
          {options.map((opt) => (
            <MenuItem key={makeSerieNumber(5)} aria-label={opt.value as string} {...opt}>
              {opt.value}
            </MenuItem>
          ))}
        </SelectMui>
      </FormControl>
    </Flex>
  );
};
