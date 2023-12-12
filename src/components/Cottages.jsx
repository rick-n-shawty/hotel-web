import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; 

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
]

const CottagesSwiper = () => {
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
            <div className="swiper-container">
                <h1>Cottages</h1>
                <div className="swiper-wrapper">
                {images.map((image, index) => (
                    <div className="swiper-slide" key={index}>
                    <p>{image.title}</p>
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
                    <p style={{ marginTop: "16px" }}>{image.date}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default CottagesSwiper;