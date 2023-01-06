import { Button } from "@components/buttons/button";
import { ButtonIcon } from "@components/buttons/ButtonIcon";
import { Divider } from "@components/common";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { Box, Flex, Text } from "rebass";

export interface HeaderProps {
  calendar: moment.Moment[];
  defaultDate: moment.Moment[];
  updateCalendar: React.Dispatch<React.SetStateAction<moment.Moment[]>>;
}

export const CalendarHeader: React.FC<HeaderProps> = ({ calendar, defaultDate, updateCalendar }) => {
  const nextWeek = () => updateCalendar((calendar) => calendar.map((v) => v.add(6, "day").add(1, "day").clone()));
  const prevWeek = () => updateCalendar((calendar) => calendar.map((v) => v.subtract(8, "day").add(1, "day").clone()));
  const today = () => updateCalendar(defaultDate);

  return (
    <Box bg="lightWhite">
      <Flex alignItems="center" px={3} py={3} sx={{ svg: { fill: "grey" } }}>
        <Button variant="outlined" height="fit-content" mr={4} color="black" onClick={today} width="fit-content">
          Ajourd&apos;hui
        </Button>
        <Flex>
          <ButtonIcon tooltipTitle="Semaine précédente" size="small" onClick={prevWeek}>
            <NavigateBefore />
          </ButtonIcon>
          <ButtonIcon tooltipTitle="Semaine suivante" size="small" onClick={nextWeek}>
            <NavigateNext />
          </ButtonIcon>
        </Flex>
        <Text as="span" color="black" ml={2} fontSize={3} sx={{ textTransform: "capitalize" }}>
          {(calendar[0].format("MMM").toString() !== calendar[6].format("MMM").toString()
            ? calendar[0].format("MMM").toString() + " - " + calendar[6].format("MMM").toString()
            : calendar[0].format("MMM").toString()) + " 2021"}
        </Text>
      </Flex>
      <Divider />
    </Box>
  );
};
