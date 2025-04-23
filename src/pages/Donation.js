import React from "react";
import { Link } from "react-router-dom";
import "../CSS/donation.css"; // Import the CSS file

const Donation = () => {
  return (
    <div className="donation-container">
      <h3>Your Donation Supports:</h3>

      <div className="donation-items">
        <div className="donation-item">
          <h4>Bible Education Programs</h4>
          <p>
            Your contribution helps us teach the Bible to all ages by funding
            classes, materials, and outreach programs.
          </p>
        </div>

        <div className="donation-item">
          <h4>Sunday School</h4>
          <p>
            We teach kids about God's love every Sunday. Donations help provide
            breakfast and drinks for them each week.
          </p>
        </div>

        <div className="donation-item">
          <h4>Facility Maintenance</h4>
          <p>
            Help us maintain our education center as a welcoming place for
            worship, study, and community gatherings.
          </p>
        </div>

        <div className="donation-item">
          <h4>Youth Ministry</h4>
          <p>
            Your donations support our work with children and young adults,
            providing them with spiritual guidance and a strong foundation in
            faith.
          </p>
        </div>
      </div>

      <h3>Australia Bank Details</h3>

      <div className="how-to-donate">
        <div className="bank-details">
          <div className="detail">
            <p>
              <strong>Bank:</strong> Westpac Queen St, Brisbane
            </p>
            <p>
              <strong>BSB:</strong> 734–000
            </p>
            <p>
              <strong>Account No:</strong> 07 2437
            </p>
            <p>
              <strong>SWIFT/BIC:</strong> WPACAU2S
            </p>
            <p className="note">
              <strong>Note:</strong> Please include "Cambodia" or the purpose of
              your donation in the reference field so we can direct your gift
              appropriately. Thank you for your support!
            </p>
          </div>
        </div>
      </div>

      <div className="social-info">
        <p>
          If you have any questions about supporting our ministry or donations,
          <br />
          please visit our{" "}
          <Link to="/FAQ" className="link">
            FAQ
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default Donation;
