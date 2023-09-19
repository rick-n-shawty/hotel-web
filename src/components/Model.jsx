import { motion, cubicBezier } from "framer-motion";
import About from "./About";

const customEasing = cubicBezier(0.6, 0.01, -0.05, 0.9);
const transition = { duration: 1.4, ease: customEasing };

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
  return (
    <section>
      <article
        className="d-flex align-items-center position-relative"
        style={{ height: "100vh" }}
      >
        <div className="w-100 position-relative">
          <motion.h1
            initial={{ opacity: 0, position: "absolute", top: "0", zIndex: 0 }}
            animate={{
              opacity: 1,
              position: "absolute",
              top: "-50px",
              transition: { delay: 1.4, ...transition },
              zIndex: 0,
            }}
          >
            Sven Andersson Photography
          </motion.h1>
          <div className="d-flex justify-content-center overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1668502741331-09e1c8917496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
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
