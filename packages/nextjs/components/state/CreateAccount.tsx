import React from "react";
import { Flex } from "rebass";
import { LottieAnimation } from "../lottie";
import createAccount from "../appIcons/animations/createAccount.json";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Text } from "@components/text";
import { useTranslation } from "react-i18next";

interface IProps {
  onClick?: () => void;
}

export const CreateAccount = ({ onClick }: IProps) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <Flex
      m="auto"
      width="100%"
      height={`calc(100vh - 64px - ${width < 415 ? "65px" : "0px"})`}
      justifyContent="center"
      onClick={onClick}
    >
      <Flex height="fit-content" m="auto" flexDirection="column">
        <Flex width={300} height={250} sx={{ "@media screen and (max-width: 400px)": { width: 200, height: 150 } }}>
          <LottieAnimation lotti={createAccount} height="100%" width="100%" />
        </Flex>
        <Text
          as="h1"
          dataAzinoveId="pageStateCreateAccount"
          textAlign="center"
          fontSize={3}
          mt={2}
          sx={{ "@media screen and (max-width: 400px)": { fontSize: 4 } }}
        >
          {t("pageStateCreateAccount")}
        </Text>
      </Flex>
    </Flex>
  );
};
