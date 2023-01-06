import "moment/locale/fr";
import { addCalendarEvent } from "@libraries/queries/calendar/addEvent";
import { Box } from "rebass";
import { CalendarDaysHeader } from "./DaysHeader";
import { CalendarHeader } from "./Header";
import { CalendarTable } from "./table";
import { CreationEvent } from "./creation";
import { getCalendarEvent } from "@libraries/queries/calendar/getCalendarEvent";
import { Relative } from "@components/common/Position";
import { scrollBar } from "@utils/style";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useAuth } from "@hooks/useAuth";

moment().locale("fr");

export interface CalendarDisplayProps {
  dateCloseAllDay?: Date[];
}

export interface CalendarProps extends CalendarDisplayProps {
  none?: string;
}

export interface Event {
  id: string;
  summury?: string;
  description?: string;
  attendees?: string[];
  isAllDay?: string;
  day: string;
  start: string;
  end: string;
  category?: string;
  dueDateClass?: string;
  location?: string;
}

const getHour = (date: string) => {
  const hour = date.length == 5 ? Number(date.slice(0, 2)) : Number(date.slice(0, 1));
  const isMorning = date.length == 5 ? date.slice(3, 5) == "AM" : date.slice(2, 4) == "AM";

  return hour + (isMorning || hour == 12 ? 0 : 12);
};

export const CalendarAppointment: React.FC<CalendarProps> = ({ ...props }) => {
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const { currentUser } = useAuth();
  const [eventData, setEventData] = useState(null);
  const now = moment().clone();
  const startDay = now.clone().startOf("week").startOf("day");
  const day = startDay.clone().subtract(1, "day");
  const defaultDate = Array(7)
    .fill(0)
    .map(() => day.add(1, "day").clone());
  const [calendar, setCalendar] = useState(defaultDate);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    getCalendarEvent(currentUser.accessToken).then((v) => {
      setEvents(v);
    });
  }, [0]);

  return (
    <Relative bg="white" height="100%" width="100%">
      <CalendarHeader calendar={calendar} updateCalendar={(v) => setCalendar(v)} defaultDate={defaultDate} />
      <CalendarDaysHeader calendar={calendar} />
      <Box height="calc(100% - 69px - 84px)" overflow="auto" sx={{ ...scrollBar }}>
        <CalendarTable
          daysDate={calendar}
          events={events}
          onCreateEvent={(eventData) => {
            setEventData(eventData);
            setCreateEventOpen(true);
          }}
          {...props}
        />
        <CreationEvent
          open={createEventOpen}
          onClose={() => setCreateEventOpen(false)}
          eventData={eventData}
          onValidate={async (eventData) => {
            await addCalendarEvent({
              ...eventData,
              attendees: null,
              start: moment(eventData.day).set("hour", getHour(eventData.start)).toString(),
              end: moment(eventData.day).set("hour", getHour(eventData.end)).toString()
            });
            setCreateEventOpen(false);
          }}
        />
      </Box>
    </Relative>
  );
};
