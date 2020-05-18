import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Schedule.scss";
import List from "./List/List";

export default function Schedule({
  setDateToToday,
  setDateToTomorrow,
  schedule,
  handleDisplayPhotoChange,
}) {
  const [activeSpan, setActiveSpan] = useState("Dzisiaj");

  function handleDaySelect(el, cb) {
    setActiveSpan(el.innerText);
    cb();
  }

  return (
    <div className="schedule">
      <div className="day-select">
        <span
          className={
            activeSpan == "Dzisiaj"
              ? "day-select__day day-select__day--active"
              : "day-select__day"
          }
          onClick={({ target }) => handleDaySelect(target, setDateToToday)}
        >
          Dzisiaj
        </span>
        <span
          className={
            activeSpan == "Jutro"
              ? "day-select__day day-select__day--active"
              : "day-select__day"
          }
          onClick={({ target }) => handleDaySelect(target, setDateToTomorrow)}
        >
          Jutro
        </span>
      </div>
      <List
        schedule={schedule}
        handleDisplayPhotoChange={handleDisplayPhotoChange}
      />
      <div className="schedule__calendar-link">
        <Link to="/kalendarz">Przejdź do kalendarza</Link>
      </div>
    </div>
  );
}
