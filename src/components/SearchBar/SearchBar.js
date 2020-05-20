import React from "react";
import "./SearchBar.scss";

export default function SearchBar({ showSearchBar, toggleSearchBar }) {
  const handleToggleSearchBar = (e) => {
    e.preventDefault();
    toggleSearchBar();
  };

  return (
    <div
      data-testid="search-bar-container"
      className={!showSearchBar ? "search-bar" : "search-bar search-bar--show"}
    >
      <form className="search-bar__form">
        <input
          className="search-bar__input"
          type="text"
          name="search"
          placeholder="Wpisz coś..."
          autoComplete="off"
          aria-label="Search"
        />
        <button
          className="search-bar__button"
          data-testid="hideSearchBar"
          onClick={(e) => handleToggleSearchBar(e)}
        >
          <i className="fas fa-times search-bar__icon"></i>
        </button>
      </form>
    </div>
  );
}
