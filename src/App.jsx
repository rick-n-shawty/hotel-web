import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Fragment, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { AnimatePresence } from "framer-motion";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(null);

  const handlethemeswitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Fragment>
      <Nav handlethemeswitcher={handlethemeswitcher} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Hero />} />
          <Route path="/model" element={<Model />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Fragment>
  );
};

export default App;
