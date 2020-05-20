import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Schedule.scss";
import List from "./List/List";
import DayTab from "./DayTab/DayTab";

export default function Schedule({
  setDateToToday,
  setDateToTomorrow,
  schedule,
  handleDisplayPhotoChange,
}) {
  const [activeTab, setActiveTab] = useState("Dzisiaj");

  function handleDaySelect(el, cb) {
    setActiveTab(el.innerText);
    cb();
  }

  return (
    <div className="schedule">
      <div className="day-select">
        <DayTab
          name="Dzisiaj"
          activeTab={activeTab}
          operation={setDateToToday}
          handleDaySelect={handleDaySelect}
        />
        <DayTab
          name="Jutro"
          activeTab={activeTab}
          operation={setDateToTomorrow}
          handleDaySelect={handleDaySelect}
        />
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
