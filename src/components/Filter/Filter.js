import React from "react";
import "./Filter.scss";
import FilterBtn from "./FilterBtn/FilterBtn";

export default function Filter({
  showFilter,
  toggleGenreFilter,
  toggleAgeFilter,
  ageList,
  genreList,
}) {
  return (
    <div
      className={!showFilter ? "filter" : "filter filter--show"}
      data-testid="filterComponent"
    >
      <div className="filter__container">
        <h3 className="heading heading--tertiary">Gatunek:</h3>
        <li className="filter__checklist">
          {!genreList
            ? null
            : genreList.map(({ name, filter }) => {
                return (
                  <FilterBtn
                    key={name}
                    toggleFunction={toggleGenreFilter}
                    name={name}
                    filter={filter}
                  />
                );
              })}
        </li>
      </div>
      <div className="filter__container">
        <h3 className="heading heading--tertiary">Wiek:</h3>
        <li className="filter__checklist">
          {!ageList
            ? null
            : ageList.map(({ category, filter }) => {
                return (
                  <FilterBtn
                    key={category}
                    toggleFunction={toggleAgeFilter}
                    name={category}
                    filter={filter}
                  />
                );
              })}
        </li>
      </div>
    </div>
  );
}
