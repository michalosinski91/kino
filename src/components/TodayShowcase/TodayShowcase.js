import React from "react";
import "./TodayShowcase.scss";
import { getTodayDate } from "../../utils/DateFormat";

export default function TodayShowcase() {
  let date = getTodayDate();
  return (
    <div className="today-showcase">
      <img
        className="today-showcase__photo"
        src="https://images.unsplash.com/photo-1585313647787-7a061b5a85a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80"
        alt="photo"
      />
      <div className="today-showcase__box">
        <div className="today-showcase__schedule">
          <div className="today-showcase__day-container">
            <span className="today-showcase__day-span today-showcase__day-span--active">
              Dzisiaj
            </span>
            <span className="today-showcase__day-span">Jutro</span>
          </div>
          <div className="today-showcase__item-container">
            <div className="today-showcase__item">Test</div>
            <div className="today-showcase__item">Test</div>
          </div>
          <div className="today-showcase__calendar">
            <p>Przejdź do kalendarza</p>
          </div>
        </div>
        <div className="today-showcase__date">
          <span className="today-showcase__date-span">{date}</span>
        </div>
      </div>
    </div>
  );
}
