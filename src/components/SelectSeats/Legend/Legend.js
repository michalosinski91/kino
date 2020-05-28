import React from "react";
import "./Legend.scss";
import Seat from "../Seat/Seat";

export default function Legend() {
  return (
    <div className="legend">
      <div className="legend__item">
        <label>Niedostępne</label>
        <Seat status="disable" />
      </div>
      <div className="legend__item">
        <label>Zarezerwowane</label>
        <Seat status="taken" />
      </div>
      <div className="legend__item">
        <label>Wolne</label>
        <Seat status="free" />
      </div>
      <div className="legend__item">
        <label>Wybrane</label>
        <Seat status="selected" />
      </div>
    </div>
  );
}
