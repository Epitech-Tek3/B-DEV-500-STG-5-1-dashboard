import "firebase/auth";
import { Box, Text } from "rebass";
import React from "react";
import { FormSignin } from "./Form";
import { FormAuthProviderList } from "@components/form/auth";
import { useTranslation } from "@hooks/useTranslation";

export interface SigninProps {
  changeSignMethod: () => void;
  onResetPassword: () => void;
  onValidate?: () => void;
}

export const Signin: React.FC<SigninProps> = ({ changeSignMethod, onResetPassword, onValidate }) => {
  const { text } = useTranslation();

  return (
    <>
      <Text as="h2" fontSize={[3, "initial"]} width="100%" textAlign="center" m="auto">
        Hello
      </Text>
      <Box width="100%" height="fit-content" mt={3}>
        <FormAuthProviderList type="signin" onValidate={onValidate} />
        <Text as="p" fontWeight="700" m="auto" my={3} display="flex" width="fit-content">
          {text.loginPopupOr}
        </Text>
        <FormSignin onResetPassword={onResetPassword} />
        <Text as="p" fontSize={[0, 1]}>
          {text.loginPopupNoAccount}
          <Text
            as="span"
            fontWeight="600"
            color="secondary"
            sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}
            onClick={changeSignMethod}
          >
            &nbsp;{text.loginPopuNoAccountpSubscribe}
          </Text>
        </Text>
      </Box>
    </>
  );
};
