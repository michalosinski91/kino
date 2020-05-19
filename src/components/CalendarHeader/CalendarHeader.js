import React from "react";
import "./CalendarHeader.scss";
import { getCurrentMonthYearString } from "../../utils/DateFormat";

//TODO: add icon & hover/click styling to Filter-Button

export default function CalendarHeader({
  toggleFilter,
  date,
  increment,
  decrement,
}) {
  function handleClick(operation) {
    operation();
  }

  return (
    <div className="calendar-header">
      <div className="calendar-header__date-picker">
        <div
          className="calendar-header__arrow calendar-header__arrow--left"
          onClick={() => handleClick(decrement)}
        >
          &larr;
        </div>
        <span>{date}</span>
        <div
          className="calendar-header__arrow calendar-header__arrow--right"
          onClick={() => handleClick(increment)}
        >
          &rarr;
        </div>
      </div>
      <div
        className="calendar-header__filter-button"
        onClick={toggleFilter}
        data-testid="toggleFilterBtn"
      >
        <span>Filtruj</span>
      </div>
    </div>
  );
}
