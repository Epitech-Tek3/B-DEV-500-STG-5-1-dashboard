import React from "react";
import { animated, useTransition } from "react-spring";
import { Text } from "rebass";

export const TextError = ({ error }) => {
  const transition = useTransition(error, {
    from: {
      y: -10,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1
    },
    leave: {
      y: 10,
      opacity: 0
    },
    trail: 10
  });

  return (
    <>
      {transition((style, visibility) => {
        return visibility ? (
          <animated.p style={style}>
            <Text as="p" color="error" textAlign="center" fontWeight={600} mb="8px">
              {error}
            </Text>
          </animated.p>
        ) : null;
      })}
    </>
  );
};
