import { Flex, Text } from "rebass";
import { LottieAnimation } from "../lottie";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import notConnected from "../appIcons/animations/notConnected.json";
import React from "react";

export interface NotConnectedProps {
  onClick?: () => void;
}

export const NotConnected = ({ onClick }: NotConnectedProps) => {
  const { width } = useWindowDimensions();

  return (
    <Flex
      m="auto"
      width="100%"
      height={`calc(100vh - 64px - ${width < 415 ? "65px" : "0px"})`}
      justifyContent="center"
      onClick={onClick}
    >
      <Flex height="fit-content" m="auto" flexDirection="column">
        <Flex width={400} height={350} sx={{ "@media screen and (max-width: 400px)": { width: 300, height: 250 } }}>
          <LottieAnimation lotti={notConnected} height="100%" width="100%" />
        </Flex>
        <Text as="h1" textAlign="center" mt={2} sx={{ "@media screen and (max-width: 400px)": { fontSize: 4 } }}>
          Vous n&apos;êtes pas connecté
        </Text>
      </Flex>
    </Flex>
  );
};
