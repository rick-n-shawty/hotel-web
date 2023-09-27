import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Footer from "./components/Footer";
import HorizontalSwiper from "./components/HorizontalSwiper";

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/model" element={<Model />} />
          <Route
            exact
            path="/horizontalswiper"
            element={<HorizontalSwiper />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Fragment>
  );
};

export default App;
