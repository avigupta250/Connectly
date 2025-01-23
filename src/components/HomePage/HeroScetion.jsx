"use client"
import React from "react";
import NavBar from "../NavBar";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import download from "../../../public/download.jpg";
import Business from "../../../public/Businessman.jpg";
import Sales from "../../../public/Sales-analytic.jpg";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://pin.it/4owErUECI",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://pin.it/4owErUECI",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://pin.it/4owErUECI",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://pin.it/4owErUECI",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://pin.it/4owErUECI",
  },
];

const HeroScetion = () => {
  return (
    <section className=" w-[100vw] max-w-[100vw] overflow-x-hidden  bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#533c7b] via-[#181a45] to-[#171A3F]">
      <NavBar />
      <div className="w-[90%] mt-[80px] overflow-hidden max-w-[90%] mx-auto">
        <div className="flex px-[200px] flex-col justify-center items-center ">
          <motion.div 
 initial={{ opacity:0, y: 30 }}
 animate={{ opacity:1,y: 0 }}
 transition={{duration:0.3}}
          className="text-[90px] font-semibold border-spacing-x-narrow narrow  text-white  leading-[90px] text-center ">
            Find, Contact&Close{" "}
            
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1275cb] via-[#a1f3ff] to-[#2975a7]">
              Your Ideal Clients
            </span>
          </motion.div>
          <motion.div
          initial={{ opacity:0, y: 30 }}
          animate={{ opacity:1,y: 0 }}
          transition={{duration:0.3 ,delay:0.2}}
           className="text-white text-[20px] px-[120px] font-semibold mt-[30px] text-center ">
            Instantly helps you ifnd warm leads, scale email compaigns, reach
            primary inboxes, engage smarter and win more with AI
          </motion.div>

          <motion.button
          initial={{ opacity:0, y: 30 }}
          animate={{ opacity:1,y: 0 }}
          transition={{duration:0.3,delay:0.4}} className="p-3 border-2 animate-border  font-bold text-white rounded-full px-10 text-[20px] mt-[30px]">
            START FOR FREE
          </motion.button>

          <motion.div   initial={{ opacity:0, y: 30 }}
          animate={{ opacity:1,y: 0 }}
          transition={{duration:0.3,delay:0.6}} className="flex gap-12 mt-[30px] text-white font-semibold text-[18px]">
            <div className="flex gap-2 items-center">
              <span className="text-blue-300 bg-blu">
                <CircleCheckBig />
              </span>
              <h1>No credit card required</h1>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-blue-300">
                <CircleCheckBig />
              </span>
              <h1>Free leads included</h1>
            </div>
          </motion.div>
        </div>

        {/* photos */}
        <div className="flex justify-center gap-10 mb-[100px] mt-[80px]">
          <Image
            width={400}
            className="rounded-lg object-cover"
            height={400}
            src={download}
            alt="business"
          />
          <Image
            width={400}
            className="rounded-lg object-cover"
            height={400}
            src={Sales}
            alt="business"
          />
          <Image
            width={400}
            className="rounded-lg object-cover"
            height={400}
            src={Business}
            alt="business"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroScetion;
