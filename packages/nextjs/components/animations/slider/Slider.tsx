import React, { useEffect } from "react";
import { animated, useTransition } from "react-spring";

export interface SliderProps extends Omit<React.CSSProperties, "direction"> {
  state: number;
  direction: "rtl" | "ltr";
  disabledScrollbar?: boolean;
}

export const Slider: React.FC<SliderProps> = ({ state, direction, disabledScrollbar, ...props }) => {
  const transition = useTransition(state, {
    from: { transform: `translate3d(${direction == "rtl" ? "100%" : "-100%"},0,0)`, opacity: 0 },
    enter: { transform: "translate3d(0%,0,0)", opacity: 1 },
    leave: {
      transform: `translate3d(${direction == "rtl" ? "-100%" : "100%"},0,0)`,
      opacity: 0,
      position: "absolute"
    },
    trail: 100,
    config: {
      duration: 300,
      precision: 100
    }
  });

  useEffect(() => {
    if (open) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  return transition((style, _) => {
    return <animated.div style={{ width: "100%", ...style, ...props }}>{props.children[state]}</animated.div>;
  });
};
