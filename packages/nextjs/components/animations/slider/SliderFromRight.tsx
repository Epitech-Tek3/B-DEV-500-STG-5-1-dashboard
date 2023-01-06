import React from "react";
import { animated, useTransition } from "react-spring";
import { Flex } from "rebass";
import ReactDOM from "react-dom";

export interface SliderFromRightProps extends React.CSSProperties {
  open?: boolean;
  disabledScrollbar?: boolean;
}

export const SliderFromRight: React.FC<SliderFromRightProps> = ({ open, disabledScrollbar, ...props }) => {
  const transition = useTransition(open, {
    from: { transform: "translate3d(200%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(200%,0,0)" },
    trail: 50
  });

  // useEffect(() => {
  //   if (open) document.body.style.overflowY = "hidden";
  //   else document.body.style.overflowY = "auto";
  //   return () => {
  //     document.body.style.overflowY = "auto";
  //   };
  // }, [open]);

  return ReactDOM.createPortal(
    transition((style, isOpen) => {
      return (
        isOpen && (
          <animated.div style={{ position: "absolute", width: "100%", top: 64, ...style }}>
            <Flex flexDirection="row" height="calc(100vh - 64px)" bg="white" width="100%">
              {props.children}
            </Flex>
          </animated.div>
        )
      );
    }),
    document.body
  );
};
