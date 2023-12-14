import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { LanguageContext } from "../App";
const images = [
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1456.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1456.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1462.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1459.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1456.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1456.JPG",
  },
  {
    url: "https://d2pe372uz1yk5d.cloudfront.net/IMG_1456.JPG",
  },
];

const RoomsSwiper = ({type}) => {
  const [ln, setLn] = useContext(LanguageContext); 
  let h1Text;
  let priceText;
  if(type == 1){
    if(ln === 'rus'){
      h1Text = "Номер на одного"
      priceText = "Цена:"
    }else if(ln === 'eng'){
      h1Text = "Room for one"
      priceText = "Price:"
    }else if(ln === 'uz'){
      h1Text = "Room for one"
      priceText = "Price:"
    }
  }else{
    if(ln === 'rus'){
      h1Text = "Номер на двоих"
      priceText = "Цена:"
    }else if(ln === 'eng'){
      h1Text = "Room for two"
      priceText = "Price:"
    }else if(ln === 'uz'){
      h1Text = "Room for two"
      priceText = "Price:"
    }
  }
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      grabCursor: true,
      simulateTouch: true,
      mousewheelControl: false,
    });

    // Get the swiper container element
    const swiperContainer = document.querySelector(".swiper-container");

    // Add a custom event listener for vertical scrolling
    swiperContainer.addEventListener("wheel", (e) => {
      // Check if the user is scrolling vertically (up or down)
      if (e.deltaY !== 0) {
        // Prevent the default vertical scrolling behavior
        e.preventDefault();

        // Calculate the desired horizontal scroll amount (adjust the value as needed)
        const scrollAmount = e.deltaY * 0.1;

        // Scroll the swiper container horizontally
        swiper.slideTo(swiper.activeIndex + scrollAmount, 500, false);
      }
    });

    // Clean up Swiper when the component unmounts
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div>
      <div className="vertical-scroll-container">
        <h1>{h1Text}</h1>
        <h2>{priceText}</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images.map((image, index) => (
              <div className="swiper-slide" key={index}>
                {/* <p>{image.title}</p> */}
                <motion.img
                  initial={{ filter: "blur(0.5em)", opacity: 0 }}
                  whileInView={{
                    filter: "blur(0em)",
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  src={image.url}
                  alt={image.title}
                  className="imageswiper"
                />
                {/* <p style={{ marginTop: "16px" }}>{image.date}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <SlidingText /> */}
    </div>
  );
};

export default RoomsSwiper;