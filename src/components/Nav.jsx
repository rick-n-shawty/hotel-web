import style from "../css/nav.module.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { LanguageContext } from "../App";
import { useContext } from "react";
const Nav = () => {
  const [ln, setLn] = useContext(LanguageContext);
  const toggleLanguage = (e) => {
    if(ln === 'rus'){
      setLn("uz")
    }else if(ln === 'uz'){
      setLn("eng")
    }else if(ln === 'eng'){
      setLn("rus")
    }
  } 
  let btnText; 
  let homeText; 
  let aboutText; 
  let roomText; 
  let contactText; 
  let menuText;
  let closeText;
  if(ln === 'eng'){
    btnText = "English"
    homeText = "Home"
    aboutText = "About"
    roomText = "Rooms"
    contactText = "Contact"
    menuText = "menu"
    closeText = "close"
  }else if(ln === 'uz'){
    btnText = "Uzbek"
    homeText = "Home"
    aboutText = "About"
    roomText = "Rooms"
    contactText = "Contact"
    menuText = "menu"
    closeText = "close"
  }else if(ln === 'rus'){
    btnText = "Русский"
    homeText = "Главная"
    aboutText = "O нас"
    roomText = "Номера"
    contactText = "Связаться"
    menuText = "меню"
    closeText = "закрыть"
  }
  return (
    <motion.nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid p-0 d-flex align-items-baseline">
        <RouterLink
          className="navbar-brand"
          to="/"
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
          {menuText}
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
                {closeText}
              </button>
            </div>
            <RouterLink
              className={`nav-link active ${style.navlink}`}
              aria-current="page"
              to="/"
            >
              {homeText}
            </RouterLink>
            <ScrollLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="footer"
            >
              {aboutText}
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="about"
            >
              {roomText}
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${style.navlink}`}
              aria-current="page"
              to="footer"
            >
              {contactText}
            </ScrollLink>
            <div className={`nav-link ${style.navlink}`}>
              <button className="nav-toggle" onClick={toggleLanguage}>{btnText}</button>
            </div>
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
