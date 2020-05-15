import React from "react";
import { Link } from "react-router-dom";
import "./CalendarFilmEntry.scss";
import { formatAgeRating } from "../../utils/FilmFormatting";

export default function CalendarFilmEntry({ data, films }) {
  const film = films.filter((film) => film.id == data.filmID)[0];
  return (
    <Link to={`/film/${film.id}`} className="film-item">
      <div className="film-item__photo">
        <img src={film.poster} alt={film.title} />
      </div>
      <div className="film-item__info">
        <p className="film-item__time">{data.time}</p>
        <p className="film-item__title">{film.title}</p>
        <p className="film-item__gerne">{film.genre}</p>
        <p className="film-item__age">{formatAgeRating(film.rated)}</p>
      </div>
    </Link>
  );
}
