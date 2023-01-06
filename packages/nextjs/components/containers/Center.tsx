import React from "react";
import { Flex } from "rebass";

export const Center = ({ children, ...props }) => {
  return (
    <Flex m="auto" height="100%" width="100%" {...props}>
      <Flex flexDirection="column" m="auto" p={4}>
        {children}
      </Flex>
    </Flex>
  );
};
