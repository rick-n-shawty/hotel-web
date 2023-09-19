import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1680712738452-2699263b1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1505080463650-543249075093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1558690625-96d7a11c0215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1694665815989-235c2049ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1694324036178-027b201fc0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1611702700098-dec597b27d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    title: "some title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nisi nihil odit possimus illo corrupti consectetur nostrum tempore! Inventore optio dolore, officiis doloremque minima quidem voluptatum recusandae omnis molestiae autem",
  },
  {
    url: "https://images.unsplash.com/photo-1694029636867-77f98aaae870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
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
  return (
    <motion.section
      variants={containervariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="gallery"
    >
      <article className="row">
        <h1>GALLERY</h1>
        <div className="col-md-6 gallerydesc">
          <p>
            Welcome to Sven Andersson's gallery, where artistry meets the Nordic
            spirit. Immerse yourself in a world of captivating landscapes, rich
            cultural experiences, and the pure essence of the North. Sven's
            photography transcends ordinary imagery, offering a visual journey
            that unveils the beauty of the Nordic region.
          </p>
        </div>
        <div className="col-md-6 gallerydesc">
          <p>
            With each click of his camera, he captures the soul of the North,
            transforming everyday scenes into extraordinary moments. Explore our
            gallery and let Sven's lens redefine how you see architecture,
            design, and the Nordic way of life.
          </p>
        </div>
      </article>
      <article className="gallerycontainer">
        {images.map((image, index) => (
          <motion.div
            initial={{ filter: "blur(2em)", y: 20 }}
            whileInView={{
              filter: "blur(0em)",
              y: 0,
              transition: { delay: index * 0.05, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={index}
            className={index % 2 === 0 ? "imageright" : "imageleft"}
          >
            <img src={image.url} alt={image.title} />
          </motion.div>
        ))}
      </article>
    </motion.section>
  );
};

export default Gallery;
