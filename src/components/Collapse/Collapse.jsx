import React, { useState } from "react";
import "../Collapse/Collapse.scss";
import icon from "../../assets/images/Vector.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={icon} className={`collapse-icon ${isOpen ? 'rotate' : ''}`} alt="collapse icon" />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
