import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Signature from "./Signature";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scroll = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"], {
    ease: cubicBezier(0.05, 0.6, 0.05, 0.6),
  });

  return (
    <section id="about">
      <MotionArticle>
        <h1>About</h1>
        <div className="row about">
          <div className="col-md-6">
            <p>
              Sven Andersson Photography is a name synonymous with the art of
              capturing the Nordic essence through the lens of a camera. Rooted
              in the picturesque landscapes and rich cultural heritage of the
              Nordic regions, Sven's work is a visual journey that unveils the
              beauty of the North.
            </p>
          </div>
          <div className="col-md-6">
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
        <div className="clients">
          <h1>Clients</h1>
          {clients.map((client, index) => (
            <div className="row clientinfo" key={index}>
              <div className="col-md-4">
                <span>{client.name}</span>
              </div>
              <div className="col-md-8 d-flex justify-content-between">
                <span>{client.jobRole}</span>
                <span>{client.year}</span>
              </div>
            </div>
          ))}
        </div>
      </MotionArticle>

      <MotionArticle>
        <div className="reviews">
          <h1>Reviews</h1>
          <div ref={ref} className="reviewsoutercontainer">
            <motion.div style={{ x: scroll }} className="reviewsinnercontainer">
              {reviews.map((review, index) => (
                <p key={index}>
                  <i>{review.title}</i>
                  <span> - {review.author}</span>
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </MotionArticle>

      <MotionArticle>
        <div className="latestwork">
          <h1>Latest work</h1>
          <p>Have a look at my latest projects.</p>
          <div className="latestworkgallery">
            <div className="imagecontainer">
              <img src="/about1.avif" alt="img" />
              <p>
                Dublin, 2023 -{" "}
                <span style={{ fontWeight: "100" }}>
                  for Helsinki Heritage Preservation Society
                </span>
              </p>
            </div>
            <div className="imagecontainer">
              <img src="/about2.avif" alt="img" />
              <p>
                Detroit, 2022 -{" "}
                <span style={{ fontWeight: "100" }}>
                  for Oslo Modern Art Museum
                </span>
              </p>
            </div>
            <div className="imagecontainer">
              <img src="/about3.avif" alt="img" />
              <p>
                Oslo, 2022 -{" "}
                <span style={{ fontWeight: "100" }}>
                  Nordic Brutalist Enthusiast Club
                </span>
              </p>
            </div>
          </div>
        </div>
      </MotionArticle>
    </section>
  );
};

export default About;
