import { useAuth } from "@hooks/useAuth";
import { FormActionButton } from "@components/form/FormActionButton";
import { FormError } from "@components/form/FormError";
import { FormInput } from "@components/form/input";
import { FormTerms } from "@components/form/FormTerms";
import { getAuthError } from "@utils/getAuthError";
import { makeSerieNumber } from "@utils/makekey";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignReCaptcha } from "../SignReCaptcha";
import { useRouter } from "next/router";
import { useTranslation } from "@hooks/useTranslation";

export const FormSignup: React.FC<any> = () => {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const termsId = makeSerieNumber(5);
  const [disable, setDisable] = useState(true);
  const [captcha, setCaptcha] = useState(0);
  const { handleSubmit, register } = useForm();
  const [data, setData] = useState(null);
  const [emailAlreadyUse, setEmailAlreadyUse] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { text } = useTranslation();
  const router = useRouter();

  const onSubmit = async (data) => {
    setCaptcha(1);
    setData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id={`emailSignup${makeSerieNumber(5)}`}
        name="email"
        label={text.loginPopupEmail}
        type="email"
        triggerError={{ state: emailAlreadyUse, message: "Cette adresse email est déjà utilisée." }}
        ref={register}
        required
      />
      <FormInput
        id={`passwordSignup${makeSerieNumber(5)}`}
        name="password"
        label={text.loginPopupPassword}
        type="password"
        ref={register}
        onChange={() => setPasswordError("")}
        triggerError={{ state: passwordError?.length ? true : false, message: passwordError }}
        required
      />
      <FormInput
        id={`confirmPasswordSignup${makeSerieNumber(5)}`}
        name="passwordConfirm"
        label={text.loginPopupPasswordConfirm}
        type="password"
        ref={register}
        required
      />
      <SignReCaptcha
        open={captcha == 1}
        title="Création de votre compte"
        onCancel={() => setCaptcha(0)}
        onValidate={async () => {
          setCaptcha(2);
          if (!data.terms && !disable) {
            setDisable(true);
            return;
          }
          try {
            await signup(data.email, data.password, data.passwordConfirm);
          } catch (e) {
            const error = getAuthError(e);

            if (error === "Cette adresse email est déjà utilisée.") setEmailAlreadyUse(true);
            if (error == "Votre mot de passe est trop court." || error == "Votre mot de passe est trop long.")
              setPasswordError(error);
            else setError(error);
          }
        }}
      />
      <FormError state={error?.length ? true : false} message={error} />
      <FormTerms id={termsId} ref={register} onClick={() => disable && setDisable(false)} />
      <FormActionButton onClick={() => router.reload()} title={text.loginPopupSubscribe} disabled={disable} noPrev />
    </form>
  );
};
