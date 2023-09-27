import { motion } from "framer-motion";
import Signature from "./Signature";
import SlidingText from "./SlidingText";
import style from "../css/about.module.css";

const clients = [
  {
    name: "Nordic Architects AB",
    jobRole: "Leading architecture firm",
    year: 2023,
  },
  {
    name: "Nordic Concrete Creations",
    jobRole: "Concrete craftsmanship company",
    year: 2023,
  },
  {
    name: "Oslo Modern Art Museum",
    jobRole: "Art museum",
    year: 2023,
  },
  {
    name: "Helsinki Heritage Preservation Society",
    jobRole: "Heritage preservation organization",
    year: 2022,
  },
  {
    name: "Stockholm Interior Design",
    jobRole: "Interior design studio",
    year: 2022,
  },
  {
    name: "Copenhagen Urban Planning Authority",
    jobRole: "Urban planning authority",
    year: 2021,
  },
  {
    name: "The Nordic Concrete Symposium",
    jobRole: "Event organizer",
    year: 2021,
  },
  {
    name: "Lena Andersson, Architectural Designer",
    jobRole: "Architectural designer",
    year: 2021,
  },
  {
    name: "Urban Explorers Magazine",
    jobRole: "Publication",
    year: 2021,
  },
  {
    name: "Nordic Brutalist Enthusiast Club",
    jobRole: "Enthusiast club",
    year: 2021,
  },
];

const reviews = [
  {
    title: "Sven's lens transforms the ordinary into extraordinary.",
    author: "Copenhagen Urban Planning Authority",
  },
  {
    title: "Capturing the soul of the North, one click at a time.",
    author: "Architectural designer",
  },
  {
    title: "Sven's photography is pure Nordic magic.",
    author: "Enthusiast club",
  },
  {
    title: "Every shot tells a Nordic story.",
    author: "Interior design studio",
  },
  {
    title: "Sven's artistry redefines how we see architecture.",
    author: "Concrete craftsmanship company",
  },
];

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

const MotionArticle = ({ title, children }) => {
  return (
    <motion.article
      variants={containervariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1>{title}</h1>
      {children}
    </motion.article>
  );
};

const About = () => {
  return (
    <section id="about">
      <MotionArticle>
        <h1>About</h1>
        <div className={` row ${style.about}`}>
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
      </MotionArticle>

      <Signature />

      <MotionArticle>
        <div className={style.clients}>
          <h1>Clients</h1>
          {clients.map((client, index) => (
            <div className={`row ${style.clientinfo}`} key={index}>
              <div className="col-md-4 p-0">
                <span>{client.name}</span>
              </div>
              <div
                className={`col-md-8 d-flex justify-content-between ${style.light}`}
              >
                <span>{client.jobRole}</span>
                <span>{client.year}</span>
              </div>
            </div>
          ))}
        </div>
      </MotionArticle>

      <SlidingText />

      <MotionArticle>
        <div className={style.latestwork}>
          <h1>Latest work</h1>
          <p>Have a look at my latest projects.</p>
          <div className={style.latestworkgallery}>
            <div className={style.imagecontainer}>
              <img
                src="https://images.unsplash.com/photo-1694032073070-c54e65e77bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="img"
              />
              <p>Dublin, 2023 - for Helsinki Heritage Preservation Society</p>
            </div>
            <div className={style.imagecontainer}>
              <img
                src="https://images.unsplash.com/photo-1642034410877-22875908ddda?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                alt="img"
              />
              <p>Detroit, 2022 - for Oslo Modern Art Museum</p>
            </div>
            <div className={style.imagecontainer}>
              <img
                src="https://images.unsplash.com/photo-1693362287391-fc96c0e5e489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="img"
              />
              <p>Oslo, 2022 - for Nordic Brutalist Enthusiast Club</p>
            </div>
          </div>
        </div>
      </MotionArticle>
    </section>
  );
};

export default About;
