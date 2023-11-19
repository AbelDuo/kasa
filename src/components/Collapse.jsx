import React, { useState } from "react";
import "../styles/Collapse.css";
import icon from "../assets/images/Vector.png";

const Collapse = ({ title, children }) => {
  const iconInitialState = {
    transform: "rotate(180deg)",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(0deg)", transition: "all 0.25s linear" });
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={icon} className="collapse-icon" alt="collapse icon" style={iconStyle} />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;