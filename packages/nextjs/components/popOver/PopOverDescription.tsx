import React, { useEffect, useState } from "react";
import { Popover, PopoverProps } from "@material-ui/core";
import { Text } from "rebass";

export interface PopoverDescriptionProps extends PopoverProps {
  onClose?: () => void;
  description: string;
  waitTime?: number;
}

export const PopOverDescription: React.FC<PopoverDescriptionProps> = ({
  waitTime = 500,
  onClose = () => null,
  ...props
}) => {
  const [wait, setWait] = useState(false);

  useEffect(() => {
    if (!open) setWait(false);
    if (open)
      setTimeout(() => {
        setWait(true);
      }, waitTime);
    return () => {
      setWait(false);
    };
  }, [open]);
  return wait ? (
    <Popover id="mouse-over-popover" style={{ pointerEvents: "none" }} onClose={onClose} disableScrollLock {...props}>
      <Text as="p" px={2} py={1} fontSize={0}>
        {props.description}
      </Text>
    </Popover>
  ) : null;
};
