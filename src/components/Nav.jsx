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
          className="offcanvas offcanvas-bottom"
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
                className="btn p-0 text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                close
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
            <RouterLink
              className="nav-link"
              aria-current="page"
              to="/horizontalswiper"
            >
              Gallery
            </RouterLink>
            <ScrollLink className="nav-link" aria-current="page" to="footer">
              Contact
            </ScrollLink>
            <img
              src="https://images.unsplash.com/photo-1691197617440-ed5b47267b26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="img"
              className="imageoffcanvas"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
