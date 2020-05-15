import React from "react";
import "./CalendarDayEntry.scss";
import { formatDate } from "../../utils/DateFormat";
import { generateID } from "../../utils/GenerateID";
import CalendarFilmEntry from "../CalendarFilmEntry/CalendarFilmEntry";

export default function CalendarDayEntry({ dayEntry, films }) {
  return (
    <div className="day-entry">
      <div className="day-entry__date">
        <span>{formatDate(dayEntry.day.toString())}</span>
      </div>
      <div className="day-entry__film-container">
        {dayEntry.timeSlots.map((slot) => (
          <CalendarFilmEntry data={slot} key={generateID()} films={films} />
        ))}
      </div>
    </div>
  );
}
