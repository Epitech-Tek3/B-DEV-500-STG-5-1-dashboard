import { animated } from "react-spring";
import { errorTransition } from "./Animation";
import React, { useEffect } from "react";
import { Text } from "rebass";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  state: boolean;
  message: string;
  ml?: number | string;
  onError?: (e?: any) => void;
}

export const FormError: React.FC<IProps> = ({ state, message, onError = () => null, ...props }: IProps) => {
  useEffect(() => {
    if (state) onError();
  }, [state]);

  return errorTransition(state)((style, state) => {
    return (
      state && (
        <animated.div
          style={{
            ...style,
            margin: "auto 0",
            fontStyle: "italic",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontWeight: 500,
            fontSize: 12,
            marginLeft: props.ml ?? 0,
            ...props
          }}
        >
          <Text as="span" color="error">
            {message}
          </Text>
        </animated.div>
      )
    );
  });
};
