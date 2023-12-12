import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createContext, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Footer from "./components/Footer";
import RoomsSwiper from "./components/RoomsSwiper";
import CottagesSwiper from "./components/Cottages";
export const LanguageContext = createContext(null)
const App = () => {
  const location = useLocation();
  const [ln,setLn] = useState("eng");
  return (
    <LanguageContext.Provider value={[ln, setLn]}>
    <Fragment>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/model" element={<Model />} />
          <Route
            exact
            path="/rooms"
            element={<RoomsSwiper />}
          />
          <Route
          exact 
          path="/cottages"
          element={<CottagesSwiper/>}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Fragment>
    </LanguageContext.Provider>
  );
};

export default App;
