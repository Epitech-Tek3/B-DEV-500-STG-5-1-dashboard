import { Relative, Absolute } from "@components/common/Position";
import moment from "moment";
import React, { useState } from "react";
import { Box, Text } from "rebass";
import { CalendarDisplayProps, Event } from "..";
import { CalendarRow } from "./Row";

moment.locale("fr");

export interface CalendarColumnProps extends CalendarDisplayProps {
  onCreateEvent?: (eventData: Event) => void;
  events: any[];
  daysDate: moment.Moment[];
}

export const CalendarColumn: React.FC<CalendarColumnProps> = ({ daysDate, onCreateEvent, events, ...props }) => {
  const [selected, setSelected] = useState({ x: -1, y: -1 });
  // eslint-disable-next-line prettier/prettier
  const hours = ["0 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM", "11 PM"];
  const closedRows = daysDate.map((date, i) => {
    return props.dateCloseAllDay
      .map((dateClosed) => {
        return date.format("YY, MM, DD") == moment(dateClosed.toString()).format("YY, MM, DD") ? i : null;
      })
      .find((f) => f);
  });

  const currentWeekEvents = events?.map((event) =>
    daysDate
      .map((days) => {
        return moment(event?.start.date).format("DD MM") == days.format("DD MM") ? moment(event.start.date) : null;
      })
      .find((v) => v && moment(v))
  );

  console.log(currentWeekEvents);
  return (
    <Box px={3}>
      {hours.map((h, i) => (
        <Relative display="flex" key={h} width="100%">
          {i != 0 && (
            <Absolute top={-8} fontSize="10px" left={0} width={40}>
              <Text as="span" color="grey" textAlign="right">
                {h}
              </Text>
            </Absolute>
          )}
          <CalendarRow
            dateCloseAllDay={closedRows}
            onCreateEvent={onCreateEvent}
            onChoosePeriode={(x, y) => setSelected({ x, y })}
            choosePeriode={selected}
            periode={{ start: h, end: hours[i + 1] }}
            days={daysDate}
            events={currentWeekEvents ?? null}
            column={i}
          />
        </Relative>
      ))}
    </Box>
  );
};
