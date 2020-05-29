import React from "react";

export default function BookingSummaryItem({ label, data }) {
  return (
    <div className="booking-summary__item">
      <div className="booking-summary__label">{`${label}:`}</div>
      <div className="booking-summary__label">{data}</div>
    </div>
  );
}
