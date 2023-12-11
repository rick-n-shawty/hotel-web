import style from "../css/nav.module.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid p-0 d-flex align-items-baseline">
        <RouterLink
          className="navbar-brand"
          to="/model"
          style={{ lineHeight: 1 }}
        >
          Mont Inn
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
          className={`${style.offcanvas} offcanvas offcanvas-start`}
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className={`${style.offcanvasBody} navbar-nav offcanvas-body`}>
            <div
              className={`${style.offcanvasHeader} offcanvas-header p-0 mb-3`}
            >
              <p className="navbar-brand text-white" id="offcanvasTopLabel">
                Mont Inn
              </p>
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
              className={`nav-link active ${style.navlink}`}
              aria-current="page"
              to="/model"
            >
              Home
            </RouterLink>
            <ScrollLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="about"
            >
              About
            </ScrollLink>
            <RouterLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="/horizontalswiper"
            >
              Rooms
            </RouterLink>
            <ScrollLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="footer"
            >
              Contact
            </ScrollLink>
            <div className={style.offdesc}>
              <a href="mailto: #" className="navbar-brand">
                hotel@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
