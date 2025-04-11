import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navigation.css"; // Import the separate CSS file

function Navigation() {
  return (
    <nav className="Header-nav">
      <ul className="Header-nav-list">
        <li className="dropdown">
          <Link to="/" className="Header-nav-item">
            <h1>Home</h1>
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/gallery" className="Header-nav-item">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="Header-nav-item">
                <h1>FAQ</h1>
              </Link>
            </li>
            {/* <li>
              <Link to="/classes" className="Header-nav-item">
                <h1>Classes</h1>
              </Link>
            </li> */}
          </ul>
        </li>
        <li>
          <Link to="/contact" className="Header-nav-item">
            <h1>Contact</h1>
          </Link>
        </li>
        <li>
          <Link to="/donation" className="Header-nav-item">
            <h1>Donate</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
