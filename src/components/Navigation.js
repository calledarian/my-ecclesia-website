import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container d-flex align-items-center justify-content-between">

        <ul className="navbar-nav d-flex flex-row flex-grow-1 justify-content-start gap-3 mb-0">
          {/* First two links (left) */}
          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donation" className="nav-link px-2">
              Donate
            </Link>
          </li>
        </ul>

        {/* Center logo */}
        <Link to="/" className="navbar-brand mx-3 d-none d-sm-block" aria-label="Home">
          <img src="./favicon.ico" alt="Logo" width="48" height="48" className="rounded-circle" />
        </Link>

        <ul className="navbar-nav d-flex flex-row flex-grow-1 justify-content-end gap-3 mb-0">
          {/* Last two links (right) */}
          <li className="nav-item">
            <Link to="/faq" className="nav-link px-2">
              FAQ
            </Link>
          </li>
        </ul>

        {/* Mobile logo */}
        <Link to="/" className="navbar-brand d-sm-none mx-auto" aria-label="Home">
          <img src="./favicon.ico" alt="Logo" width="40" height="40" className="rounded-circle" />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
