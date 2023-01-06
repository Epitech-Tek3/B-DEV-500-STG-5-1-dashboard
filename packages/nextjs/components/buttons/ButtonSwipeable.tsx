import { DeleteForeverOutlined, VisibilityOutlined } from "@material-ui/icons";
import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type as ListType
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { Box } from "rebass";
import styled from "@emotion/styled";

const ActionContent = styled.div(({ ...props }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "8px",
  fontSize: "12px",
  boxSizing: "border-box",
  color: "#eee",
  userSelect: "none",
  ...props.style
}));

export interface ButtonSwipeableProps {
  title?: string;
  onAccept?: () => void;
  onDelete?: () => void;
  style?: React.CSSProperties;
  deleteStyle?: React.CSSProperties;
  acceptStyle?: React.CSSProperties;
  deleteOnly?: boolean;
  type?: ListType;
}

const colors = {
  accepted: "#5cb85c",
  deleted: "#EE273A"
};

export const ButtonSwipeable: React.FC<ButtonSwipeableProps> = ({ type = ListType.ANDROID, ...props }) => {
  const leadingActions = (deleteOnly: boolean) => (
    <LeadingActions>
      <SwipeAction onClick={deleteOnly ? props.onDelete : props.onAccept}>
        <ActionContent style={{ backgroundColor: colors.accepted, ...props.acceptStyle }}>
          {deleteOnly ? <DeleteForeverOutlined /> : <VisibilityOutlined />}
        </ActionContent>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={props.onDelete}>
        <ActionContent style={{ backgroundColor: colors.deleted, ...props.deleteStyle }}>
          <DeleteForeverOutlined />
        </ActionContent>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <Box className="basic-swipeable-list__container">
      <SwipeableList style={props.style} threshold={0.5} type={type}>
        <SwipeableListItem leadingActions={leadingActions(props.deleteOnly)} trailingActions={trailingActions()}>
          {props.children}
        </SwipeableListItem>
      </SwipeableList>
    </Box>
  );
};
