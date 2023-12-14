import { motion, cubicBezier } from "framer-motion";
import About from "./About";
import style from "../css/model.module.css";
import { useContext } from "react";
import { LanguageContext } from "../App";
const customEasing = cubicBezier(0.6, 0.01, -0.05, 0.9);
const transition = { duration: 1.4, ease: customEasing };
const MODEL_URL = "https://d2pe372uz1yk5d.cloudfront.net/modelImage.JPG"
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
const Model = () => {
  const [ln, setLn] = useContext(LanguageContext)
  let msg; 
  if(ln === 'rus'){
    msg = 'Лучшие впечатления от отеля'
  }else if(ln === 'uz'){
    msg = 'Best hotel experience'
  }else if(ln === 'eng'){
    msg = 'Best hotel experience'
  }
  return (
    <section>
      <article
        className="d-flex align-items-center position-relative"
        style={{ height: "100vh" }}
      >
        <div className="w-100 position-relative">
          <motion.h1
            className={style.titleherolg}
            initial={{ opacity: 0, position: "absolute", top: "0", zIndex: 0 }}
            animate={{
              opacity: 1,
              position: "absolute",
              top: "-60px",
              transition: { delay: 1.4, ...transition },
              zIndex: 0,
            }}
          >
            {msg}
          </motion.h1>
          <motion.h1
            className={style.titleherosm}
            initial={{ opacity: 0, position: "absolute", top: "0", zIndex: 0 }}
            animate={{
              opacity: 1,
              position: "absolute",
              top: "-80px",
              transition: { delay: 1.4, ...transition },
              zIndex: 0,
            }}
          >
            Best hotel experience
          </motion.h1>
          <div className="d-flex justify-content-center">
            <motion.img
              // src={modelImageUrl}
              src={MODEL_URL}
              alt="modelimg"
              initial={{
                width: "300px",
                height: "300px",
                zIndex: 50,
              }}
              animate={{
                y: 0,
                width: "100%",
                height: "500px",
                transition: { delay: 0.2, ...transition },
              }}
            />
          </div>
        </div>
      </article>

      <About />
    </section>
  );
};

export default Model;
