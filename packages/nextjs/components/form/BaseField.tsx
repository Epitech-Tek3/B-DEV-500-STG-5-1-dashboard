import React from "react";
import { Input, Textarea } from "@rebass/forms";

type InputProps = {
  type?: string;
  untouched?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  name?: string;
  placeholder?: string;
  maxLength?: number;
};

export const BaseInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", untouched, disabled, isValid, ...props }, ref) => {
    return (
      <Input
        type={type}
        ref={ref}
        disabled={disabled}
        sx={{
          borderColor: disabled ? "lightGrey" : untouched ? "lightGrey" : isValid ? "blue" : "error",
          ":focus": {
            borderColor: isValid ? "blue" : "error"
          },
          ":hover": {
            cursor: disabled ? "not-allowed" : "unset"
          }
        }}
        {...props}
      />
    );
  }
);

export const BaseTextarea = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", untouched, isValid, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        sx={{
          borderColor: untouched ? "lightGrey" : isValid ? "blue" : "error",
          ":focus": {
            borderColor: isValid ? "blue" : "error"
          },
          height: "200px"
        }}
        {...props}
      />
    );
  }
);

BaseInput.displayName = "testestes";
BaseTextarea.displayName = "testestes";
