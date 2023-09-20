import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1695078071178-521b9ca3289d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1505080463650-543249075093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1558690625-96d7a11c0215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1694665815989-235c2049ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1610538216006-ff8246335182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1611702700098-dec597b27d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1588964258146-787046c32910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
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
