import React from "react";
import "./Films.scss";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import CurrentFilms from "../../components/CurrentFilms/CurrentFilms";

export default function Films() {
  return (
    <div data-testid="films">
      <CurrentFilms />
      <ComingSoon />
    </div>
  );
}
