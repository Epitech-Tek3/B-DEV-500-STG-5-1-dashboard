import React from "react";
import { FormAuthProvider, FormAuthProviderProps } from "./FormAuthProvider";
import { Google } from "@components/appIcons/logo/Google";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { setLogin } from "@utils/setLogin";

export const FormGoogleProvider: React.FC<FormAuthProviderProps> = ({ ...props }) => {
  const { googleLogin } = useAuth();
  const router = useRouter();

  return (
    <FormAuthProvider
      providerName="Google"
      ProviderLogo={<Google width={25} />}
      onClick={async () => {
        await googleLogin();
        props.onValidate();
        setLogin("true");
        router.reload();
      }}
      {...props}
    />
  );
};
