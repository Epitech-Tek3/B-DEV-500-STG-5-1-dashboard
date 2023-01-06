import { AlgoliaSearch } from "@components/searchbar/UserSearchBar";
import { Button } from "@components/buttons/button";
import { CardModule } from "./CardModule";
import { Container } from "@components/containers/Container";
import { database } from "@libraries/firebase";
import { Fixed } from "@components/common/Position";
import { Flex, Text } from "rebass";
import { Grid } from "@components/grid";
import { makeSerieNumber } from "@utils/makekey";
import { Module, modules as modulesList } from "./constants";
import { Settings } from "./Settings";
import { StoreModules } from "@containers/default";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "@hooks/useTranslation";

export const Extensions = ({ native = false }) => {
  const { currentUser } = useAuth();
  const [triggerError, settriggerError] = React.useState(false);
  const router = useRouter();
  const [client, setclient] = React.useState(null);
  const [settingsModule, setSettingsModule] = React.useState<Module>(null);
  const [modules, setModules] = React.useState(
    Object.values(currentUser.modules || {}).filter((mod) => mod.state).length
  );
  const { text } = useTranslation();
  const [choosenModules, setChoosenModules] = React.useState<StoreModules>(
    currentUser.modules || {
      calendar: { state: false, timer: 10 },
      drive: { state: false, timer: 10 },
      gmail: { state: false, timer: 10 },
      googlePhoto: { state: false, timer: 10 },
      youtubeChannel: { state: false, timer: 10 },
      youtubeStudio: { state: false, timer: 10 }
    }
  );

  const onChooseModule = (mod: Module) => {
    setChoosenModules({ ...choosenModules, [mod.id]: { state: !choosenModules[mod.id].state } });
    choosenModules[mod.id].state && setModules(modules - 1);
  };

  return (
    <Container mt={4} mb="calc(65px + 36px)" px={3}>
      <Flex flexDirection="column" justifyContent="center">
        {native && (
          <>
            <Text as="h1" textAlign="center">
              {text.loginPopupWelcome}
            </Text>
            <Text as="h2" fontSize={2} textAlign="center" mt={3}>
              {text.selectModules}
            </Text>
          </>
        )}
        <Flex justifyContent="center" mt={3}>
          <AlgoliaSearch
            onChoose={(mod) => {
              setModules(modules + 1);
              onChooseModule(mod);
            }}
            mb={3}
            onChange={() => {
              setclient(null);
              settriggerError(false);
            }}
            value={client?.email ?? client?.clientId ?? router.query.id ?? undefined}
            triggerError={triggerError}
          />
        </Flex>
        <Flex my={3} />
        <Grid widthItems="250px" gap="20px">
          {modulesList(text, () => setModules(modules + 1)).map((mod) => (
            <CardModule
              key={makeSerieNumber(5)}
              onClick={() => {
                mod.onClick();
                onChooseModule(mod);
              }}
              onClickSettings={() => setSettingsModule(mod)}
              installed={choosenModules[mod.id].state}
              title={mod.title}
              desc={mod.desc}
              Icon={mod.Icon}
            />
          ))}
        </Grid>
      </Flex>
      <Fixed
        bottom={0}
        left={0}
        bg="white"
        width="100%"
        height="64px"
        sx={{ boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px" }}
      >
        <Flex m="auto" height="100%" width="fit-content" sx={{ button: { borderRadius: 15 } }}>
          <Button
            bg="secondary"
            disabled={modules < 3}
            width="fit-content"
            py={3}
            onClick={async () => {
              if (modules < 3) return;
              await database.user.doc(currentUser.uid).update({
                isComplete: true
              });
              await database.user.doc(currentUser.uid).update({
                modules: {
                  youtubeChannel: { state: choosenModules.youtubeChannel.state, timer: 10 },
                  youtubeStudio: { state: choosenModules.youtubeStudio.state, timer: 10 },
                  calendar: { state: choosenModules.calendar.state, timer: 10 },
                  drive: { state: choosenModules.drive.state, timer: 10 },
                  googlePhoto: { state: choosenModules.googlePhoto.state, timer: 10 },
                  gmail: { state: choosenModules.gmail.state, timer: 10 }
                }
              });
              window.location.replace("/channel/dashboard");
            }}
            sx={{
              button: {
                bg: "orange",
                ":hover": { bg: "orange" },
                ":disabled": { bg: "rgba(255, 165, 0, .5 )" },
                span: { color: "white", fontSize: 0, fontWeight: 700 }
              }
            }}
          >
            {modules >= 3
              ? `${text.continueWith} ${modules} modules`
              : `${text.choose} ${3 - modules} module${3 - modules >= 2 ? "s" : ""} ${text.more}`}
          </Button>
        </Flex>
      </Fixed>
      <Settings open={settingsModule ? true : false} module={settingsModule} onClose={() => setSettingsModule(null)} />
    </Container>
  );
};
