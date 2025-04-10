import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/footer.js";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"; // Ensure the Contact component is imported correctly
import Classes from "./pages/Classes";
import Donation from "./pages/Donation"; // Ensure the Donation component is imported correctly
import FAQ from "./pages/FAQ.js"; // Ensure the FAQ component is imported correctly
import { Navigate } from "react-router-dom";
import "./CSS/global.css"; // Import global CSS styles


function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/Donation" element={<Donation />} /> {/* Donation route */}
        <Route path="/faq" element={<FAQ />} /> {/* FAQ route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
