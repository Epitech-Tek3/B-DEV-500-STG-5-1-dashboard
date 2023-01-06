import { BoxShadowed } from "@components/containers/BoxShadowed";
import { OpenableBoxProps } from "@components/openableBox";
const OpenableBox = dynamic<OpenableBoxProps>(() => import("@components/openableBox").then((mod) => mod.OpenableBox));
import dynamic from "next/dynamic";
import { OpenableBoxLabeledProps } from "@components/openableBox/OpenableBoxLabeled";
import { AddRounded, RemoveRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { Box, Flex } from "rebass";
import { Text } from "@components/text";

export type CardExtendableProps = OpenableBoxLabeledProps;

export const CardExtendable: React.FC<CardExtendableProps> = ({ ...props }) => {
  const [open, setOpen] = useState(props.open);

  return (
    <Box {...props}>
      <BoxShadowed display="flex" height={45} width="100%" p={0} overflow="hidden" onClick={() => setOpen(!open)}>
        <Flex width={45} bg="primary" justifyContent="center" alignItems="center">
          {open ? <RemoveRounded style={{ fill: "white" }} /> : <AddRounded style={{ fill: "white" }} />}
        </Flex>
        <Flex px={3} flex={1}>
          <Text
            as="p"
            dataAzinoveId={props.id}
            my="auto"
            overflow="hidden"
            color="black"
            sx={{ textOverflow: "ellipsis" }}
          >
            {props.label}
          </Text>
        </Flex>
      </BoxShadowed>
      <OpenableBox open={open} style={{ marginTop: 20 }}>
        {props.children}
      </OpenableBox>
    </Box>
  );
};
