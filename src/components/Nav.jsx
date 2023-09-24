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
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="navbar-nav offcanvas-body">
            <div className="offcanvas-header p-0 mb-3">
              <h5 className="offcanvas-title" id="offcanvasTopLabel">
                Sven Andersson
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
            <p className="offdesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium rem aspernatur quis deserunt culpa voluptates et
              commodi minus fuga ex cumque, placeat sed, eaque quia non
              molestias neque maxime quod.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
