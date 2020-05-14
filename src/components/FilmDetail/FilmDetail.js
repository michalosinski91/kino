import React from "react";
import { useParams } from "react-router-dom";
import "./FilmDetail.scss";
import FilmInfo from "../FilmInfo/FilmInfo";

export default function FilmDetail({ films }) {
  let { id } = useParams();
  const film = films.filter((film) => film.id == id)[0];

  // TODO - change layout - photo to left, details to right on large screen, photo top, details below on small screen
  return (
    <div className="film-detail">
      <h2 className="heading heading--secondary">{film.title}</h2>
      <h3 className="heading heading--tertiary">{film.director}</h3>
      <img src={film.poster} alt={film.tile} className="film-detail__photo" />
      <p className="film-detail__description">{film.plot}</p>
      <FilmInfo film={film} />
    </div>
  );
}
