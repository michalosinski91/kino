import React from "react";
import "./FilterBtn.scss";

export default function FilterBtn({ toggleFunction, name, filter }) {
  return (
    <button
      data-testid="filterBtn"
      onClick={() => toggleFunction(name)}
      className={!filter ? "filter-btn" : "filter-btn filter-btn--checked"}
    >
      {name}
    </button>
  );
}
