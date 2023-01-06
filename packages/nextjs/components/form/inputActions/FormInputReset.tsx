import React from "react";
import { animated } from "react-spring";
import { transition } from "./transition";

interface FormInputResetProps {
  onReset: (e) => void;
  disabled?: boolean;
}

export const FormInputReset: React.FC<FormInputResetProps> = ({ onReset, disabled = true }) => {
  return transition(!disabled)((style, state) => {
    return (
      state && (
        <animated.div
          style={{
            ...style,
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 50,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 2,
            color: "grey",
            fontSize: 26,
            zIndex: 3,
            userSelect: "none",
            cursor: "pointer"
          }}
          onClick={(e) => onReset(e)}
        >
          ↺
        </animated.div>
      )
    );
  });
};
