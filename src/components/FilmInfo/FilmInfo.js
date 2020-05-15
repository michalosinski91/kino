import React from "react";
import "./FilmInfo.scss";
import { formatAgeRating } from "../../utils/FilmFormatting";

export default function FilmInfo({ film }) {
  let actors = film.actors.split(", ");

  return (
    <div className="film-info">
      <h3 className="heading heading--tertiary">Szczegóły</h3>
      <div className="film-info__container">
        <div className="film-info__details">
          <ul>
            <li>
              <strong>Reżyseria: </strong>
              {film.director}
            </li>
            <li>
              <strong>Scenariusz: </strong>
              {film.writer}
            </li>
            <li>
              <strong>Premiera: </strong>
              {film.release}
            </li>
            <li>
              <strong>Długość: </strong>
              {film.duration == "N/A" ? "Brak informacji" : film.duration}
            </li>
            <li>
              <strong>Kraj produkcji: </strong>
              {film.country}
            </li>
            <li>
              <strong>Gatunek: </strong>
              {film.genre}
            </li>
            <li>
              <strong>Wiek: </strong>
              {formatAgeRating(film.rated)}
            </li>
          </ul>
        </div>
        <div className="film-info__cast">
          <ul>
            <li>
              <strong>Obsada: </strong>
            </li>
            {actors.map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
