import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <span>Kino Noir</span>
      </Link>
    </div>
  );
}
