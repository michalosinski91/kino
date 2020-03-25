import React from "react";
import NavListItem from "./NavListItem/NavListItem";

import "./NavList.scss";

export default function NavList() {
  return (
    <ul className="nav-list">
      <NavListItem section={"Repertuar"} />
      <NavListItem section={"Kalendarz"} />
      <NavListItem section={"Bilety"} />
      <NavListItem section={"O Nas"} />
    </ul>
  );
}
