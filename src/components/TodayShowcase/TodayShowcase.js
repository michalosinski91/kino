import React from "react";
import "./TodayShowcase.scss";
import { getTodayDate } from "../../utils/DateFormat";

import Date from "./Date/Date";
import Schedule from "./Schedule/Schedule";

export default function TodayShowcase() {
  let date = getTodayDate();
  return (
    <section className="today-showcase">
      <img
        className="today-showcase__photo"
        src="https://images.unsplash.com/photo-1585313647787-7a061b5a85a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80"
        alt="photo"
      />
      <div className="today-showcase__box">
        <Schedule />
        <Date date={date} />
      </div>
    </section>
  );
}
