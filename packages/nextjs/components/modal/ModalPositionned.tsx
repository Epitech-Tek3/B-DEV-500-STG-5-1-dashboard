import { ContextMenu } from "react-contextmenu";
import React from "react";

interface IProps {
  id: string;
  data?: any;
  style?: React.CSSProperties;
  onShow?: (event: any) => void;
  onHide?: (event: any) => void;
  className?: string;
  hideOnLeave?: boolean;
  ref?: any;
  children: any;
}

export const ModalPositionned = ({ id, style, onShow, onHide, className, hideOnLeave, ref, children }: IProps) => {
  return (
    <ContextMenu
      id={id}
      ref={ref}
      style={{ ...style }}
      onShow={(e) => {
        onShow && onShow(e);
        // setVisibility(true);
      }}
      onHide={onHide}
      className={className}
      hideOnLeave={hideOnLeave}
    >
      {children}
    </ContextMenu>
  );
};
