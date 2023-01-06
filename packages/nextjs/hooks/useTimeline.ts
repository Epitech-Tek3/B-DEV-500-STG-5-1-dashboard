import moment from "moment";

const getMonths = (start: string, end: string) => {
  const months = moment(end).diff(moment(start), "month", true);

  return months >= 12
    ? { year: true, number: (months - (months % 12)) / 12 }
    : { year: false, number: parseInt(months.toString()) };
};

export const useTime = (startTime: any) => {
  if (!startTime) return undefined;
  const endTime = Date.now();

  let timeDiff = endTime - new Date(startTime).getTime();
  const { year, number } = getMonths(new Date(startTime)?.toISOString(), new Date(endTime).toISOString());
  timeDiff /= 1000;
  timeDiff = Math.floor(timeDiff / 60);
  const minutes = Math.round(timeDiff % 60);
  timeDiff = Math.floor(timeDiff / 60);
  const hours = Math.round(timeDiff % 24);
  timeDiff = Math.floor(timeDiff / 24);
  const days = timeDiff;
  const result = "";

  return result.concat(
    year
      ? number > 1
        ? "il y a " + number + " ans"
        : "il y a " + number + " an"
      : !year && number
      ? number > 1
        ? "il y a " + number + " mois"
        : "il y a " + number + " mois"
      : days
      ? days > 1
        ? "il y a " + days + " jours"
        : "il y a " + days + " jour"
      : hours
      ? hours > 1
        ? "il y a " + hours + " heures"
        : "il y a " + hours + " heure"
      : minutes
      ? minutes > 1
        ? "il y a " + minutes + " minutes"
        : "il y a " + minutes + " minute"
      : "maintenant"
  );
};
