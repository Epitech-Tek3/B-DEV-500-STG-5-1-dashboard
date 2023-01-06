import { ExpandMoreRounded } from "@material-ui/icons";
import React from "react";
import { Box, Flex, FlexProps, Text } from "rebass";
import { OpenableBox } from ".";

export interface OpenableBoxLabeledProps extends Omit<FlexProps, "css"> {
  open: boolean;
  label: string;
  color?: string;
  onClose?: () => void;
}

export const OpenableBoxLabeled: React.FC<OpenableBoxLabeledProps> = ({ ...props }) => {
  return (
    <>
      <Flex m="auto" pb={3} onClick={props.onClose} {...props}>
        <Text as="p" fontSize={2} my="auto" color={props.color ?? "grey"} fontWeight="600">
          {props.label}
        </Text>
        <Box
          height="fit-content"
          m="auto"
          mr={0}
          sx={{
            "& > svg": { fill: props.color ?? "grey" },
            transition: ".2s",
            transform: props.open ? "rotate(0deg)" : "rotate(180deg)"
          }}
        >
          <ExpandMoreRounded />
        </Box>
      </Flex>
      <OpenableBox open={props.open}>{props.children}</OpenableBox>
    </>
  );
};
