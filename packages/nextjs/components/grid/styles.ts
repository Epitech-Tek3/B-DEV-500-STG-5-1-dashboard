import styled from "@emotion/styled";
import React from "react";

export interface GridStyledProps {
  widthItems?: string;
  gap?: string;
  style?: React.CSSProperties;
}

export const Grid = styled.div((props: GridStyledProps) => ({
  display: "grid",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.widthItems ?? "250px"}, 1fr))`,
  gridGap: props.gap ?? "10px",
  ...props.style
}));
