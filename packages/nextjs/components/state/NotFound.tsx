import React from "react";
import { Flex } from "rebass";
import { LottieAnimation } from "../lottie";
import noProjectFound from "@components/appIcons/animations/noProjectFound.json";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Text, TextProps } from "@components/text";

export interface NotFoundProps extends Pick<TextProps, "dataAzinoveId"> {
  title: string;
  onClick?: () => void;
}

export const NotFound = ({ title, onClick, dataAzinoveId }: NotFoundProps) => {
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
        <LottieAnimation lotti={noProjectFound} height={350} width={400} />
        <Text as="h1" dataAzinoveId={dataAzinoveId} textAlign="center" mt={2}>
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};
