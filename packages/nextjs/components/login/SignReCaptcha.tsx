import { Box, Flex, Text } from "rebass";
import { LottieAnimation } from "@components/lottie";
import { PopupDialog } from "@components/popup/PopupDialog";
import { ReCaptcha } from "@components/security/ReCaptcha";
import createAccount from "../appIcons/animations/createAccount.json";
import React, { useState, useEffect } from "react";

export interface SignReCaptchaProps {
  title: string;
  open: boolean;
  onValidate: () => Promise<void>;
  onCancel: () => void;
}

export const SignReCaptcha: React.FC<SignReCaptchaProps> = ({ ...props }) => {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  return (
    <PopupDialog
      open={open}
      backdrop
      escape
      onClose={() => props.onCancel}
      sx={{ display: "flex", m: "auto", width: "fit-content" }}
      fullscreen
      noButtons
    >
      <Box
        display="flex"
        flexDirection="column"
        m="auto"
        width={["fit-content", 500]}
        justifyContent="center"
        alignContent="center"
      >
        <Flex
          width={300}
          height={250}
          m="auto"
          px={3}
          sx={{ "@media screen and (max-width: 400px)": { width: 200, height: 150 } }}
        >
          <LottieAnimation lotti={createAccount} height="100%" width="100%" />
        </Flex>
        <Text
          as="h1"
          textAlign="center"
          fontSize={3}
          mt={2}
          mb={4}
          px={3}
          sx={{ "@media screen and (max-width: 400px)": { fontSize: 4 } }}
        >
          {props.title}
        </Text>
        <Flex m="auto" mb={3}>
          <ReCaptcha onValidate={async () => await props.onValidate()} />
        </Flex>
      </Box>
    </PopupDialog>
  );
};
