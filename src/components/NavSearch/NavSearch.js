import React from "react";
import "./NavSearch.scss";

export default function NavSearch({ toggleSearchBar }) {
  return (
    <div className="nav-search" onClick={toggleSearchBar}>
      Wyszukaj
    </div>
  );
}
