import React from "react";
import "./Social.scss";

export default function Social() {
  return (
    <ul className="social-list">
      <li className="social-list__item">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a href="#">English</a>
      </li>
    </ul>
  );
}
