import { Text } from "rebass";
import { PopOverDescription } from "@components/popOver/PopOverDescription";
import { PopupDialog } from "@components/popup/PopupDialog";
import { useAuth } from "@hooks/useAuth";
import React, { useState } from "react";
import { SignReCaptcha } from "../SignReCaptcha";

export interface ResetPasswordProps {
  email: string;
  onError?: () => void;
  resetError?: () => void;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({ ...props }) => {
  const { resetPassword, checkEmail } = useAuth();

  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [popupReset, setPopupReset] = useState(false);
  const [captcha, setCaptcha] = useState(0);

  return (
    <>
      <Text
        as="p"
        color="secondary"
        fontWeight="500"
        fontSize={[1, 2]}
        display="flex"
        width="fit-content"
        flexDirection="row-reverse"
        id="forgotPassword"
        m="auto"
        mt={3}
        mr={0}
        onClick={() => {
          if (!props.email.length) props.onError();
          else setCaptcha(1);
        }}
        sx={{ cursor: "pointer" }}
        onMouseEnter={() => setOpenForgotPassword(true)}
        onMouseLeave={() => setOpenForgotPassword(false)}
      >
        Mot de passe oublié ?
      </Text>
      <PopOverDescription
        description="Précisez votre adresse email"
        open={openForgotPassword}
        anchorEl={document.getElementById("forgotPassword")}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      />
      <SignReCaptcha
        open={captcha == 1}
        title="Réinitialisation du mot de passe"
        onCancel={() => setCaptcha(0)}
        onValidate={async () => {
          setCaptcha(2);
          if (await checkEmail(props.email)) {
            await resetPassword(props.email);
            setPopupReset(true);
          } else props.resetError();
        }}
      />
      <PopupDialog
        open={popupReset}
        title="Instructions envoyées"
        buttonDoneTitle="OK"
        fullscreen
        onValidate={() => setPopupReset(false)}
        sx={{ m: "auto" }}
        noCancel
      >
        <Text as="p" m="auto" px={3}>
          Nous vous avons envoyé des instructions pour réinitialiser votre mot de passe à l&apos;adresse {props.email}.
          Consultez votre boîte de réception et vos courriers indésirables pour les retrouver.
        </Text>
      </PopupDialog>
    </>
  );
};
