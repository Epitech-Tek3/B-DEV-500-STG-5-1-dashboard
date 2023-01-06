import { Boop } from "@components/animations/Boop";
import { Clear } from "@material-ui/icons";
import React from "react";
import { animated } from "react-spring";
import { transition } from "./transition";

interface FormInputClearProps {
  onClear: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const FormInputClear: React.FC<FormInputClearProps> = ({ onClear, disabled = true }) => {
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
            fontSize: 36,
            zIndex: 3,
            userSelect: "none",
            cursor: "pointer"
          }}
          onClick={(e) => onClear(e)}
        >
          <Boop rotation={20} timing={200}>
            <Clear />
          </Boop>
        </animated.div>
      )
    );
  });
};
