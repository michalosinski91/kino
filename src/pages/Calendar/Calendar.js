import React from "react";
import "./Calendar.scss";
import CalendarHeader from "../../components/CalendarHeader/CalendarHeader";
import CalendarSchedule from "../../components/CalendarSchedule/CalendarSchedule";
import Filter from "../../components/Filter/Filter";

export default function Calendar({
  showFilter,
  toggleFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  ageList,
  genreList,
  calendar,
  getCalendar,
  films,
}) {
  return (
    <section data-testid="calendar" className="calendar">
      <CalendarHeader toggleFilter={toggleFilter} getCalendar={getCalendar} />
      <Filter
        showFilter={showFilter}
        toggleGenreFilter={toggleGenreFilter}
        toggleAgeFilter={toggleAgeFilter}
        ageList={ageList}
        genreList={genreList}
      />
      <CalendarSchedule calendar={calendar} films={films} />
    </section>
  );
}
