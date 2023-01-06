export const getCalendarEvent = async (accessToken) => {
  return await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/?timeMin=2021-11-25T10%3A00%3A00-07%3A00&key=AIzaSyCpvNThoVKNEWWQPLhkhQ4ngBa2yK5_0qw&access_token=${accessToken}`,
    {
      method: "GET"
    }
  ).then((result) => {
    return result
      .json()
      .catch((e) => {
        throw e;
      })
      .then((res) => {
        return res.items;
      });
  });
};
