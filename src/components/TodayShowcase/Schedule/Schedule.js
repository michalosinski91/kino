import React from "react";
import { Link } from "react-router-dom";
import "./Schedule.scss";
import List from "./List/List";

export default function Schedule() {
  return (
    <div className="schedule">
      <div className="day-select">
        <span className="day-select__day day-select__day--active">Dzisiaj</span>
        <span className="day-select__day">Jutro</span>
      </div>
      <List />
      <div className="schedule__calendar-link">
        <Link to="/kalendarz">Przejdź do kalendarza</Link>
      </div>
    </div>
  );
}
