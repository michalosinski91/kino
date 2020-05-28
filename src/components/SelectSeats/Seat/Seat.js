import React, { useState } from "react";
import "./Seat.scss";

export default function Seat({ label, status, handleSeatSelect }) {
  const [seatSelected, setSeatSelected] = useState(false);

  function toggleSeatSelect() {
    handleSeatSelect(label);
    setSeatSelected(!seatSelected);
  }

  if (status == "disable") {
    return (
      <div className="seat seat--disable">
        <p>{label}</p>
      </div>
    );
  }
  if (status == "taken") {
    return (
      <div className="seat seat--taken">
        <p>{label}</p>
      </div>
    );
  }

  if (status == "selected") {
    return (
      <div className="seat seat--selected">
        <p>{label}</p>
      </div>
    );
  }

  return (
    <div
      className={!seatSelected ? "seat seat--free" : "seat seat--selected"}
      onClick={toggleSeatSelect}
    >
      <p>{label}</p>
    </div>
  );
}
