const NotComplete = dynamic<any>(() => import("@components/state/NotComplete").then((mod) => mod.NotComplete));
const NotConnected = dynamic<any>(() => import("@components/state/NotConnected").then((mod) => mod.NotConnected));
import { App } from "@components/common";
import { Box, Flex } from "rebass";
import { Nav } from "@components/navbar";
import { useAuth } from "@hooks/useAuth";
import dynamic from "next/dynamic";
import React from "react";
import { Aside } from "./aside";
import { CssBaseline } from "@mui/material";
import { createStore, StateMachineProvider } from "little-state-machine";

export const TextContext = React.createContext(null);

export interface DefaultConProps {
  footer?: boolean;
  login?: boolean;
  maintenance?: boolean;
  home?: boolean;
  profilCompleted?: boolean;
  projectMenu?: boolean;
  profileMenu?: boolean;
  projectPage?: boolean;
}

export const DefaultConBase: React.FC<Omit<DefaultConProps, "localization">> = ({ footer, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const { currentUser } = useAuth();

  return (
    <>
      <Flex>
        <CssBaseline />
        <Nav
          open={open}
          onOpen={() => setOpen(true)}
          home={props.home && !currentUser}
          menu={currentUser && currentUser?.isComplete}
        />
        {props.projectMenu && currentUser && currentUser.isComplete && (
          <Aside open={open} onClose={() => setOpen(false)} />
        )}
        <Box as="main" width="100%" minHeight="calc(100vh - 64px)" mt={!currentUser ? 0 : 64}>
          {props.children}
        </Box>
      </Flex>
    </>
  );
};

const DefaultConContent: React.FC<Omit<DefaultConProps, "localization">> = ({ ...props }) => {
  const { currentUser } = useAuth();

  return (
    <>
      {!props.login && !props.profilCompleted ? (
        props.children
      ) : !currentUser ? (
        <NotConnected />
      ) : !currentUser.isComplete ? (
        <NotComplete />
      ) : (
        props.children
      )}
    </>
  );
};

export type StoreModules = {
  youtubeChannel: { state: boolean; timer: number };
  youtubeStudio: { state: boolean; timer: number };
  calendar: { state: boolean; timer: number };
  googlePhoto: { state: boolean; timer: number };
  gmail: { state: boolean; timer: number };
  drive: { state: boolean; timer: number };
};

export const DefaultCon: React.FC<DefaultConProps> = ({ footer = true, ...props }) => {
  createStore(
    {
      youtubeChannel: false,
      youtubeStudio: false,
      calendar: false,
      googlePhoto: false,
      gmail: false,
      drive: false
    },
    { name: "modules" }
  );

  return (
    <App>
      <StateMachineProvider>
        <DefaultConBase footer={footer} {...props}>
          <DefaultConContent {...props} />
        </DefaultConBase>
      </StateMachineProvider>
    </App>
  );
};
