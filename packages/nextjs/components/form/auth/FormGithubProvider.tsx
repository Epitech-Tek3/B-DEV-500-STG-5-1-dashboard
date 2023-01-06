import React from "react";
import { FormAuthProvider, FormAuthProviderProps } from "./FormAuthProvider";
import { Github } from "@components/appIcons/logo/Github";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import { setLogin } from "@utils/setLogin";

export const FormGithubProvider: React.FC<FormAuthProviderProps> = ({ ...props }) => {
  const { githubLogin } = useAuth();
  const router = useRouter();

  return (
    <FormAuthProvider
      providerName="GitHub"
      ProviderLogo={<Github width={25} />}
      onClick={async () => {
        await githubLogin();
        setLogin("true");
        router.reload();
      }}
      {...props}
    />
  );
};
