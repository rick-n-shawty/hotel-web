import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1695078071178-521b9ca3289d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    title: "Bhutan - Thimphu",
    date: "2023",
  },
  {
    url: "https://images.unsplash.com/photo-1505080463650-543249075093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    title: "Iceland - Reykjavik",
    date: "2023",
  },
  {
    url: "https://images.unsplash.com/photo-1558690625-96d7a11c0215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
    title: "Bhutan - Paro",
    date: "2023",
  },
  {
    url: "https://images.unsplash.com/photo-1694665815989-235c2049ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    title: "Namibia - Swakopmund",
    date: "2022",
  },
  {
    url: "https://images.unsplash.com/photo-1610538216006-ff8246335182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    title: "Croatia - Dubrovnik",
    date: "2022",
  },
  {
    url: "https://images.unsplash.com/photo-1611702700098-dec597b27d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    title: "Bolivia - Sucre",
    date: "2021",
  },
  {
    url: "https://images.unsplash.com/photo-1588964258146-787046c32910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    title: "Lebanon - Byblos (Jbeil)",
    date: "2021",
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
  return (
    <motion.section
      variants={containervariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ marginTop: "100px" }}
    >
      <h1>Gallery</h1>
      <section className="gallery">
        <article className="containergallery">
          {images.map((image, index) => (
            <div key={index}>
              <div>
                <p>{image.title}</p>
                <motion.img
                  initial={{ filter: "blur(0.5em)", opacity: 0 }}
                  whileInView={{
                    filter: "blur(0em)",
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  src={image.url}
                  alt="image"
                  className="imagegallery"
                  loading="lazy"
                />
                <p>{image.date}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </motion.section>
  );
};

export default Gallery;
