import React from "react";
import { IconButton as IconButtonMui, IconButtonProps, Tooltip } from "@material-ui/core";

export interface ButtonIconProps extends IconButtonProps {
  tooltipTitle: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ tooltipTitle, ...props }) => {
  return (
    <Tooltip title={tooltipTitle} enterDelay={500}>
      <IconButtonMui {...props}>{props.children}</IconButtonMui>
    </Tooltip>
  );
};
