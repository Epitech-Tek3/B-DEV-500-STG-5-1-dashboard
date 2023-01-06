import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Absolute, Relative } from "@components/common/Position";
import Close from "@material-ui/icons/Close";
import React from "react";
import { Flex } from "rebass";

export interface HeaderProps {
  onClose: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <Relative>
      <Absolute width="100%" height="100%" id="draggable-header" sx={{ cursor: "move" }} />
      <Flex bg="lightWhite" p={2}>
        <Flex flex={1} flexDirection="row-reverse">
          <ButtonIcon tooltipTitle="Fermer" size="small" onClick={onClose}>
            <Close />
          </ButtonIcon>
        </Flex>
      </Flex>
    </Relative>
  );
};
