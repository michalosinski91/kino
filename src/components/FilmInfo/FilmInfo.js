import React from "react";
import "./FilmInfo.scss";

export default function FilmInfo() {
  return (
    <div className="film-info">
      <h3 className="heading heading--tertiary">Szczegóły</h3>
      <div className="film-info__container">
        <div className="film-info__details">
          <ul>
            <li>
              <strong>Reżyseria: </strong>test director
            </li>
            <li>
              <strong>Zdjęcia: </strong>test cameraman
            </li>
            <li>
              <strong>Premiera: </strong>test date
            </li>
            <li>
              <strong>Długość: </strong>test duration
            </li>
            <li>
              <strong>Kraj produkcji: </strong>test country
            </li>
            <li>
              <strong>Język: </strong>test language
            </li>
            <li>
              <strong>Gatunek: </strong>test genre
            </li>
            <li>
              <strong>Wiek: </strong>test age rating
            </li>
          </ul>
        </div>
        <div className="film-info__cast">
          <ul>
            <li>
              <strong>Obsada:</strong>
            </li>
            <li>test test</li>
            <li>test testtest</li>
            <li>test testestsss</li>
            <li>testtest test</li>
            <li>testttt testtttest</li>
            <li>testtest test</li>
            <li>testtest test</li>
            <li>testtest</li>
            <li>test test</li>
            <li>testtest test testtest</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
