import { BoxShadowed } from "@components/containers/BoxShadowed";
import { useTranslation } from "@hooks/useTranslation";
import React from "react";
import { BoxProps, Flex, Text } from "rebass";

export interface FormAuthProviderProps extends Omit<BoxProps, "css"> {
  type?: "signin" | "signup";
  providerName?: string;
  ProviderLogo?: JSX.Element;
  onValidate?: () => void;
}

export const FormAuthProvider: React.FC<FormAuthProviderProps> = ({ ...props }) => {
  const { type = "signin" } = props;
  const { text } = useTranslation();

  return (
    <BoxShadowed display="flex" bg="white" p={3} mb={2} width="100%" onClick={(e) => props.onClick(e)} hover>
      <Flex m="auto">
        {props.ProviderLogo}
        <Text
          as="span"
          m="auto"
          ml={3}
          fontWeight="700"
          sx={{
            "@media screen and (max-width: 400px)": {
              fontSize: "12px",
              mt: "5px"
            }
          }}
        >
          {(type === "signin" ? text.loginPopupLoginWith : text.loginPopupSignupWith) + props.providerName}
        </Text>
      </Flex>
    </BoxShadowed>
  );
};
