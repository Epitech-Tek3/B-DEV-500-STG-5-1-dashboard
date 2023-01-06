import { useTranslation } from "@hooks/useTranslation";
import React from "react";
import { Flex, Text } from "rebass";
import { BoxShadowed } from "../containers/BoxShadowed";

interface IProps {
  providerName: string;
  ProviderLogo: () => JSX.Element;
  onClick?: () => void;
}

export const AuthProviderItem = ({ providerName, ProviderLogo, onClick = () => null }: IProps) => {
  const { text } = useTranslation();

  return (
    <BoxShadowed display="flex" bg="white" p={3} mb={2} width="100%" onClick={onClick} hover>
      <Flex m="auto">
        <ProviderLogo />
        <Text
          as="span"
          m="auto"
          ml={3}
          color="black"
          fontWeight="700"
          sx={{
            "@media screen and (max-width: 400px)": {
              fontSize: "10px",
              mt: "5px"
            }
          }}
        >
          {text.loginPopupSignupWith} {providerName}
        </Text>
      </Flex>
    </BoxShadowed>
  );
};
