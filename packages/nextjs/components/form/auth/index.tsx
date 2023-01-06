import React from "react";
import { FormAuthProviderProps } from "./FormAuthProvider";
import { FormGithubProvider } from "./FormGithubProvider";
import { FormGoogleProvider } from "./FormGoogleProvider";
import { FormMicrosoftProvider } from "./FormMicrosoftProvider";

export const FormAuthProviderList: React.FC<FormAuthProviderProps> = ({ ...props }) => {
  return (
    <>
      <FormGoogleProvider {...props} />
      <FormMicrosoftProvider {...props} />
      <FormGithubProvider {...props} />
    </>
  );
};
