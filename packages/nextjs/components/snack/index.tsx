import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps, Color } from "@material-ui/lab/Alert";
import ReactDOM from "react-dom";
import { IconButton, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export interface SnackInfoProps {
  open: boolean;
  autoHideDuration?: number;
  onClose?: () => void;
  message: string;
  severity?: Color;
}

export const SnackInfo = ({
  open,
  autoHideDuration = 4000,
  onClose,
  message,
  severity = "success"
}: SnackInfoProps) => {
  const [openPopup, setOpenPopup] = useState(open);

  useEffect(() => {
    setOpenPopup(open);
  }, [open]);

  return ReactDOM.createPortal(
    <Snackbar
      open={openPopup}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      style={{ position: "sticky", bottom: 0, height: "200px", width: "100%", transform: "none" }}
    >
      <Box className="test">
        <Alert
          severity={severity}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpenPopup(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        >
          {message}
        </Alert>
      </Box>
    </Snackbar>,
    document.body
  );
};
