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

      {/* <Signature /> */}

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
            Welcome to Mont Inn, a serene retreat nestled in the heart of Tashkent. 
            Our cozy hotel beckons with warmth and comfort, offering an inviting escape for 
            travelers seeking tranquility and charm. At Mont Inn, experience the fusion of modern 
            amenities and timeless elegance, where each guest is embraced with personalized hospitality. 
            </p>
          </div>
          <div className={`col-md-6 ${style.colabout}`}>
            <p>
            Relax in our thoughtfully curated rooms adorned with stylish decor, 
            unwind in our tranquil surroundings, and savor delightful culinary experiences 
            at our onsite restaurant. Whether you're here for a peaceful getaway or exploring 
            the area's attractions, Mont Inn ensures a memorable stay filled with comfort, 
            serenity, and a touch of timeless sophistication
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
