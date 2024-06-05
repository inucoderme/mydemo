import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css"; // Стили для меню

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <Link to="/">
        <i className="fa-solid fa-hand-sparkles"></i> Influence
      </Link>

      <Link to="/page1">
        <i className="fa-solid fa-handshake"></i> Contract
      </Link>

      <Link to="/page2">
        <i className="fa-solid fa-envelope"></i> Mail
      </Link>

      <Link to="/page3">
        <i className="fa-solid fa-user-group"></i> Friends
      </Link>

      <Link to="/page4">
        <i className="fa-solid fa-gift"></i> Airdrop
      </Link>
    </div>
  );
}

export default NavigationMenu;
