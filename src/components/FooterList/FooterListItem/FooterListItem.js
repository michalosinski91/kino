import React from "react";

export default function FooterListItem({ section }) {
  return (
    <li className="footer-list__item">
      <a href="#">{section}</a>
    </li>
  );
}
