import { RECAPTCHA_KEY } from "@utils/constants";
import React from "react";
// eslint-disable-next-line import/no-named-as-default
import ReCAPTCHA from "react-google-recaptcha";

export interface ReCaptchaProps {
  onValidate?: () => void;
}

export const ReCaptcha: React.FC<ReCaptchaProps> = ({ ...props }) => {
  return (
    <ReCAPTCHA
      sitekey={RECAPTCHA_KEY}
      onChange={(v) => {
        if (v.length)
          setTimeout(() => {
            props.onValidate();
          }, 1000);
      }}
    />
  );
};
