import { Absolute, Relative } from "@components/common/Position";
import { Flex } from "rebass";
import React from "react";
import ReactDOM from "react-dom";
import ClickAwayListener from "@mui/base/ClickAwayListener";

export interface PopupProps {
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ onClose, ...props }) => {
  return ReactDOM.createPortal(
    <Absolute height="100vh" width="100%" zIndex="2022" top={0} left={0} right={0} bottom={0}>
      <Relative>
        <Absolute top={0} left={0} height="100%" width="100%" bg="#00000080" />
        <Flex height="100vh" width="100%">
          <Flex width="100%" justifyContent="center" alignSelf="center" overflow="hidden">
            <ClickAwayListener onClickAway={onClose}>
              <Relative
                display="flex"
                bg="white"
                p={4}
                width={["400px", "500px"]}
                overflow="hidden"
                sx={{ borderRadius: 5, zIndex: 2023, "& > div": { zIndex: 1 } }}
              >
                {props.children}
              </Relative>
            </ClickAwayListener>
          </Flex>
        </Flex>
      </Relative>
    </Absolute>,
    document.body
  );
};
