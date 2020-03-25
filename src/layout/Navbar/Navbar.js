import React from "react";
import "./Navbar.scss";

import Logo from "../../components/Logo/Logo";
import NavList from "../../components/NavList/NavList";
import NavSearch from "../../components/NavSearch/NavSearch";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavSearch />
      <NavList />
      <Logo />
    </div>
  );
}
