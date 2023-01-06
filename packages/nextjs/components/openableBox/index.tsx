import { Content } from "./styles";
import { useMeasure } from "@hooks/useMeasure";
import { useSpring, animated } from "react-spring";
import React, { memo } from "react";
import { Relative } from "@components/common/Position";
import { BoxProps } from "rebass";

export interface OpenableBoxProps extends Omit<BoxProps, "css"> {
  style?: React.CSSProperties;
  open: boolean;
}

export const OpenableBox: React.FC<OpenableBoxProps> = memo(({ style, open = false, ...props }) => {
  // @ts-ignore
  const [bind, { height: viewHeight }] = useMeasure();
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: open ? viewHeight : 0, opacity: open ? 1 : 0 }
  });
  return (
    <Relative
      p={0}
      overflowX="hidden"
      verticalAlign="middle"
      color="grey"
      sx={{ textOverflow: "ellipsis", fill: "grey" }}
      {...props}
    >
      <Content style={{ opacity, height, ...style }}>
        <animated.div {...bind}>{props.children}</animated.div>
      </Content>
    </Relative>
  );
});
