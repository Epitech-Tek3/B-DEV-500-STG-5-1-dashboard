import { Box } from "rebass";
import { LoginDialog } from "@components/login";
import { ProfileMenu } from "./ProfileMenu";
import { styled } from "@mui/material/styles";
import { useAuth } from "@hooks/useAuth";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@components/buttons/button";
import { useTranslation } from "@hooks/useTranslation";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  background: "white",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export interface NavProps {
  open: boolean;
  home?: boolean;
  menu?: boolean;
  onOpen: () => void;
}

export const Nav: React.FC<NavProps> = ({ open, home, menu, onOpen }) => {
  const { currentUser } = useAuth();
  const [loginOpen, setLoginOpen] = React.useState(false);
  const { text } = useTranslation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        header: { boxShadow: home && "unset", bg: home ? "transparent !important" : "white" }
      }}
    >
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {menu && (
            <IconButton
              aria-label="open drawer"
              onClick={onOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                color: "grey",
                fill: "grey",
                svg: { fill: "grey" },
                ...(open && { display: "none !important" })
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {currentUser ? (
            <ProfileMenu />
          ) : (
            <Button bg="secondary" onClick={() => setLoginOpen(true)}>
              {text.navbarLoginButton}
            </Button>
          )}
          <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} onCancel={() => setLoginOpen(false)} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
