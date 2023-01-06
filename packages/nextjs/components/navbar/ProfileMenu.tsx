import { Flex, Image } from "rebass";
import { Notifications } from "@material-ui/icons";
import { useAuth } from "@hooks/useAuth";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import router from "next/router";
import Tooltip from "@mui/material/Tooltip";

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { currentUser, setCurrentUser } = useAuth();
  const { logout } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Flex sx={{ alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              <Image src={currentUser.photoURL} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Flex>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          // @ts-ignore
          sx: {
            overflow: "visible !important",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32)) !important",
            mt: "1.5px !important",
            "& .MuiAvatar-root": {
              display: "grid",
              width: "32px !important",
              height: "32px !important",
              ml: "-0.5px !important",
              mr: "1px !important"
            },
            ".MuiList-root": {
              display: "grid"
            },
            ".MuiMenuItem-root": {
              justifyContent: "left",
              px: 3,
              py: 1
            },
            "&:before": {
              content: '""',
              display: "flex !important",
              position: "absolute !important",
              top: "0px !important",
              right: "14px !important",
              width: "10px !important",
              height: "10px !important",
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg) !important",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!currentUser.isComplete && (
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <Notifications fontSize="small" />
            </ListItemIcon>
            Compléter mon profil
          </MenuItem>
        )}
        <MenuItem
          onClick={async () => {
            await logout();
            setCurrentUser(null);
            router.push("/");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
