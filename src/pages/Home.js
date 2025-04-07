import React from "react";
import "../CSS/hero.css"; // Import the CSS file for styling
function Home() {
  return (
    <div className="Hero-container">
      <p className="Hero-subtitle">
        Welcome to our free education centre! We offer free English and Bible
        lessons with teachers from all over the world who are excited to meet
        you! Message or call us to find out more and arrange a class time to
        start studying today!
      </p>
      <button className="Hero-button">Learn More !</button>
    </div>
  );
}

export default Home;
