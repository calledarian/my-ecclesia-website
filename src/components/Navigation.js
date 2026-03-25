import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="./favicon.ico"
                  alt="Logo"
                  width="68"
                  height="90"
                  className="img-fluid"
                />

                <div className="d-none d-lg-flex flex-column">
                  <span>
                    មជ្ឈមណ្ឌលអប់រំព្រះគម្ពីរកម្ពុជា។
                  </span>
                  <strong>
                    Cambodia Bible Education Centre
                  </strong>
                </div>
              </div>
            </div>
          </Link>

          {/* Right actions */}
          <div className="d-flex align-items-center gap-3 my-5">
            <a
              href="https://instagram.com/fieldworkers_in_cambodia"
              target="_blank"
              rel="noreferrer"
              className="text-dark"
            >
              <i className="bi bi-instagram fs-4 fs-sm-5"></i>
            </a>
            <a
              href="https://www.facebook.com/PPbec/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook fs-4 fs-sm-5"></i>
            </a>
            <a
              href="https://t.me/seunthavann"
              target="_blank"
              rel="noreferrer"
              className="text-dark"
            >
              <i className="bi bi-telegram fs-4 fs-sm-5"></i>
            </a>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#primaryNavigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="primaryNavigation">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-bold">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/forms" className="nav-link fw-bold">
                  Forms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/donation" className="nav-link fw-bold">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link fw-bold">
                  Questions/Answers
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
