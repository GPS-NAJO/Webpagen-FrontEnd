// @ts-ignore
// @ts-ignore
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { Filter } from "../MapHistorics";
import styles from "./styles.module.css";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}

export default function Calendar({ filter, setFilter }: Props) {
  return (
    <div className={styles.container}>
      <DateRangePicker
        format="yyyy-MM-dd HH:mm:ss"
        defaultCalendarValue={[
          new Date("2023-02-01 00:00:00"),
          new Date("2023-05-01 23:59:59")
        ]}
        onOk={(value) => {
          setFilter({
            startDate: value[0],
            endDate: value[1],
          });
        }}
      />
    </div>
  );
}