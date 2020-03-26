import React from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input
          className="search-bar__input"
          type="text"
          name="search"
          placeholder="Wpisz coś..."
          autoComplete="off"
        />
        <button
          className="search-bar__button"
          onClick={e => e.preventDefault()}
        >
          X
        </button>
      </form>
    </div>
  );
}
