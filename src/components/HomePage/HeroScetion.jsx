"use client";
import React from "react";
import NavBar from "../NavBar";
import { CircleCheckBig ,ChartNoAxesCombined,Trophy, Medal} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import download from "../../../public/download.jpg";
import Business from "../../../public/Businessman.jpg";
import Sales from "../../../public/Sales-analytic.jpg";
import Carousel from "../Common/Carousel";
import { FaSackDollar } from "react-icons/fa6";


{/* <ChartNoAxesCombined /> */}

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
    <section className=" max-w-[100vw]  overflow-x-hidden  ">
      {/* bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#533c7b] via-[#181a45] to-[#171A3F] */}
      <NavBar />
      <div className="w-[90%] mt-[100px] mx-auto flex items-center justify-between ">
        <div className="w-[60%] text-[20px] text-gray-800">
          <p className="">The B2B SaaS Marketing Agency</p>
          <h1 className="md:text-[60px] text-black font-bold md:leading-[60px]">
            Transform Your LinkedIn Presence Generate<span className="text-blue-700"> High-Quality Leads</span> That
            Convert
          </h1>
          <p className="mt-[30px] text-[17px] ">
            Expert LinkedIn Marketing Solutions that deliver measurable ROI. We
            help businesses like yours attract, engage, and convert premium
            clients through data-driven strategies.
          </p>

          <p className=" mt-6 text-[20px] font-semibold ">
            Claim Your Free LinkedIn Campaign Audit Worth $997
          </p>
          <div className="flex left-[50px] ">
          <button className="bg-blue-600 mx-[80px] text-white flex justify-center text-center px-[60px] p-3 font-bold  rounded-full mt-[20px]">
            Book Your Audit Now
          </button>
          </div>
         

          <div>

          </div>
        </div>

        <div className="">


          <div className="w-[500px] h-[300px] flex justify-center items-center rounded-full object-cover">
            <img  className="rounded-full w-[400px] h-[400px] object-cover"  src="https://i.pinimg.com/736x/58/57/ca/5857ca72e7b25c77bce40ae57139730c.jpg" alt="image"/>
          </div>
          
        </div>
      </div>
     
       <div className="mt-[50px] ">
        <div className="text-center text-[30px] text-gray-700">
          <h1>Trusted by 1200+ companies around the world</h1>
        </div>
       <Carousel />
       </div>
     
    </section>
  );
};

export default HeroScetion;
