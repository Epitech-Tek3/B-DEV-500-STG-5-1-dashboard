import { TextProps } from "@components/text";
import { FlexProps } from "@interfaces/rebass";
import { Button as ButtonMui, Tooltip } from "@material-ui/core";
import { useTheme } from "@hooks/useTheme";
import React from "react";
import { Flex } from "rebass";
import { buttonStyle } from "./style";

export interface ButtonProps extends FlexProps, Partial<Pick<TextProps, "dataAzinoveId">> {
  id?: string;
  variant?: "contained" | "outlined" | "text";
  bg?: string;
  fullWidth?: boolean;
  fontWeight?: number;
  type?: string;
  rounded?: boolean;
  textStyle?: "capitalize" | "lowercase" | "firstLetterCapitalize";
  tooltipTitle?: string;
  buttonStyle?: FlexProps;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  bg = "primary",
  fontWeight = 700,
  type = "button",
  onClick = () => null,
  textStyle = "firstLetterCapitalize",
  ...props
}) => {
  const { isDark } = useTheme();
  const ref = React.useRef<HTMLDivElement>();
  const buttonRef = React.useRef<HTMLButtonElement>();

  React.useEffect(() => {
    if (!buttonRef.current) return;
    // @ts-ignore
    buttonRef.current.firstChild.setAttribute("data-azinove-id", props.dataAzinoveId);
  }, [buttonRef]);

  return (
    <Flex
      sx={{ ...buttonStyle(variant, bg, fontWeight, textStyle, isDark, props), ...props.sx }}
      width="fit-content"
      {...props}
      onClick={onClick}
      ref={ref}
    >
      {props.tooltipTitle ? (
        <Tooltip title={props.tooltipTitle} enterDelay={500}>
          <ButtonMui
            ref={buttonRef}
            variant={variant}
            disabled={props.disabled}
            fullWidth={props.fullWidth}
            type={type as any}
          >
            {props.children}
          </ButtonMui>
        </Tooltip>
      ) : (
        <ButtonMui
          ref={buttonRef}
          variant={variant}
          disabled={props.disabled}
          fullWidth={props.fullWidth}
          type={type as any}
        >
          {props.children}
        </ButtonMui>
      )}
    </Flex>
  );
};
