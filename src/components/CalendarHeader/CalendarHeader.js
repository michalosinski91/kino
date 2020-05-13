import React from "react";
import "./CalendarHeader.scss";

//TODO: add icon & hover/click styling to Filter-Button

export default function CalendarHeader({ toggleFilter }) {
  return (
    <div className="calendar-header">
      <div className="calendar-header__date-picker">
        <div className="calendar-header__arrow calendar-header__arrow--left">
          &larr;
        </div>
        <span>04.2020</span>
        <div className="calendar-header__arrow calendar-header__arrow--right">
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
