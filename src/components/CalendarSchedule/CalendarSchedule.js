import React from "react";
import "./CalendarSchedule.scss";
import CalendarDayEntry from "../CalendarDayEntry/CalendarDayEntry";

export default function CalendarSchedule({ calendar, films }) {
  const currentDay = 15;
  return (
    <div className="calendar-schedule">
      {calendar
        .filter((entry) => entry.day >= currentDay)
        .map((entry) => (
          <CalendarDayEntry dayEntry={entry} key={entry.date} films={films} />
        ))}
    </div>
  );
}
