import moment from "moment";
import React from "react";
import { CalendarDisplayProps, Event } from "..";
import { CalendarColumn } from "./Column";

export interface CalendarTableProps extends CalendarDisplayProps {
  onCreateEvent?: (eventData: Event) => void;
  events: any[];
  daysDate: moment.Moment[];
}

export const CalendarTable: React.FC<CalendarTableProps> = ({ ...props }) => {
  return <CalendarColumn {...props} />;
};
