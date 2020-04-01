import React from "react";
import "./ComingSoonShowcase.scss";
import ComingSoonItem from "./ComingSoonItem/ComingSoonItem";

export default function ComingSoonShowcase() {
  return (
    <div className="coming-soon">
      <h2 className="header header--secondary">Wkrótce u Nas</h2>
      <div className="coming-soon__grid">
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
        <ComingSoonItem />
      </div>
    </div>
  );
}
