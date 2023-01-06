import { Cloud, Dashboard, Email, Extension, Photo, PlaylistAdd, Schedule, Subscriptions } from "@material-ui/icons";
import { makeSerieNumber } from "@utils/makekey";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import router from "next/router";
import slugify from "slugify";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export interface AsideProps {
  open: boolean;
  onClose: () => void;
}

export const Aside = ({ open, onClose }: AsideProps) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          ".MuiList-root": {
            display: "grid !important",
            "& > div": { py: 1 },
            "& > *": { pl: 3 }
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={onClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { title: "Dashboard", icon: <Dashboard /> },
            { title: "Playlist", icon: <PlaylistAdd /> },
            { title: "Subscriptions", icon: <Subscriptions /> },
            { title: "Schedules", icon: <Schedule /> },
            { title: "Extensions", icon: <Extension /> }
          ].map(({ title, icon }) => (
            <ListItem
              button
              key={makeSerieNumber(5)}
              onClick={() =>
                router.push(
                  `/channel/${slugify(title, { lower: true })}`,
                  `/channel/${slugify(title, { lower: true })}`
                )
              }
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { title: "Library", icon: <Photo /> },
            { title: "Mail", icon: <Email /> },
            { title: "Drive", icon: <Cloud /> }
          ].map(({ title, icon }) => (
            <ListItem
              button
              key={makeSerieNumber(5)}
              onClick={() => {
                console.log(router.locale);
                router.push(
                  `/channel/${slugify(title, { lower: true })}`,
                  `/channel/${slugify(title, { lower: true })}`
                );
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
