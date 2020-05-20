import React from "react";
import "./FilmSelect.scss";

// TODO: show dropdown with a list of films.
//  clicking on item will direct to FilmDetail page for that item

export default function FilmSelect() {
  return (
    <div data-testid="film-select">
      <p data-testid="list">Wybierz film by wyświetlić szczegóły:</p>
    </div>
  );
}
