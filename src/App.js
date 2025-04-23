import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/footer.js";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact"; // Ensure the Contact component is imported correctly
// import Classes from "./pages/Classes";
import Donation from "./pages/Donation"; // Ensure the Donation component is imported correctly
import FAQ from "./pages/FAQ.js"; // Ensure the FAQ component is imported correctly
import ScrollToTop from "./components/scrollup"; // Import the ScrollToTop component
import { Navigate } from "react-router-dom";
import "./CSS/global.css"; // Import global CSS styles
import Login from "./components/Login.jsx";
import PrivateRoute from "./components/PrivateRoute"; // Ensure the PrivateRoute component is imported correctly
import Dashboard from "./components/Dashboardl"; // Ensure the Dashboard component is imported correctly



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />

        {/* Wrap protected route(s) inside a parent route with element={<PrivateRoute />} */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </Router >
  );
}

export default App;
