import React from "react";
import "./FilmListItem.scss";
import { Link } from "react-router-dom";

export default function FilmListItem({ film }) {
  return (
    <Link to={`/film/${film.id}`} className="film-list-item">
      <img
        src={film.poster}
        alt={film.title}
        className="film-list-item__photo"
      />
      <p className="film-list-item__date">
        <strong>03.04</strong> 16.00
      </p>
      <p className="film-list-item__title">{film.title}</p>
    </Link>
  );
}
