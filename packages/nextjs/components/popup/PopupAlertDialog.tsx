import { DialogContent, DialogTitle, Dialog } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface PopupDialogProps {
  title: string;
  open: boolean;
  onClose?: () => void;
  onValidate?: () => void;
  children;
}

export const PopupAlertDialog = ({ title, open, onClose, children }: PopupDialogProps) => {
  const [openPopup, setOpenPopup] = useState(open);

  useEffect(() => {
    setOpenPopup(open);
  }, [open]);
  return (
    <Dialog
      open={openPopup}
      onBackdropClick={() => {
        setOpenPopup(false);
        onClose();
      }}
      onClose={onClose}
      onEscapeKeyDown={() => {
        setOpenPopup(false);
        onClose();
      }}
      aria-labelledby="form-dialog-new-folder"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
