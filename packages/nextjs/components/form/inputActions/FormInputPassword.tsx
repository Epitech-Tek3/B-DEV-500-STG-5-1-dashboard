import { Boop } from "@components/animations/Boop";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import React from "react";
import { animated } from "react-spring";
import { transition } from "./transition";

interface FormInputClearProps {
  show: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const FormInputPassword: React.FC<FormInputClearProps> = ({ show, onClick, disabled = true }) => {
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
          onClick={(e) => onClick(e)}
        >
          <Boop rotation={20} timing={200}>
            {show ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
          </Boop>
        </animated.div>
      )
    );
  });
};
