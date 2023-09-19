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

  return (
    <Fragment>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/model" element={<Model />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Fragment>
  );
};

export default App;
