import { motion, useScroll, useTransform } from "framer-motion";
import Signature from "./Signature";
import SlidingText from "./SlidingText";
import style from "../css/about.module.css";
import Cards from "./Cards";
import { useRef } from "react";
import Work from "./Work";

const containervariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.05, duration: 0.5 },
  },
};

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "start end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <motion.section
      variants={containervariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
    >
      <Work />

      <Signature />

      <Cards />

      <div ref={container} className={style.about}>
        <motion.div
          style={{ width: width }}
          className={style.line}
        ></motion.div>
        <h1>About</h1>
        <div className={`row`}>
          <div className={`col-md-6 ${style.colabout}`}>
            <p>
              Sven Andersson Photography is a name synonymous with the art of
              capturing the Nordic essence through the lens of a camera. Rooted
              in the picturesque landscapes and rich cultural heritage of the
              Nordic regions, Sven's work is a visual journey that unveils the
              beauty of the North.
            </p>
          </div>
          <div className={`col-md-6 ${style.colabout}`}>
            <p>
              Beyond landscapes, Sven's lens also captures the essence of Nordic
              life. From the simplicity of Swedish design to the warmth of
              Nordic hospitality, his photographs reflect the values and
              lifestyle that make the Nordic region unique.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
