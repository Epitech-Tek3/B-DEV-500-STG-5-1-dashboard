import React from "react";
import { useTransition, animated } from "react-spring";

export const FadeIn: React.FC<any> = ({ ...props }) => {
  const transition = useTransition(true, {
    from: { opacity: 0 },
    leave: { opacity: 0 },
    enter: { opacity: 1 },
    config: {
      duration: 5000
    }
  });

  return transition((style) => <animated.div style={style}>{props.children}</animated.div>);
};
