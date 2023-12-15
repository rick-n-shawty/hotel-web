import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { LanguageContext } from "../App";
import { CLOUD_URL } from "../App";
const roomForOneImages = [
  {
    url: `${CLOUD_URL}/IMG_1464.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_2023.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_1462.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_1459.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_2025.JPG`,
  },
];

const roomForTwoImages = [
  {
    url: `${CLOUD_URL}/IMG_1464.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_2023.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_1462.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_1459.JPG`,
  },
  {
    url: `${CLOUD_URL}/IMG_2025.JPG`,
  },
]
const RoomsSwiper = ({type}) => {
  const [ln, setLn] = useContext(LanguageContext); 
  let h1Text;
  let priceTextNorm;
  let priceTextWeekEnd; 
  let images = []
  let priceWeekdays;
  let priceWeekends;  
  if(type == 1){
    priceWeekdays = "$70"
    priceWeekends = "$90"
    if(ln === 'rus'){
      h1Text = "Номер на одного" 
    }else if(ln === 'eng'){
      h1Text = "Room for one"
    }else if(ln === 'uz'){
      h1Text = "Room for one"
    } 
    images = roomForOneImages.map((image, index) => (
      <div className="swiper-slide" key={index}>
        <motion.img
          initial={{ filter: "blur(0.5em)", opacity: 0 }}
          whileInView={{
            filter: "blur(0em)",
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          src={image.url}
          alt={"image"}
          className="imageswiper"
        />
      </div>
    ))
  }else{
    priceWeekdays = "$100"
    priceWeekends = "$120"
    if(ln === 'rus'){
      h1Text = "Номер на двоих"
    }else if(ln === 'eng'){
      h1Text = "Room for two"
    }else if(ln === 'uz'){
      h1Text = "Room for two"
    }
    images = roomForTwoImages.map((image, index) => (
      <div className="swiper-slide" key={index}>
        <motion.img
          initial={{ filter: "blur(0.5em)", opacity: 0 }}
          whileInView={{
            filter: "blur(0em)",
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          src={image.url}
          alt={"image"}
          className="imageswiper"
          />
      </div>
    ))
  }
  switch(ln){
    case "rus":
      priceTextNorm = "Цена в будние дни: " + priceWeekdays
      priceTextWeekEnd = "Цена в выходные дни: " + priceWeekends
      break;
    case "eng":
      priceTextNorm = "Price on weekdays: " + priceWeekdays
      priceTextWeekEnd = "Price on weekends: " + priceWeekends
      break;
    case "uz":
      priceTextNorm = "Price on weekdays: " + priceWeekdays
      priceTextWeekEnd = "Price on weekends: " + priceWeekends
      break;
    default:
      priceTextNorm = "Price on weekdays: " + priceWeekdays
      priceTextWeekEnd = "Price on weekends: " + priceWeekends  
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
        <h2>{priceTextNorm}</h2>
        <h2>{priceTextWeekEnd}</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images}
          </div>
        </div>
      </div>
      {/* <SlidingText /> */}
    </div>
  );
};

export default RoomsSwiper;