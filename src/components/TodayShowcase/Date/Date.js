import React from "react";
import "./Date.scss";

export default function Date({ date }) {
  return (
    <div className="date">
      <span className="date__text">{date}</span>
    </div>
  );
}
