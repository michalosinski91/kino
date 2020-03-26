import React from "react";
import "./Footer.scss";
import FooterList from "../../components/FooterList/FooterList";
import Social from "../../components/Social/Social";
import Copyright from "../../components/Copyright/Copyright";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__main">
        <FooterList />
        <Social />
      </div>
      <Copyright />
    </div>
  );
}
