import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navigation.css"; // Import the separate CSS file

function Navigation() {
  return (
    <nav className="Header-nav">
      <ul className="Header-nav-list">

        <div className=" Contacthm">
          <li>
            <Link to="/contact" className="Header-nav-item">
              <h1>Contact</h1>
            </Link>
          </li>


        </div>
        <div className="DonateMiddle">
          <li>
            <Link to="/donation" className="Header-nav-item">
              <h1>Donate</h1>
            </Link>
          </li>
        </div>
        <div className="Logohm">
          <li className="dropdown">
            <Link to="/" className="Header-nav-item">
              <img src="./favicon.ico" alt="Home" className="Header-nav-icon" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/faq" className="Header-nav-item">
                  <h1>FAQ</h1>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="Header-nav-item">
                  <h1>Dashboard</h1>
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </ul >
    </nav >
  );
}

export default Navigation;
