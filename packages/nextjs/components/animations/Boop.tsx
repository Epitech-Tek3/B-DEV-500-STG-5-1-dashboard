import React, { HTMLAttributes } from "react";
import { animated, useSpring } from "react-spring";

export interface BoopProps extends HTMLAttributes<HTMLDivElement> {
  rotation?: number;
  timing?: number;
  style?: React.CSSProperties;
}

export const Boop: React.FC<BoopProps> = ({ rotation = 20, timing = 200, children, style, ...props }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const styleSpring = useSpring({
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10
    }
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <animated.div
      style={{ ...style, display: "flex", backfaceVisibility: "hidden", ...styleSpring }}
      onMouseEnter={trigger}
      {...props}
    >
      {children}
    </animated.div>
  );
};
