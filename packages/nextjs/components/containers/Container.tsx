import React from "react";
import { Flex, FlexProps } from "rebass";

export type ContainerProps = Omit<FlexProps, "css">;

export const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <Flex justifySelf="center" justifyContent="center" justifyItems="center" width="100%" height="100%">
      <Flex {...props} flexDirection="column">
        {props.children}
      </Flex>
    </Flex>
  );
};
