import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    url: "/gallery1.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery2.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery3.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery4.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery5.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery6.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "/gallery7.avif",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
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

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-1000px"]);

  return (
    <motion.section
      variants={containervariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="gallery"
    >
      <article className="containergallery">
        {images.map((image, index) => (
          <div key={index}>
            <motion.div style={{ x, transition: "3s" }}>
              <img src={image.url} alt="image" className="imagegallery" />
            </motion.div>
          </div>
        ))}
      </article>
    </motion.section>
  );
};

export default Gallery;
