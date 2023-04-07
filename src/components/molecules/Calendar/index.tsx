// @ts-ignore
// @ts-ignore
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import moment, { Moment } from "moment";
import { FormControl } from "react-bootstrap";
import { Filter } from "../MapHistorics";
import styles from "./styles.module.css";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}

export default function Calendar({ filter, setFilter }: Props) {
  let ranges = {
    "Today Only": [moment(), moment()],
    "Yesterday Only": [
      moment().subtract(1, "days"),
      moment().subtract(1, "days"),
    ],
    "3 Days": [moment().subtract(3, "days"), moment()],
  };
  let local = {
    format: "DD-MM-YYYY HH:mm",
    sundayFirst: false,
  };

  return (
    <div className={styles.container}>
      <DateTimeRangeContainer
        start={filter.startDate}
        standaloneMode
        leftMode
        end={filter.endDate}
        maxDate={moment()}
        ranges={ranges}
        local={local}
        applyCallback={(startDate: Moment, endDate: Moment) =>
          setFilter((prev) => ({ ...prev, startDate, endDate }))
        }
        className={styles.container}
        style={{
          width: "100%",
        }}
      >
        <FormControl
          id="formControlsTextB"
          type="text"
          placeholder="Enter text"
          value={`${filter.startDate?.format(
            "DD/MM/YYYY HH:mm"
          )} - ${filter.endDate?.format("DD/MM/YYYY HH:mm")}`}
          className={styles.container}
        />
      </DateTimeRangeContainer>
    </div>
  );
}
