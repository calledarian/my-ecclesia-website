import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-12 col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src="./favicon.ico"
                alt="Cambodia Bible Education Centre"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div className="ms-3">
                <p className="mb-0">មជ្ឈមណ្ឌលអប់រំព្រះគម្ពីរកម្ពុជា។</p>
                <p className="mb-0">Cambodia Bible Education Centre</p>
              </div>
            </div>
            <p className="small text-secondary">
              Our mission is to provide free Bible education and English for all Cambodians.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-secondary text-decoration-none small">Home</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-secondary text-decoration-none small">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/donation" className="text-secondary text-decoration-none small">Donation</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-secondary text-decoration-none small">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-1 small text-secondary">Phone: +855 78 959 342</p>
            <p className="mb-1 small text-secondary">Email: phnompenh.bec@gmail.com</p>
            <p className="mb-0 small text-secondary">Address: 444, Street 598, Toul Kork, Cambodia</p>
          </div>
        </div>

        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            <p className="mb-0 small">&copy; 2025 Cambodia Bible Education Centre (BEC). All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
