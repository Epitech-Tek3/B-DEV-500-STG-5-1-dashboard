import { Box, Text } from "rebass";
import { FormAuthProviderList } from "@components/form/auth";
import { FormSignup } from "./Form";
import React from "react";
import { useTranslation } from "@hooks/useTranslation";

export interface SigninProps {
  changeSignMethod: () => void;
  onValidate?: () => void;
}

export const Signup = ({ changeSignMethod, onValidate }: SigninProps) => {
  const { text } = useTranslation();

  return (
    <>
      <Text as="h2" fontSize={[3, "initial"]} width="100%" textAlign="center" m="auto">
        {text.loginPopupWelcome}
      </Text>
      <Box width="100%" height="fit-content" mt={3}>
        <FormAuthProviderList type="signup" onValidate={onValidate} />
        <Text as="strong" m="auto" my={3} display="flex" width="fit-content">
          {text.loginPopupOr}
        </Text>
        <FormSignup />
        <Text as="p" fontSize={[0, 1]}>
          {text.loginPopupHaveAccount}
          <Text
            as="span"
            fontWeight="600"
            color="secondary"
            sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
            onClick={changeSignMethod}
          >
            &nbsp;{text.loginPopupHaveAccountLogin}
          </Text>
        </Text>
      </Box>
    </>
  );
};
