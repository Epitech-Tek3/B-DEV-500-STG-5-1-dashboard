import { useAuth } from "@hooks/useAuth";
import { FormActionButton } from "@components/form/FormActionButton";
import { FormInput } from "@components/form/input";
import { getAuthError } from "@utils/getAuthError";
import { makeSerieNumber } from "@utils/makekey";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ResetPassword } from "../resetPassword";
import { useTranslation } from "@hooks/useTranslation";

export const FormSignin: React.FC<any> = () => {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const { handleSubmit, register } = useForm();
  const [error, setError] = useState("");
  const [errorReset, setErrorReset] = useState(false);
  const { text } = useTranslation();
  const [tiggerForgotPsswdError, setTiggerForgotPsswdError] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await signin(data.email, data.password);
    } catch (e) {
      setError(getAuthError(e));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id={`emailSignin${makeSerieNumber(5)}`}
        name="email"
        label={text.loginPopupEmail}
        type="email"
        ref={register}
        onChange={(v) => {
          setEmail(v.currentTarget.value);
          setErrorReset(false);
          setTiggerForgotPsswdError(false);
        }}
        triggerError={{
          state: errorReset || tiggerForgotPsswdError,
          message: tiggerForgotPsswdError ? "Ce champ est obligatoire." : "Cette adresse email n'existe pas."
        }}
        noOnBlurHandler
        required
      />
      <FormInput
        id={`passwordSignin${makeSerieNumber(5)}`}
        name="password"
        label={text.loginPopupPassword}
        type="password"
        ref={register}
        onChange={() => setError("")}
        triggerError={{ state: error.length ? true : false, message: error }}
        noOnBlurHandler
        required
      />
      <ResetPassword
        email={email}
        onError={() => setTiggerForgotPsswdError(true)}
        resetError={() => setErrorReset(true)}
      />
      <FormActionButton title={text.loginPopupLoginButton} noPrev />
    </form>
  );
};
