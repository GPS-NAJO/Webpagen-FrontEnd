import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [dates, setDates] = useState<(Date | null)[]>([]);
  return (
    <DatePicker
      startDate={dates[0]}
      endDate={dates[1]}
      showTimeSelect
      showTimeInput
      selectsRange
      dateFormat="dd/MM/yyyy HH:mm"
      onChange={(e) => setDates(e)}
    />
  );
};

export default Calendar;
