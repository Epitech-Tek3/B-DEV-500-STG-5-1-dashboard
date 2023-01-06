import { Switch } from "@material-ui/core";
import dynamic from "next/dynamic";
const Label = dynamic<any>(() => import("@rebass/forms").then((mod) => mod.Label));
import React, { FC } from "react";
import { Flex } from "rebass";

export interface FormSwitchProps {
  label?: string;
  name: string;
  checked?: boolean;
  id: string;
  onChange: (e?: any) => void;
}

export const FormSwitch: FC<FormSwitchProps> = ({ ...props }) => {
  return (
    <Flex alignItems="center">
      {props.label && (
        <Label htmlFor={props.id} fontSize="14px !important" color="black" width="fit-content">
          {props.label}
        </Label>
      )}
      <Switch name={props.name} id={props.id} onChange={props.onChange} checked={props.checked} />
    </Flex>
  );
};
