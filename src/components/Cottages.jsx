import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import { LanguageContext } from "../App";
import "swiper/swiper-bundle.css"; 
const cloudDomain = "https://d2pe372uz1yk5d.cloudfront.net"

const images = [
    {
        url: `${cloudDomain}/IMG_1468.JPG`,
    },
    {
        url: `${cloudDomain}/IMG_1477.JPG`,
    },
    {
      url: `${cloudDomain}/IMG_1472.JPG`
    },
    {
      url: `${cloudDomain}/IMG_1471.JPG`
    },
    {
      url: `${cloudDomain}/IMG_1466.JPG`
    },
    {
      url: `${cloudDomain}/IMG_1467.JPG`
    }
]

const CottagesSwiper = () => {
    const [ln, setLn] = useContext(LanguageContext)

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

    const cottageCards = images.map((image, index) => (
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
    let h1Text;
    let pricePerNight; 
    let priceWeekDays = "$300"
    let priceWeekEnds = "$350"  
    let priceWeekDaysText; 
    let priceWeekEndsText;
    switch(ln){
      case "rus":
        h1Text = "Коттеджи" 
        pricePerNight = "Цена за ночь"
        priceWeekDaysText = "Будни: " + priceWeekDays 
        priceWeekEndsText = "Выходные: " + priceWeekEnds
        break;
      case "eng":
        h1Text = "Cottages"
        pricePerNight = "Price per night"
        priceWeekDaysText = "Weeekdays: " + priceWeekDays 
        priceWeekEndsText = "Weekends: " + priceWeekEnds
        break; 
        case "uz":
          h1Text = "Cottages"
          pricePerNight = "Price per night"
          priceWeekDaysText = "Weeekdays: " + priceWeekDays 
          priceWeekEndsText = "Weekends: " + priceWeekEnds
        break; 
      default:
        h1Text = "Cottages" 
    }
    return (
        <div>
            <div className="vertical-scroll-container">
            <div className="swiper-container">
                <h1>{h1Text}</h1>
                <h2>{pricePerNight}</h2>
                <h3>{priceWeekDaysText}, {priceWeekEndsText}</h3>
                <div className="swiper-wrapper">
                  {cottageCards}
                </div>
            </div>
            </div>
        </div>
    );
}

export default CottagesSwiper;