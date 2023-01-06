import { Flex } from "rebass";
import { LottieAnimation } from "../lottie";
import { Text } from "@components/text";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import React from "react";
import workingOn from "../appIcons/animations/workingOn.json";

export interface WorkingOnProps {
  onClick?: () => void;
}

export const WorkingOn = ({ onClick }: WorkingOnProps) => {
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
        <Flex
          width={400}
          height={350}
          m="auto"
          sx={{
            "@media screen and (max-width: 400px)": { width: 300, height: 250 },
            "& > div > svg > g > g > rect": { fill: "transparent" }
          }}
          className="zub"
        >
          <LottieAnimation lotti={workingOn} height="100%" width="100%" />
        </Flex>
        <Text
          as="h1"
          dataAzinoveId="pageStateWorkingOn"
          textAlign="center"
          mt={2}
          sx={{ "@media screen and (max-width: 400px)": { fontSize: 4 } }}
        >
          Ce module n&apos;est pas installé
        </Text>
      </Flex>
    </Flex>
  );
};
