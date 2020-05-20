import React from "react";
import "./ComingSoon.scss";
import FilmListItem from "../FilmListItem/FilmListItem";

export default function ComingSoon({ films }) {
  // Add loading spinner
  if (!films) {
    return (
      <div data-testid="coming-soon-loader">
        <p data-testid="loading">Loading...</p>
      </div>
    );
  }

  return (
    <div className="coming-soon">
      <h2 className="heading heading--secondary">Wkrótce u Nas</h2>
      <div className="coming-soon__grid">
        {films.map((film) => (
          <FilmListItem film={film} key={film.id} />
        ))}
      </div>
    </div>
  );
}
