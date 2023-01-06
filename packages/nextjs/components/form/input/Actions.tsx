import { FormInputClear } from "../inputActions/FormInputClear";
import { FormInputPassword } from "../inputActions/FormInputPassword";
import { FormInputReset } from "../inputActions/FormInputReset";
import { InputProps } from "@rebass/forms";
import React from "react";

export interface FormInputActionProps extends Omit<InputProps, "css" | "autoFocus"> {
  type?: string;
  showPassword?: boolean;
  onShowPassword: (e: any) => void;
  onReset: (e: any) => void;
  onClear: (e: any) => void;
  resetErrors: () => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FormInputAction: React.FC<FormInputActionProps> = ({ ...props }) => {
  return (
    <>
      {props.type == "password" ? (
        <FormInputPassword
          show={props.showPassword}
          onClick={props.onShowPassword}
          disabled={!props.inputValue.length || props.disabled == true}
        />
      ) : props.defaultValue ? (
        <FormInputReset
          onReset={(e) => {
            // @ts-ignore
            document.getElementById(props.id).value = props.defaultValue;
            props.setInputValue(props.defaultValue as string);
            props.onReset(e);
            props.resetErrors();
          }}
          disabled={props.inputValue === props.defaultValue || props.disabled == true}
        />
      ) : (
        <FormInputClear
          onClear={(e) => {
            // @ts-ignore
            document.getElementById(props.id).value = "";
            props.setInputValue("");
            props.onClear(e);
            props.resetErrors();
          }}
          disabled={!props.inputValue.length || props.disabled == true}
        />
      )}
    </>
  );
};
