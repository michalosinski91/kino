import React from "react";
import "./Films.scss";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import CurrentFilms from "../../components/CurrentFilms/CurrentFilms";

export default function Films({ films }) {
  // filters films based on release dates - converts them to unix timestamp and checks against current time
  const currentTime = new Date().getTime();
  const releasedFilms = films.filter(
    (film) => new Date(film.release).getTime() <= currentTime
  );

  const futureFilms = films.filter(
    (film) => new Date(film.release).getTime() > currentTime
  );

  return (
    <div data-testid="films">
      <CurrentFilms films={releasedFilms} />
      <ComingSoon films={futureFilms} />
    </div>
  );
}
