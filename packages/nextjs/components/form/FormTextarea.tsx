import { FormError } from "./FormError";
import { Relative } from "../common/Position";
import { Textarea, TextareaProps } from "@rebass/forms";
import React, { useState } from "react";
import { FormInputReset } from "./inputActions/FormInputReset";
import { FormInputClear } from "./inputActions/FormInputClear";

interface FormTextareaI extends Omit<TextareaProps, "css"> {
  name: string;
  id: string;
  reset?: boolean;
  minLength?: number;
  maxLength?: number;
  onClear?: (e) => void;
  triggerErrorRequired?: boolean;
}

export const FormTextarea: React.FC<FormTextareaI & { ref }> = React.forwardRef((props, ref) => {
  const {
    onChange = () => null,
    onError = () => null,
    onBlur = () => null,
    onReset = () => null,
    onClear = () => null,
    minLength = 0,
    maxLength = 300
  } = props;

  const [errorRequired, setErrorRequired] = useState(props.triggerErrorRequired);
  const [errorMaxLength, setErrorMaxLength] = useState(props.triggerErrorRequired);
  const [errorMinLength, setErrorMinLength] = useState(props.triggerErrorRequired);

  const [value, setValue] = useState<string>((props.defaultValue as string) ?? "");

  const isError = errorRequired || errorMaxLength || errorMinLength;

  const { m, ml, mt, mb, mr } = props;

  const resetErrors = () => {
    props.required && errorRequired && setErrorRequired(false);
    errorMinLength && setErrorMinLength(false);
    errorMaxLength && setErrorMaxLength(false);
  };

  return (
    <>
      <Relative m={m} ml={ml} mr={mr} mb={mb} mt={mt}>
        <Textarea
          {...props}
          ref={ref}
          maxHeight={300}
          minHeight={62}
          color={props.disabled ? "grey" : "black"}
          mb={2}
          px={3}
          pt={20}
          mt={0}
          mr={0}
          ml={0}
          height={62}
          pr={4}
          display="flex"
          width="100%"
          onChange={(e) => {
            resetErrors();
            onChange(e);
          }}
          onBlur={(e) => {
            const value = e.target.value;

            if (props.required && !value) setErrorRequired(true);
            else if (value.length < minLength) setErrorMinLength(true);
            else if (value.length > maxLength) setErrorMaxLength(true);
            onBlur(e);
          }}
          onInput={(e) => {
            e.preventDefault();
            const element = e.target as any;

            /* @ts-ignore */
            setValue(e.target.value);

            element.style.height = "62px";
            element.style.height = element.scrollHeight + "px";
          }}
          sx={{
            zIndex: 2,
            position: "relative",
            cursor: props.disabled ? "not-allowed" : "unset",
            border: "none",
            boxShadow:
              !props.disabled && ((props.required && errorRequired) || isError)
                ? "rgba(232, 26, 26, 0.2) 0 1px 6px, rgba(232, 26, 26, 0.2) 0 1px 4px"
                : "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px",
            borderRadius: 7,
            ":hover": {
              boxShadow: !props.disabled && "rgba(26, 115, 232, 0.2) 0 1px 6px, rgba(26, 115, 232, 0.2) 0 1px 4px"
            },
            ":focus": {
              boxShadow: "rgba(26, 115, 232, 0.2) 0 1px 6px, rgba(26, 115, 232, 0.2) 0 1px 4px"
            },
            ...props.sx
          }}
        />
        {props.defaultValue ? (
          <FormInputReset
            onReset={(e) => {
              // @ts-ignore
              document.getElementById(props.id).value = props.defaultValue;
              setValue(props.defaultValue as string);
              onReset(e);
              resetErrors();
            }}
            disabled={value === props.defaultValue || props.disabled == true}
          />
        ) : (
          <FormInputClear
            onClear={(e) => {
              // @ts-ignore
              document.getElementById(props.id).value = "";
              setValue("");
              onClear(e);
              resetErrors();
            }}
            disabled={!value.length || props.disabled == true}
          />
        )}
      </Relative>
      <FormError state={!props.disabled && errorRequired} message="Ce champ est obligatoire" onError={onError} />
      <FormError state={!props.disabled && errorMaxLength} message="Ce champ est trop long" onError={onError} />
      <FormError state={!props.disabled && errorMinLength} message="Ce champ est trop court" onError={onError} />
    </>
  );
});

FormTextarea.displayName = "FormTextarea";
