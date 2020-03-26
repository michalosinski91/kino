import React from "react";
import "./FooterList.scss";
import FooterListItem from "./FooterListItem/FooterListItem";

export default function FooterList() {
  return (
    <ul className="footer-list">
      <FooterListItem section="Aktualności" />
      <FooterListItem section="Dla prasy" />
      <FooterListItem section="Polityka prywatności" />
      <FooterListItem section="Kontakt" />
    </ul>
  );
}
