import styled from "@emotion/styled";
import { position, PositionProps } from "styled-system";
import { Box } from "rebass";

/**
 * The position utility includes style props for position, zIndex, top, right, bottom, and left.
 */
export const Position = styled(Box)<PositionProps>(position);
export const Relative = styled(Position)<PositionProps>({ position: "relative" });
export const Absolute = styled(Position)<PositionProps>({ position: "absolute" });
export const Fixed = styled(Position)<PositionProps>({ position: "fixed" });
export const Sticky = styled(Position)<PositionProps>({ position: "sticky" });
