import React, { useState } from "react";
import { PopupDialog } from "../popup/PopupDialog";
import { Signin } from "./signin";
import { Slider } from "@components/animations/slider/Slider";
import { Signup } from "./signup";

interface IProps {
  open: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  onValidate?: () => void;
}

export const LoginDialog = ({ open, onClose = () => null, onCancel = () => null, onValidate = () => null }: IProps) => {
  const [signMethod, setSignMethod] = useState(0);

  return (
    <PopupDialog
      open={open}
      onClose={onClose}
      onCancel={onCancel}
      onValidate={onValidate}
      crossClose
      noButtons
      sx={{
        width: 500,
        padding: 30,
        margin: "auto",
        display: "flex",
        "@media screen and (max-width: 500px)": {
          width: "100%"
        }
      }}
      fullscreen
      escape
      backdrop
    >
      <Slider direction={signMethod == 0 ? "ltr" : "rtl"} state={signMethod}>
        <Signin
          changeSignMethod={() => setSignMethod(1)}
          onResetPassword={() => setSignMethod(2)}
          onValidate={onValidate}
        />
        <Signup changeSignMethod={() => setSignMethod(0)} onValidate={onValidate} />
      </Slider>
    </PopupDialog>
  );
};
