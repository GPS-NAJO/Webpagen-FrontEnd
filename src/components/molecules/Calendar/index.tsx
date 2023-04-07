// @ts-ignore
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import moment from "moment";

export default function Calendar() {
  let now = new Date();
  let start = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  );
  let end = moment(start).add(1, "days").subtract(1, "seconds");
  const ranges = {
    "Today Only": [moment(start), moment(end)],
    "Yesterday Only": [
      moment(start).subtract(1, "days"),
      moment(end).subtract(1, "days"),
    ],
    "3 Days": [moment(start).subtract(3, "days"), moment(end)],
  };
  let local = {
    format: "DD-MM-YYYY HH:mm",
    sundayFirst: false,
    days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "So"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fromDate: "From Date",
    toDate: "To Date",
    selectingFrom: "Selecting From",
    selectingTo: "Selecting To",
    maxDate: "Max Date",
    close: "Close",
    apply: "Apply",
    cancel: "Cancel",
  };
  let maxDate = moment(start).add(24, "hour");
  function rangeCallback(startDate: any, endDate: any) {
    start: startDate;
    end: endDate;
  }
  return (
    <DateTimeRangeContainer
      ranges={ranges}
      start={start}
      end={end}
      local={local}
      maxDate={maxDate}
      applyCallback={rangeCallback}
    />
  );
}
