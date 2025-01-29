"use client";

import React from "react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const merchants = [
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-8-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-9-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-10-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-11-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-12-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-13-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-14-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-15-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-1-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-2-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-3-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-4-150622.jpg",
    },

    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-5-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-6-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-5-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-6-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-5-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-6-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-5-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-6-150622.jpg",
    },
  ];
  return (
    <section className="w-full overflow-hidden mb-[0px]    bg-white">
      <div className="flex w-full gap-10 flex-col  justify-center items-center">
        <motion.div
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full px-6 md:p-0"
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 9,
                spaceBetween: 30,
              },
            }}
            centeredSlides={false}
            initialSlide={12}
            autoplay={{
              delay:0,
              disableOnInteraction: false,
            //   waitForTransition:false
            }}
            speed={1200}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper w-full     overflow-hidden   flex justify-center items-center text-white"
          >
            {merchants.map((merchant, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center p-8 items-start"
              >
                <motion.img
                  src={merchant.image}
                  className="min-h-[80px]  min-w-[80px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
