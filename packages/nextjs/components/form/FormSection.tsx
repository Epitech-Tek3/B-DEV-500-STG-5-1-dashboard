import { PopOverDescription } from "@components/popOver/PopOverDescription";
import { InfoOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import { Box, Text, Flex, BoxProps, TextProps } from "rebass";

interface IProps extends Omit<BoxProps, "css"> {
  infoId?: string;
  label: string;
  labelSx?: Omit<TextProps, "css">;
  containerSx?: Omit<BoxProps, "css">;
  infoText?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<IProps> = ({ ...props }: IProps) => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <Box my={2} py={2} color="grey" fontSize={1} fontWeight="700" {...props}>
      <Flex alignItems="center" mb={3}>
        <Text as="legend" {...props.labelSx}>
          {props.label}
        </Text>
        {props.infoText && (
          <>
            <Flex
              alignItems="center"
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
              ml={3}
              width={24}
              height={24}
            >
              <InfoOutlined id={props.infoId} />
              <PopOverDescription
                description={props.infoText}
                open={infoOpen}
                anchorEl={document.getElementById(props.infoId)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                disableScrollLock
              />
            </Flex>
          </>
        )}
      </Flex>
      <Box {...props.containerSx}>{props.children}</Box>
    </Box>
  );
};
