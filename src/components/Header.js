import React, { useState, useEffect } from 'react';
import verses from "./verse";
import "../CSS/header.css"; // Import the CSS file for styling

const RandomBibleVerse = () => {


  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  };

  const [verse, setVerse] = useState('');

  useEffect(() => {
    // Set the initial verse
    setVerse(getRandomVerse());

    // Set an interval to update every 5 seconds
    const interval = setInterval(() => {
      setVerse(getRandomVerse());
    }, 8000); // 5000ms = 5 seconds

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{verse}</h1>
    </div>
  );
};


function Header() {
  return (
    <header className="Header-container">
      {/* <img src={BEClogo} alt="BEC Logo" className="Header-logo" /> */}
      <h1 className="Header-title">Cambodia Bible Education Center</h1>
      <div className="Header-verse">
        <RandomBibleVerse />


      </div>
    </header>
  );
}

export default Header;
