import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Hero = () => {
  return (
    <main
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Link to="model" className="position-relative m-0">
        <div className="overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1668502741331-09e1c8917496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
            alt="heroimg"
            whileHover={{ scale: 1.1 }}
            exit={{ scale: 1 }}
            transition={transition}
            width={"300px"}
            height={"300px"}
          />
        </div>
        <motion.div
          key="hero-content"
          exit={{ opacity: 0 }}
          transition={transition}
          className="nav-link d-flex justify-content-between align-items-center"
          style={{ position: "absolute", top: "-30px" }}
        >
          <p>Photographer</p>
        </motion.div>
      </Link>
    </main>
  );
};

export default Hero;