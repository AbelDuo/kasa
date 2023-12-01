import React from "react";
import LogoBlanc from "../../assets/images/LOGO_blanc.png";
import "../Footer/Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <img src={LogoBlanc} alt="Logo" />
      <div className="footer-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;