import React from "react";
import "./CalendarSchedule.scss";
import CalendarDayEntry from "../CalendarDayEntry/CalendarDayEntry";
import { getCurrentDayNumber } from "../../utils/DateFormat";

export default function CalendarSchedule({ calendar, films }) {
  const currentDay = getCurrentDayNumber();
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
