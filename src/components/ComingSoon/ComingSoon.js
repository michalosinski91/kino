import React from "react";
import "./ComingSoon.scss";
import FilmListItem from "../FilmListItem/FilmListItem";

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2 className="heading heading--secondary">Wkrótce u Nas</h2>
      <div className="coming-soon__grid">
        <FilmListItem />
        <FilmListItem />
        <FilmListItem />
        <FilmListItem />
        <FilmListItem />
        <FilmListItem />
      </div>
    </div>
  );
}
