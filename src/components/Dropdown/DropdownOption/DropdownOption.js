import React from "react";

export default function DropdownOption({ handleOptionClick, label }) {
  return (
    <div
      className="dropdown__option"
      onClick={({ target }) => handleOptionClick(target.innerText)}
    >
      {label}
    </div>
  );
}
