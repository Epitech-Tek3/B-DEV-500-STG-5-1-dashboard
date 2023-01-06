import React from "react";
import { Github } from "../appIcons/logo/Github";
import { Google } from "../appIcons/logo/Google";
import { Microsoft } from "../appIcons/logo/Microsoft";
import { useAuth } from "@hooks/useAuth";

export const providers = () => {
  const { googleLogin, microsoftLogin, githubLogin } = useAuth();

  return [
    {
      providerName: "Google",
      ProviderLogo: <Google width={30} height={30} />,
      action: async () => {
        await googleLogin();
      }
    },
    {
      providerName: "Microsoft",
      ProviderLogo: <Microsoft width={30} height={30} />,
      action: async () => {
        await microsoftLogin();
      }
    },
    {
      providerName: "Github",
      ProviderLogo: <Github width={30} height={30} />,
      action: async () => {
        await githubLogin();
      }
    }
  ];
};
