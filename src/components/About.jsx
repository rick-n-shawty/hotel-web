import { motion, useScroll, useTransform } from "framer-motion";
import Signature from "./Signature";
import SlidingText from "./SlidingText";
import style from "../css/about.module.css";
import Cards from "./Cards";
import { useRef } from "react";
import Work from "./Work";
import { LanguageContext } from "../App";
import { useContext } from "react";
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

  const [ln, setLn] = useContext(LanguageContext)
  let aboutText;
  let p1;
  let p2;
  if(ln === "rus"){
    aboutText = "O нас"
    p1 = `Добро пожаловать в Mont Inn, спокойное место отдыха, расположенное в самом сердце Ташкента.
    Наш уютный отель манит теплом и комфортом, предлагая привлекательный отдых для путешественников, ищущих спокойствия и очарования.
    B Mont Inn вы ощутите сочетание современных удобств и вечной элегантности.
    где каждого гостя встречают c индивидуальным гостеприимством.`
    p2 = `Отдохните в наших тщательно оформленных номерах, украшенных стильным декором.
    расслабьтесь в нашей спокойной обстановке и насладитесь восхитительными кулинарными впечатлениями
    в нашем ресторане на территории. Если вы здесь для спокойного отдыха или изучения
    достопримечательности региона, Mont Inn гарантирует незабываемый отдых, наполненный комфортом,
    спокойствие и нотка вневременной изысканности`
  }else if(ln === "eng"){
    aboutText = "About us"
    p1 = `Welcome to Mont Inn, a serene retreat nestled in the heart of Tashkent. 
    Our cozy hotel beckons with warmth and comfort, offering an inviting escape for travelers seeking 
    tranquility and charm. At Mont Inn, experience the fusion of modern amenities and timeless elegance, 
    where each guest is embraced with personalized hospitality.`  
    p2 = `Relax in our thoughtfully curated rooms adorned with stylish decor, 
    unwind in our tranquil surroundings, and savor delightful culinary experiences 
    at our onsite restaurant. Whether you're here for a peaceful getaway or exploring 
    the area's attractions, Mont Inn ensures a memorable stay filled with comfort, 
    serenity, and a touch of timeless sophistication`
  }else if(ln === "uz"){
    aboutText = "About us"
    p1 = `Welcome to Mont Inn, a serene retreat nestled in the heart of Tashkent. 
    Our cozy hotel beckons with warmth and comfort, offering an inviting escape for travelers seeking 
    tranquility and charm. At Mont Inn, experience the fusion of modern amenities and timeless elegance, 
    where each guest is embraced with personalized hospitality.`  
    p2 = `Relax in our thoughtfully curated rooms adorned with stylish decor, 
    unwind in our tranquil surroundings, and savor delightful culinary experiences 
    at our onsite restaurant. Whether you're here for a peaceful getaway or exploring 
    the area's attractions, Mont Inn ensures a memorable stay filled with comfort, 
    serenity, and a touch of timeless sophistication`
  }
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
        <h1>{aboutText}</h1>
        <div className={`row`}>
          <div className={`col-md-6 ${style.colabout}`}>
            <p>
              {p1}
            </p>
          </div>
          <div className={`col-md-6 ${style.colabout}`}>
            <p>
              {p2}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
