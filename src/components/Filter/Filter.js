import React from "react";
import "./Filter.scss";

export default function Filter({ showFilter }) {
  return (
    <div
      className={!showFilter ? "filter" : "filter filter--show"}
      data-testid="filterComponent"
    >
      <div className="filter__container">
        <h3 className="heading heading--tertiary">Gatunek:</h3>
        <li className="filter__checklist">
          <button className="filter__checklist-button">Komedia</button>
          <button className="filter__checklist-button filter__checklist-button--checked">
            Dramat
          </button>
          <button className="filter__checklist-button">Akcja</button>
          <button className="filter__checklist-button">Thriller</button>
          <button className="filter__checklist-button">Animacja</button>
          <button className="filter__checklist-button">Romans</button>
          <button className="filter__checklist-button">Horror</button>
        </li>
      </div>
      <div className="filter__container">
        <h3 className="heading heading--tertiary">Wiek:</h3>
        <li className="filter__checklist">
          <button className="filter__checklist-button">Familijny</button>
          <button className="filter__checklist-button filter__checklist-button--checked">
            12+
          </button>
          <button className="filter__checklist-button">15+</button>
          <button className="filter__checklist-button">18+</button>
        </li>
      </div>
    </div>
  );
}
