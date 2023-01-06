import { Relative } from "@components/common/Position";
import { TextProps } from "@components/text";
import { Input, InputProps } from "@rebass/forms";
import React, { useState } from "react";
import { Box, BoxProps } from "rebass";
import { FormInputAction } from "./Actions";
import { FormInputLabel } from "./Label";

type FormInputErrorT = { state: boolean; message: string };

export interface FormInputI extends Omit<InputProps, "css" | "autoFocus">, Partial<Pick<TextProps, "dataAzinoveId">> {
  name: string;
  id: string;
  dataAzinoveId?: string;
  containerId?: string;
  reset?: boolean;
  onClear?: (e) => void;
  triggerErrorRequired?: boolean;
  containerProps?: Omit<BoxProps, "css">;
  label?: string;
  half?: boolean;
  third?: boolean;
  noCross?: boolean;
  triggerError?: FormInputErrorT;
  noOnBlurHandler?: boolean;
}

export const FormInput: React.FC<FormInputI & { ref }> = React.forwardRef((props, ref) => {
  const {
    onChange = () => null,
    onError = () => null,
    onBlur = () => null,
    onReset = () => null,
    onClear = () => null,
    onKeyDown = () => null,
    triggerError = { state: false, message: null },
    minLength = 0,
    maxLength = 300
  } = props;

  const { m, ml, mt, mb, mr, display } = props;

  const [value, setValue] = useState<string>((props.defaultValue as string) ?? "");

  const [errorRequired, setErrorRequired] = useState(props.triggerErrorRequired);
  const [errorMaxLength, setErrorMaxLength] = useState(props.triggerErrorRequired);
  const [errorMinLength, setErrorMinLength] = useState(props.triggerErrorRequired);

  const [showPassword, setShowPassword] = useState(false);

  const isError = errorRequired || errorMaxLength || errorMinLength || triggerError.state;

  const resetErrors = () => {
    props.required && errorRequired && setErrorRequired(false);
    errorMinLength && setErrorMinLength(false);
    errorMaxLength && setErrorMaxLength(false);
  };
  return (
    <Box width="100%" display={props.display} {...props.containerProps}>
      <FormInputLabel
        isError={props.disabled ? false : isError}
        errorRequired={errorRequired}
        errorMaxLength={errorMaxLength}
        errorMinLength={errorMinLength}
        onError={onError}
        {...props}
      />
      <Box mb={mb ?? 2}>
        <Relative
          id={props.containerId}
          m={m}
          ml={ml}
          mr={mr}
          mt={mt}
          width={props.width ?? (props.half ? 1 / 2 : props.third && 1 / 3)}
          display={display}
        >
          <Input
            {...props}
            display="flex"
            ref={ref}
            color={props.disabled ? "grey" : "black"}
            height={50}
            width="100%"
            mt={0}
            mr={0}
            ml={0}
            pr={50}
            type={showPassword ? "text" : props.type}
            onKeyDown={(e) => {
              e.key == "Enter" && e.preventDefault();
              onKeyDown(e);
            }}
            onChange={(e) => {
              setValue(e.currentTarget.value);
              resetErrors();
              onChange(e);
            }}
            onBlur={(e) => {
              const value = e.target.value;

              if (!props.noOnBlurHandler) {
                if (props.required && !value) setErrorRequired(true);
                else if (value.length < minLength) setErrorMinLength(true);
                else if (value.length > maxLength) setErrorMaxLength(true);
              }
              onBlur(e);
            }}
            sx={{
              zIndex: 2,
              position: "relative",
              cursor: props.disabled ? "not-allowed" : "unset",
              border: `solid 1px`,
              borderColor: `${
                !props.disabled && ((props.required && errorRequired) || isError) ? "error" : "inputBorderColor"
              }`,
              bg: props.disabled ? "white" : "inputColor",
              borderRadius: 7,
              ":hover": {
                borderColor: !props.disabled && !isError && "rgba(26,115,232, 0.5)"
              },
              ":focus": {
                borderColor: !isError && "rgba(26,115,232, 0.5)"
              },
              ...props.sx
            }}
          />
          <FormInputAction
            onShowPassword={() => setShowPassword(showPassword ? false : true)}
            onReset={onReset}
            onClear={onClear}
            onError={onError}
            inputValue={value}
            setInputValue={setValue}
            showPassword={showPassword}
            resetErrors={resetErrors}
            {...props}
          />
        </Relative>
      </Box>
    </Box>
  );
});

FormInput.displayName = "FormInput";
