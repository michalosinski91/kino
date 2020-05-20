import React from "react";

export default function DayTab({
  name,
  activeTab,
  operation,
  handleDaySelect,
}) {
  return (
    <span
      data-testid="day-tab"
      className={
        activeTab == name
          ? "day-select__day day-select__day--active"
          : "day-select__day"
      }
      onClick={({ target }) => handleDaySelect(target, operation)}
    >
      {name}
    </span>
  );
}
