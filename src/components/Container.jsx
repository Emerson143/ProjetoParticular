import React from "react";
import "./Container.css";

function Container({ children, isOpen }) {
  return (
    <div className={`container ${isOpen ? "menu-aberto" : ""}`}>
      <div className="container-content">{children}</div>
    </div>
  );
}

export default Container;