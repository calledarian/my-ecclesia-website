import React from "react";
// import BEClogo from "./BEClogo.jpg";

function Header() {
  return (
    <header className="Header-container">
      {/* <img src={BEClogo} alt="BEC Logo" className="Header-logo" /> */}
      <h1 className="Header-title">Cambodia Bible Education Center</h1>
      <p className="Header-verse">
        I will give thanks to you, Lord, with all my heart; I will tell of all
        your wonderful deeds. Psalm 9:1
      </p>
    </header>
  );
}

export default Header;
