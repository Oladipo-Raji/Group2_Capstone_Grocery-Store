import React from "react";
import "../styles/header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">🛒 FreshCart</div>

        <div className="location"> Los Angeles</div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>

        <div className="header-icons">
          <span>❤️</span>
          <span>🔔</span>
          <span>🛒</span>
          <button className="signin-btn">Sign In</button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;