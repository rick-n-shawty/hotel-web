import { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid p-0 d-flex align-items-baseline">
        <RouterLink className="navbar-brand" to="/">
          Sven Andersson
        </RouterLink>
        <button
          className="navbar-toggler p-0 text-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          menu
        </button>
        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="navbar-nav offcanvas-body">
            <div className="offcanvas-header p-0 mb-3">
              <h5 className="offcanvas-title" id="offcanvasTopLabel">
                Sven Andersson Photography
              </h5>
              <button
                type="button"
                className="btn text-white p-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="bi bi-x h1" />
              </button>
            </div>
            <RouterLink
              className="nav-link active"
              aria-current="page"
              to="/model"
            >
              Home
            </RouterLink>
            <ScrollLink className="nav-link" aria-current="page" to="about">
              About
            </ScrollLink>
            <RouterLink className="nav-link" aria-current="page" to="/gallery">
              Gallery
            </RouterLink>
            <ScrollLink className="nav-link" aria-current="page" to="footer">
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
