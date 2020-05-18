import React, { useState, useEffect } from "react";
import "./TodayShowcase.scss";
import {
  getCurrentDayMonthString,
  getTomorrowDayMonthString,
} from "../../utils/DateFormat";

import Date from "./Date/Date";
import Schedule from "./Schedule/Schedule";

export default function TodayShowcase({
  calendar,
  getCalendar,
  todayFilms,
  tomorrowFilms,
}) {
  const [displayDate, setDisplayDate] = useState(getCurrentDayMonthString());
  const [displayPhoto, setDisplayPhoto] = useState(null);
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    if (todayFilms.timeSlots) {
      setDisplayPhoto(todayFilms.timeSlots[0].film.poster);
      setSchedule(todayFilms.timeSlots.map((timeSlot) => timeSlot));
    }
  }, [todayFilms]);

  function setDateToToday() {
    setDisplayDate(getCurrentDayMonthString());
    setDisplayPhoto(todayFilms.timeSlots[0].film.poster);
    setSchedule(todayFilms.timeSlots.map((timeSlot) => timeSlot));
  }

  function setDateToTomorrow() {
    setDisplayDate(getTomorrowDayMonthString());
    setDisplayPhoto(tomorrowFilms.timeSlots[0].film.poster);
    setSchedule(tomorrowFilms.timeSlots.map((timeSlot) => timeSlot));
  }

  function handleDisplayPhotoChange(photo) {
    setDisplayPhoto(photo);
  }

  return (
    <section className="today-showcase">
      <img
        className="today-showcase__photo"
        src={displayPhoto}
        alt="Film Poster"
      />
      <div className="today-showcase__box">
        <Schedule
          setDateToToday={setDateToToday}
          setDateToTomorrow={setDateToTomorrow}
          handleDisplayPhotoChange={handleDisplayPhotoChange}
          schedule={schedule}
        />
        <Date date={displayDate} />
      </div>
    </section>
  );
}
