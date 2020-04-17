import React from "react";
import "./CurrentFilms.scss";
import FilmListItem from "../FilmListItem/FilmListItem";

export default function CurrentFilms() {
  return (
    <div className="current-films">
      <h2 className="heading heading--secondary">Teraz gramy</h2>
      <div className="current-films__grid">
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
