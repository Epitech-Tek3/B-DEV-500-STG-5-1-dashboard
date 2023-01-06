import { Button } from "@components/buttons/button";
import { Divider } from "@components/common";
import { BoxShadowed } from "@components/containers/BoxShadowed";
import { FormInput } from "@components/form/input";
import { FormInputTag } from "@components/form/InputTags";
import { Popper } from "@material-ui/core";
import { Schedule, GroupAdd, LocationOn, Subject } from "@material-ui/icons";
import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import Draggable from "react-draggable";
import { Header } from "./Header";
import { useForm } from "react-hook-form";
import { Event } from "..";
import moment from "moment";
import { useAuth } from "@hooks/useAuth";

export interface CreationEventProps {
  open: boolean;
  onClose: () => void;
  eventData?: Event;
  onValidate: (eventData: Event) => Promise<void>;
}

export const CreationEvent: React.FC<CreationEventProps> = ({ open, onClose, onValidate, eventData }) => {
  const [tagsGuests, setTagsGuests] = useState([]);
  const { currentUser } = useAuth();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    await onValidate({
      ...eventData,
      summury: `Rendez-vous cahier des charges ${currentUser.firstName} ${currentUser.lastName}`,
      description: data.description,
      location: data.location,
      start: eventData.start,
      end: eventData.end
    });
  };

  return (
    open && (
      <Draggable handle="#draggable-header">
        <Popper open={open} disablePortal={true} style={{ zIndex: 2 }}>
          <BoxShadowed p={0} sx={{ svg: { fill: "grey" } }}>
            <Box width="700px" bg="white" sx={{ display: "inline-block" }}>
              <Header onClose={onClose} />
              <Box p={3}>
                <Flex mb={3}>
                  <Schedule />
                  <Text as="span" ml={3}>{`${moment(eventData.day).format("MMM Do YY")}, ${eventData.start} - ${
                    eventData.end
                  }`}</Text>
                </Flex>
                <Divider />
                <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Flex alignItems="center">
                    <Flex mr={3}>
                      <GroupAdd />
                    </Flex>
                    <FormInputTag
                      tags={tagsGuests}
                      ref={register}
                      name="formName"
                      id="formId"
                      onAddition={(tag) => setTagsGuests([...tagsGuests, tag])}
                      onRemove={(i) => setTagsGuests(tagsGuests.filter((_, index) => i !== index))}
                      placeholder="Ajouter des invités"
                    />
                  </Flex>
                  <Flex alignItems="center">
                    <Flex mr={3}>
                      <LocationOn />
                    </Flex>
                    <FormInput placeholder="Ajouter un lieu" name="location" id="location" ref={register} />
                  </Flex>
                  <Flex alignItems="center">
                    <Flex mr={3}>
                      <Subject />
                    </Flex>
                    <FormInput
                      placeholder="Ajouter une description"
                      name="description"
                      id="description"
                      ref={register}
                    />
                  </Flex>
                  <Flex mt={3} flex={1} flexDirection="row-reverse">
                    <Button width="fit-content" bg="blue" type="submit">
                      Enregister
                    </Button>
                    <Button variant="text" width="fit-content" mr={3} onClick={onClose}>
                      Annuler
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </BoxShadowed>
        </Popper>
      </Draggable>
    )
  );
};
