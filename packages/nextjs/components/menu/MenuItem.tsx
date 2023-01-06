import { Text, TextProps } from "@components/text";
import React from "react";
import { Flex } from "rebass";

export interface MenuItem extends Partial<TextProps> {
  separator?: boolean;
  CustomeContent?: JSX.Element;
  onClick?: () => void;
  onDoubleClick?: () => void;
  Icon?: JSX.Element;
  label?: string;
}

export const MenuItem = ({ separator, CustomeContent, Icon, label, dataAzinoveId, ...props }: MenuItem) => {
  return (
    <>
      {CustomeContent ?? (
        <>
          <Flex
            px={4}
            py={2}
            mb={separator ? 2 : 0}
            sx={{
              cursor: "pointer",
              ":hover": { bg: "lightGrey" }
            }}
            {...props}
          >
            {Icon ?? null}
            <Text as="span" dataAzinoveId={dataAzinoveId} textAlign="center" m="auto" ml={3}>
              {label}
            </Text>
          </Flex>
          <Flex mb={separator ? 2 : 0} sx={{ borderBottom: separator ? "solid 1px lightGrey" : null }} />
        </>
      )}
    </>
  );
};
