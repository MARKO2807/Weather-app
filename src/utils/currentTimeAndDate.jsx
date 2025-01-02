import { DateTime } from "luxon";

export const currentTimeAndDate = (timezoneOffset) => {
  const localTime = DateTime.utc()
    .setZone(
      `UTC${timezoneOffset >= 0 ? "+" : "-"}${Math.abs(timezoneOffset / 3600)}`
    )
    .toFormat("dd.MM.yyyy. HH:mm");
  return localTime;
};
export default currentTimeAndDate;
