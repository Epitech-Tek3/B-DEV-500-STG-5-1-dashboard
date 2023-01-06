import { Event } from "@components/calendar";
import { FUNCTION_CALENDAR } from "@utils/constants";

export const addCalendarEvent = async (body: Event) => {
  return await fetch(`${FUNCTION_CALENDAR}/create-schedules`, {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  }).then((result) => {
    result.json().catch((e) => {
      throw e;
    });
  });
};
