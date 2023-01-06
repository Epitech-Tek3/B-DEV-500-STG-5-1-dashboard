import React, { useEffect, useState } from "react";
import { Box, BoxProps, Flex, Text } from "rebass";
import Close from "@material-ui/icons/Close";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { Absolute } from "@components/common/Position";
import { Boop } from "@components/animations/Boop";
import { Button } from "@components/buttons/button";
import { Dialog } from "@mui/material";
import { scrollBar } from "@utils/style";

interface PopupDialogProps extends Omit<BoxProps, "css"> {
  backdrop?: boolean;
  buttonCancelColor?: string;
  buttonCancelDisable?: boolean;
  buttonCancelTitle?: string;
  buttonDoneColor?: string;
  buttonDoneDisable?: boolean;
  buttonDoneTitle?: string;
  fullscreen?: boolean;
  children;
  crossClose?: boolean;
  escape?: boolean;
  noButtons?: boolean;
  noCancel?: boolean;
  onCancel?: () => void;
  onClose?: () => void;
  onSubmit?: (e: any) => Promise<void>;
  onValidate?: () => void;
  open: boolean;
  title?: string;
}

export const PopupDialog: React.FC<PopupDialogProps> = ({
  buttonCancelColor = "red",
  buttonCancelTitle = "Cancel",
  buttonDoneColor = "blue",
  buttonDoneTitle = "Done",
  children,
  onCancel = () => null,
  onClose = () => null,
  onSubmit = () => null,
  onValidate = () => null,
  open,
  title,
  ...props
}) => {
  const [openPopup, setOpenPopup] = useState(open);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setOpenPopup(open);
    return () => setOpenPopup(false);
  }, [open]);

  return (
    <Dialog
      open={openPopup}
      onClose={() => {
        if (!props.backdrop || !props.escape) return;
        setOpenPopup(false);
        onClose();
      }}
      fullScreen={props.fullscreen && width <= 630 ? true : false}
      maxWidth="xl"
      className="test"
      PaperProps={{ sx: { ...scrollBar, overflowX: "hidden" } }}
      sx={{ zIndex: 2024 }}
    >
      {(title || props.crossClose) && (
        <Flex pr={3}>
          {title && (
            <Text as="h3" fontWeight="600" p={3}>
              {title}
            </Text>
          )}
          {props.crossClose && (
            <Absolute
              onClick={() => {
                onCancel();
                onClose();
              }}
              right={10}
              top={10}
              sx={{ cursor: "pointer" }}
            >
              <Boop>
                <Close style={{ fill: "grey" }} />
              </Boop>
            </Absolute>
          )}
        </Flex>
      )}
      <Box
        onKeyPress={async (e) => {
          if (e.key == "Enter") {
            e.preventDefault();
            await onSubmit(e);
            onValidate();
          }
        }}
        sx={props.sx}
      >
        {children}
        {!props.noButtons && (
          <Flex m="auto" mr={0} width="fit-content" mt={4} mb={3} px={3}>
            <Flex
              flexDirection="row-reverse"
              flex={1}
              sx={{
                button: { textTransform: "capitalize", color: "blue", fontWeight: 700 },
                "button:nth-of-type(1)": {
                  ml: 2,
                  color: buttonDoneColor && "white",
                  py: 2,
                  px: 4
                }
              }}
            >
              <Button
                onClick={async (e) => {
                  e.preventDefault();
                  await onSubmit(e);
                  onValidate();
                }}
                sx={{
                  button: {
                    bg: "blue",
                    ":hover": { bg: "blue" },
                    span: { color: "white" }
                  }
                }}
                disabled={props.buttonDoneDisable}
              >
                {buttonDoneTitle}
              </Button>
              {!props.noCancel && (
                <Button
                  variant="text"
                  disabled={props.buttonCancelDisable}
                  onClick={() => {
                    onCancel();
                    onClose();
                  }}
                >
                  {buttonCancelTitle}
                </Button>
              )}
            </Flex>
          </Flex>
        )}
      </Box>
    </Dialog>
  );
};
