import { Box, Flex, Text } from "rebass";
import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Input } from "@rebass/forms";
import { Module } from "./constants";
import { PopupDialog } from "@components/popup/PopupDialog";
import { Remove, Add } from "@material-ui/icons";
import React from "react";
import { Select } from "@components/buttons/Select";
import { database } from "@libraries/firebase";
import { useAuth } from "@hooks/useAuth";
import { useTranslation } from "@hooks/useTranslation";

const Enumerator = ({ rate, onReduceRate, onIncreaseRate }) => {
  return (
    <Box>
      <Text as="p" textAlign="center" mb={2}>
        Refresh rate / seconds
      </Text>
      <Flex alignItems="center" mx="auto" justifyContent="space-evenly" width="200px">
        <Flex height={30}>
          <ButtonIcon tooltipTitle="" size="small" onClick={onReduceRate}>
            <Remove />
          </ButtonIcon>
        </Flex>
        <Input size={56} value={rate} fontSize={5} sx={{ borderColor: "grey", textAlign: "center" }} />
        <Flex height={30}>
          <ButtonIcon tooltipTitle="" size="small" onClick={onIncreaseRate}>
            <Add />
          </ButtonIcon>
        </Flex>
      </Flex>
    </Box>
  );
};

export interface SettingsProps {
  open: boolean;
  module: Module;
  onClose: () => void;
}

export const Settings = ({ open, module, onClose }: SettingsProps) => {
  const { currentUser } = useAuth();
  const [rate, setRate] = React.useState(10);
  const { text } = useTranslation();

  return (
    <PopupDialog
      open={open}
      onClose={onClose}
      onCancel={onClose}
      buttonCancelTitle={text.cancel}
      buttonDoneTitle={text.confirm}
      onValidate={() => {
        database.user.doc(currentUser.uid).update({
          modules: {
            ...currentUser.modules,
            [module.id]: {
              state: currentUser.modules[module.id].state,
              timer: rate
            }
          }
        });
      }}
    >
      <Box width="500px" p={3}>
        <Flex width="100%" py={2} justifyContent="center" mb={3}>
          <Box
            bg="white"
            p={3}
            sx={{ borderRadius: 50, boxShadow: "rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px" }}
          >
            {module?.Icon}
          </Box>
        </Flex>
        <Enumerator
          rate={rate}
          onIncreaseRate={() => setRate(rate + 1 <= 10 ? rate + 1 : 10)}
          onReduceRate={() => setRate(rate - 1 >= 1 ? rate - 1 : 1)}
        />
        <Flex
          mt={4}
          alignItems="center"
          justifyContent="center"
          sx={{ "& > div": { width: "80%", ".MuiListItem-gutters": { color: "black" } } }}
        >
          <Select label="Filtre" options={[{ value: "Ascendant" }, { value: "Descendant" }]} value="Ascendant" />
        </Flex>
      </Box>
    </PopupDialog>
  );
};
