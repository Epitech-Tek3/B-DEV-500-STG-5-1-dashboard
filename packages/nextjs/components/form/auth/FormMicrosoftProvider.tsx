import { Facebook } from "@components/appIcons/Facebook";
import { FormAuthProvider, FormAuthProviderProps } from "./FormAuthProvider";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";

export const FormMicrosoftProvider: React.FC<FormAuthProviderProps> = ({ ...props }) => {
  const { microsoftLogin } = useAuth();
  const router = useRouter();

  return (
    <FormAuthProvider
      providerName="Facebook"
      ProviderLogo={<Facebook width={25} style={{ fill: "#4267B2" }} />}
      onClick={async () => {
        await microsoftLogin();
        router.reload();
      }}
      {...props}
    />
  );
};
