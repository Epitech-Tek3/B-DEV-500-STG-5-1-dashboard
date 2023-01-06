import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "rebass";
import { LottieAnimation } from "../lottie";
import notComplete from "../appIcons/animations/notComplete.json";
import { Button } from "@components/buttons/button";
import { Helper } from "@components/helper";
import { useWindowDimensions } from "@hooks/useWindowDimensions";

export interface NotConnectedProps {
  onClick?: () => void;
}

export const NotComplete = ({ onClick }: NotConnectedProps) => {
  const { width } = useWindowDimensions();
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
      setShowHelper(localStorage.getItem("completeProfileHelper") == "true" ? false : true);
    }
  }, [0]);

  return (
    <Flex
      m="auto"
      width="100%"
      height={`calc(100vh - 64px - ${width < 415 ? "65px" : "0px"})`}
      justifyContent="center"
      onClick={onClick}
    >
      <Helper
        open={showHelper}
        arrowPosition={width > 415 ? "right" : "left"}
        position={{ top: 70, left: width < 415 && 10, right: width > 415 && 10 }}
        onClose={() => setShowHelper(false)}
      >
        <Box maxWidth="300px">
          <Text as="p" fontWeight="700">
            Compléter mon profil
          </Text>
          <Text as="p" mt={3} fontSize={1}>
            Pour accéder a cette section, vous devez compléter votre profil.
          </Text>
          <Flex
            m="0"
            mt={3}
            width="100%"
            onClick={() => {
              if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
                localStorage.setItem("completeProfileHelper", "true");
              }
              setShowHelper(false);
            }}
            sx={{
              div: { flexDirection: "row-reverse" },
              button: {
                color: "white",
                fontWeight: 700,
                fontSize: 12,
                textTransform: "none",
                marginLeft: 10
              }
            }}
          >
            <Button bg="#1a73e8">J&apos;ai compris</Button>
          </Flex>
        </Box>
      </Helper>
      <Flex height="fit-content" m="auto" flexDirection="column">
        <Flex width={400} height={350} sx={{ "@media screen and (max-width: 400px)": { width: 300, height: 250 } }}>
          <LottieAnimation lotti={notComplete} height="100%" width="100%" />
        </Flex>
        <Text as="h1" textAlign="center" mt={2} sx={{ "@media screen and (max-width: 400px)": { fontSize: 4 } }}>
          Votre profil n&apos;est pas complété
        </Text>
      </Flex>
    </Flex>
  );
};
