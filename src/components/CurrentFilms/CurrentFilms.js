import React from "react";
import "./CurrentFilms.scss";
import FilmListItem from "../FilmListItem/FilmListItem";

export default function CurrentFilms({ films }) {
  // Add loading Spinner for loading state
  if (!films) {
    return <p>Loading...</p>;
  }

  return (
    <div className="current-films">
      <h2 className="heading heading--secondary">Teraz gramy</h2>
      <div className="current-films__grid">
        {films.map((film) => (
          <FilmListItem film={film} key={film.id} />
        ))}
      </div>
    </div>
  );
}
