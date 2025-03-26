import React from "react";

function Navigation() {
  return (
    <nav className="Header-nav">
      <ul className="Header-nav-list">
        <li>
          <a href="https://www.youtube.com/" className="Header-nav-item">
            <h1>Home</h1>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" className="Header-nav-item">
            <h1>About us</h1>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" className="Header-nav-item">
            <h1>Contact</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
