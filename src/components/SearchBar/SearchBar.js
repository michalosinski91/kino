import React from "react";
import "./SearchBar.scss";

export default function SearchBar({ showSearchBar, toggleSearchBar }) {
  return (
    <div
      className={showSearchBar ? "search-bar search-bar--show" : "search-bar"}
    >
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
          onClick={e => {
            e.preventDefault();
            toggleSearchBar();
          }}
        >
          <i className="fas fa-times search-bar__icon"></i>
        </button>
      </form>
    </div>
  );
}
