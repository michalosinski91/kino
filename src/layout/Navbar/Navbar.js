import React from "react";
import "./Navbar.scss";

import Logo from "../../components/Logo/Logo";
import NavList from "../../components/NavList/NavList";
import NavSearch from "../../components/NavSearch/NavSearch";

export default function Navbar({ toggleSearchBar }) {
  return (
    <div className="navbar">
      <NavSearch toggleSearchBar={toggleSearchBar} />
      <NavList />
      <Logo />
    </div>
  );
}
