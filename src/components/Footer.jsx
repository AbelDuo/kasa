import React from "react";
import Logo from "../assets/images/LOGO.svg";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;