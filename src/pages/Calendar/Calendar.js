import React, { useState, useEffect } from "react";
import "./Calendar.scss";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import CalendarSchedule from "../../components/CalendarSchedule/CalendarSchedule";
import Filter from "../../components/Filter/Filter";

import {
  getCurrentMonthYearString,
  currentMonth,
  currentYear,
  formatMonthYearToString,
} from "../../utils/DateFormat";

export default function Calendar({
  showFilter,
  toggleFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  ageList,
  genreList,
  calendar,
  getCalendar,
  films,
}) {
  const [displayDate, setDisplayDate] = useState("");
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    let currentDate = formatMonthYearToString(month + 1, year);
    setDisplayDate(currentDate);
  }, [month, year]);

  function increment() {
    // if increment happens while december is selected, month is set to january & year incremented
    if (month + 1 == 12) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function decrement() {
    // if decrement happens while january is selected, month is set to december & year decremented
    if (month - 1 == -1) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  // TODO: FETCH CALENDAR FOR CORRECT MONTH WHEN MONTH CHANGES

  return (
    <section data-testid="calendar" className="calendar">
      <CalendarHeader
        toggleFilter={toggleFilter}
        date={displayDate}
        increment={increment}
        decrement={decrement}
      />
      <Filter
        showFilter={showFilter}
        toggleGenreFilter={toggleGenreFilter}
        toggleAgeFilter={toggleAgeFilter}
        ageList={ageList}
        genreList={genreList}
      />
      <CalendarSchedule calendar={calendar} films={films} />
    </section>
  );
}
