import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO.svg";
import "../Header/Header.scss";
const Header = () => {
  return (
    <header className="nav">
      <img src={Logo} alt="" />
      <ul className="links">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/apropos">
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;