import { BoxShadowed } from "@components/containers/BoxShadowed";
import moment from "moment";
import React from "react";
import { Flex, Text } from "rebass";
import { Event } from "..";

moment.locale("fr");

export interface CalendarRowProps {
  dateCloseAllDay?: number[];
  onCreateEvent?: (eventData: Event) => void;
  onChoosePeriode: (x: number, y: number) => void;
  choosePeriode: { x: number; y: number };
  periode: { start: string; end: string };
  events: moment.Moment[];
  days: moment.Moment[];
  column: number;
}

export const CalendarRow: React.FC<CalendarRowProps> = ({ onCreateEvent, column, events, ...props }) => {
  return (
    <Flex pl="35px" width="100%">
      {[...new Array(7)].map((_, i) => {
        const isClosedDay = props.dateCloseAllDay.find((f) => f == i) || i == 6 || i == 5;
        const todayEvents = events?.length
          ? events
              .map((event) => {
                return event?.format("DD MM") == props.days[i].format("DD MM") ? event : null;
              })
              .filter((v) => v)
          : null;

        // console.log(events[0].hour());
        return (
          <Flex
            key={`calendar-row-${i}`}
            width={1 / 7}
            alignItems="center"
            height={46}
            bg={
              (isClosedDay ||
                (todayEvents?.length &&
                  todayEvents?.find((event) => {
                    // @ts-ignore
                    return moment(event._i.dateTime).hour() == column;
                  }))) &&
              "lightWhite"
            }
            onClick={() => {
              if (!isClosedDay) {
                props.onChoosePeriode(column, i);
                onCreateEvent({
                  id: String(Math.random()),
                  start: props.periode.start,
                  end: props.periode.end,
                  day: props.days[i].toString()
                });
              }
            }}
            sx={{
              ":hover": {
                bg: !isClosedDay && "lightWhite"
              },
              cursor: isClosedDay ? "not-allowed" : "pointer",
              borderBottom: "solid 1px lightGrey",
              borderRight: i != 6 && "solid 1px lightGrey",
              borderLeft: i == 0 && "solid 1px lightGrey"
            }}
          >
            {props.choosePeriode.x == column && props.choosePeriode.y == i && (
              <BoxShadowed width="95%" height="100%" px={2} py={1} bg="#c0ca33">
                <Text as="p" fontSize={0} color="persistanteWhite">
                  Rendez-vous cahier des charges
                </Text>
                <Text as="p" fontSize={0} color="persistanteWhite">
                  {props.periode.start + " à " + props.periode.end}
                </Text>
              </BoxShadowed>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
