import React from "react";
import "./Calendar.scss";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import CalendarSchedule from "../../components/CalendarSchedule/CalendarSchedule";

export default function Calendar() {
  return (
    <section data-testid="calendar" className="calendar">
      <CalendarHeader />
      <CalendarSchedule />
    </section>
  );
}
