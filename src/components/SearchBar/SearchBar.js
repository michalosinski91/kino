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
        />
        <button className="search-bar__button">X</button>
      </form>
    </div>
  );
}
