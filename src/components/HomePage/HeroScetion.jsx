"use client";
import React from "react";
import NavBar from "../NavBar";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import download from "../../../public/download.jpg";
import Business from "../../../public/Businessman.jpg";
import Sales from "../../../public/Sales-analytic.jpg";
import Carousel from "../Common/Carousel";

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
    <section className=" max-w-[100vw] min-h-screen overflow-x-hidden  bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#533c7b] via-[#181a45] to-[#171A3F]">
      <NavBar />
      <div className="w-[90%] mt-[100px] text-white mx-auto flex  justify-between ">
        <div className="w-1/2">
          <p className="">The B2B SaaS Marketing Agency</p>
          <h1 className="text-[50px] font-bold leading-[50px]">
            Transform Your LinkedIn Presence Generate High-Quality Leads That
            Convert
          </h1>
          <p className="mt-[20px]">
            Expert LinkedIn Marketing Solutions that deliver measurable ROI. We
            help businesses like yours attract, engage, and convert premium
            clients through data-driven strategies.
          </p>

          <p className=" mt-10 ">
            Claim Your Free LinkedIn Campaign Audit Worth $997
          </p>
          <button className="bg-[#7759ab] flex justify-center px-[40px] p-2 rounded-full mt-[20px]">
            Book Your Audit Now
          </button>
        </div>

        <div className="flex flex-col gap-5 mt-8 px-[100px] text-black">
          <div className="flex bg-white gap-3 p-5  rounded-md ">
            <span>LOGO</span>
            <p>Data-Driven ROI Optimisation</p>
          </div>
          <div className="flex bg-white gap-3 p-5  rounded-md ">
            <span>LOGO</span>
            <p>Data-Driven ROI Optimisation</p>
          </div>
          <div className="flex bg-white gap-3 p-5  rounded-md ">
            <span>LOGO</span>
            <p>Data-Driven ROI Optimisation</p>
          </div>
          <div className="flex bg-white gap-3 p-5  rounded-md ">
            <span>LOGO</span>
            <p>Data-Driven ROI Optimisation</p>
          </div>
        </div>
      </div>
     
       <div className="mt-[50px]">
       <Carousel />
       </div>
     
    </section>
  );
};

export default HeroScetion;
