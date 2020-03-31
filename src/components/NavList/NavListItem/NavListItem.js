import React from "react";
import { Link } from "react-router-dom";

export default function NavListItem({ section }) {
  const routeName = section.replace(" ", "").toLowerCase();
  return (
    <li className="nav-list__item">
      <Link to={`/${routeName}`}>{section}</Link>
    </li>
  );
}
