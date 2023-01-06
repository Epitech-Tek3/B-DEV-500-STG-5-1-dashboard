import { Box, Flex, Text } from "rebass";
import { BoxShadowed } from "@components/containers/BoxShadowed";
import { Button } from "@components/buttons/button";
import { CheckRounded, Settings } from "@material-ui/icons";
import React from "react";
import { ButtonIcon } from "@components/buttons/ButtonIcon";

export const CardModule = ({ Icon, title, installed, desc, onClick, onClickSettings }) => {
  return (
    <BoxShadowed p={3} width="100%">
      <Flex width="100%" py={2} justifyContent="center">
        <Box
          bg="white"
          p={3}
          sx={{ borderRadius: 50, boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px" }}
        >
          {Icon}
        </Box>
      </Flex>
      <Text as="p" fontWeight="700">
        {title}
      </Text>
      <Text as="p" fontSize={0} color="grey" mt={2}>
        {desc}
      </Text>
      <Flex mt={3} flexDirection="row-reverse" alignItems="center" sx={{ span: { fontSize: "13px !important" } }}>
        <Button bg="blue">En savoir plus</Button>
        {installed ? (
          <Button variant="text" mr={10} onClick={() => onClick()}>
            <CheckRounded style={{ fill: "#5cb85c" }} />
          </Button>
        ) : (
          <Button variant="text" fontSize={12} mr={10} onClick={() => onClick()}>
            Installer
          </Button>
        )}
        <Flex flexGrow={1} />
        <ButtonIcon tooltipTitle="paramètre du module" size="small" onClick={onClickSettings}>
          <Settings style={{ fill: "grey" }} />
        </ButtonIcon>
      </Flex>
    </BoxShadowed>
  );
};
