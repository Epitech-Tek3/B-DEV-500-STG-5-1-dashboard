import styled from "@emotion/styled";
import { animated } from "react-spring";

const Frame = styled.div`
  position: relative;
  padding: 0px 0px 0px 0px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  vertical-align: middle;
  color: grey;
  fill: white;
`;

const Title = styled.span`
  font-size: 18px;
  vertical-align: middle;
  cursor: pointer;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  overflow-y: hidden;
`;

const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle"
};

export { Frame, Content, toggle, Title };
