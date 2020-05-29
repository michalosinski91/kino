import React, { useState } from "react";
import "./Dropdown.scss";
import DropdownOption from "./DropdownOption/DropdownOption";

export default function Dropdown({
  label,
  handleOptionClick,
  filmList,
  availableDates,
  availableTimes,
  disabled,
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={disabled ? "dropdown dropdown--disabled" : "dropdown"}
      onClick={disabled ? null : () => setShowMenu(!showMenu)}
    >
      <div
        className={
          disabled
            ? "dropdown__label dropdown__label--disabled"
            : "dropdown__label"
        }
      >
        {label}{" "}
        <i
          className={
            showMenu
              ? "fa fa-angle-right dropdown__icon dropdown__icon--rotate"
              : "fa fa-angle-right dropdown__icon"
          }
        ></i>
      </div>
      <div
        className={
          showMenu ? "dropdown__menu" : "dropdown__menu dropdown__menu--hide"
        }
      >
        {filmList
          ? filmList.map((film) => (
              <DropdownOption
                key={film.id}
                label={film.title}
                handleOptionClick={handleOptionClick}
              />
            ))
          : null}
        {availableDates
          ? availableDates.map((day) => (
              <DropdownOption
                key={day.date}
                label={day.date}
                handleOptionClick={handleOptionClick}
              />
            ))
          : null}
        {availableTimes
          ? availableTimes.map((timeSlot) => (
              <DropdownOption
                key={timeSlot.time}
                label={timeSlot.time}
                handleOptionClick={handleOptionClick}
              />
            ))
          : null}
      </div>
    </div>
  );
}
