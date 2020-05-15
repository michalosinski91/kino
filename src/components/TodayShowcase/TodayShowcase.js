import React, { useState } from "react";
import "./TodayShowcase.scss";
import {
  getCurrentDayMonthString,
  getTomorrowDayMonthString,
} from "../../utils/DateFormat";

import Date from "./Date/Date";
import Schedule from "./Schedule/Schedule";

export default function TodayShowcase() {
  const [displayDate, setDisplayDate] = useState(getCurrentDayMonthString());

  function setDateToToday() {
    setDisplayDate(getCurrentDayMonthString());
  }

  function setDateToTomorrow() {
    setDisplayDate(getTomorrowDayMonthString());
  }

  return (
    <section className="today-showcase">
      <img
        className="today-showcase__photo"
        src="https://images.unsplash.com/photo-1585313647787-7a061b5a85a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80"
        alt="photo"
      />
      <div className="today-showcase__box">
        <Schedule
          setDateToToday={setDateToToday}
          setDateToTomorrow={setDateToTomorrow}
        />
        <Date date={displayDate} />
      </div>
    </section>
  );
}
