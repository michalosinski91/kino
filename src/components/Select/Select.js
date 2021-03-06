import React from "react";
import "./Select.scss";
import Dropdown from "../Dropdown/Dropdown";

export default function Select({
  label,
  handleOptionClick,
  filmList,
  availableDates,
  availableTimes,
  disabled,
}) {
  return (
    <div className="select">
      <Dropdown
        label={label}
        handleOptionClick={handleOptionClick}
        filmList={filmList}
        availableDates={availableDates}
        availableTimes={availableTimes}
        disabled={disabled}
      />
    </div>
  );
}
