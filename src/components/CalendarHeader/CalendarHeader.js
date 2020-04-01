import React from "react";
import "./CalendarHeader.scss";

//TODO: add icon to Filter-Button
//      connect filter-button to state

export default function CalendarHeader() {
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
      <div className="calendar-header__filter-button">
        <span>Filtruj</span>
      </div>
    </div>
  );
}
