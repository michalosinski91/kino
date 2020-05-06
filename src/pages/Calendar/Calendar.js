import React from "react";
import "./Calendar.scss";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import CalendarSchedule from "../../components/CalendarSchedule/CalendarSchedule";
import Filter from "../../components/Filter/Filter";

export default function Calendar({ showFilter, toggleFilter }) {
  return (
    <section data-testid="calendar" className="calendar">
      <CalendarHeader toggleFilter={toggleFilter} />
      <Filter showFilter={showFilter} />
      <CalendarSchedule />
    </section>
  );
}
