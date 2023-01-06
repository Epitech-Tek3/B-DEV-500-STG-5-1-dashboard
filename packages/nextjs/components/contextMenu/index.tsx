import React from "react";
import { BoxShadowed } from "../containers/BoxShadowed";
import { ContextMenu as Menu } from "react-contextmenu";
import { MenuItem } from "../menu/MenuItem";

export interface ListContextMenuProps {
  label?: string;
  Icon?: JSX.Element;
  Content?: JSX.Element;
  onClick?: (...data: any) => void;
  separator?: boolean;
}

interface ContextMenuIProps {
  lists: ListContextMenuProps[];
  id: string;
  data?: any;
  style?: React.CSSProperties;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
  clickAway?: boolean;
  className?: string;
  hideOnLeave?: boolean;
}

export const ContextMenu = ({
  lists,
  id,
  style,
  clickAway,
  data,
  onShow,
  onHide,
  className,
  hideOnLeave
}: ContextMenuIProps) => {
  return (
    <Menu
      id={id}
      style={{ ...style, display: clickAway ? "none" : "block" }}
      onShow={onShow}
      onHide={onHide}
      className={className}
      hideOnLeave={hideOnLeave}
    >
      <BoxShadowed px={0} py={3} overflow="hidden">
        {lists &&
          lists.map((list, i) =>
            list.Content ? (
              list.Content
            ) : (
              <MenuItem
                key={list.label + "-" + i}
                onClick={() => list.onClick && (data ? list.onClick(...data) : list.onClick())}
                Icon={list.Icon}
                label={list.label}
                separator={list.separator}
              />
            )
          )}
      </BoxShadowed>
    </Menu>
  );
};
