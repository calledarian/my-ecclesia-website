import React from "react";
import "../CSS/contact.css"; // Import your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need more information, feel free to contact
        us:
      </p>

      <div className="contact-details">
        <div>
          <h3>Email:</h3>
          <p>example@example.com</p>
        </div>
        <div>
          <h3>Phone:</h3>
          <p>+855 78 959 342</p>
        </div>
        <div>
          <h3>Address:</h3>
          <p>444, Street 598, Toul Kork, Cambodia</p>
        </div>
      </div>

      <div className="map-container">
        <h3>Location:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.029168647145!2d104.88323247354342!3d11.584849343765347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951118e0c0343%3A0xc035b379dec66b7a!2sCambodia%20Bible%20Education%20Centre%20(BEC)!5e1!3m2!1sen!2skh!4v1743417939523!5m2!1sen!2skh"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cambodia Bible Education Centre Map" /* Add the title here */
        ></iframe>
      </div>

      <div className="social-media">
        <h3>Follow us:</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/PPbec/">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
