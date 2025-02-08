"use client";
import React from "react";
import { features, features2, revenue } from "@/src/Constant";
import Image from "next/image";
import { motion } from "motion/react";
import Reviews from "../Common/Reviews";

const Features = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="w-[90%] flex flex-col gap-5 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } gap-5 p-10 rounded-lg bg-white justify-between`}
          >
            {/* Left Section */}
            <motion.div className="w-1/2 flex">
              <div className="flex flex-col font-serif mt-1 gap-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="md:text-[60px] md:leading-[60px] font-serif font-semibold"
                >
                  {feature.title1}{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-700">
                    {feature.title2}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="md:text-[20px] px-3 mt-3 md:leading-[25px] text-gray-700"
                >
                  {feature.desc}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-blue-700 text-white text-[25px]  font-serif font-bold px-8 ml-3 py-2 rounded-full mt-5 self-start relative overflow-hidden
  shadow-[0_0_15px_4px_rgba(114,88,158,0.5)] hover:shadow-[0_0_25px_6px_rgba(114,88,158,0.8)] transition-shadow duration-300 ease-in-out"
                >
                  BOOK A DEMO
                </motion.button>
              </div>
            </motion.div>

            {/* Right Section */}
            <div className="w-1/2">
              <motion.img
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                width={400}
                height={400}
                src={feature.image}
                alt={`${feature.title1} ${feature.title2}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* features2 */}

      <div className="w-  mt-[60px] bg-blue400 ">
        <div className="w-[90%] px-[100px  mx-auto p-20 gap-10 flex flex-wrap justify-center">
        {features2.map((feature, index) => (
          <div key={index} className="bg-white flex w-[30%] flex-col gap-5  p-6">
            <div className=" ">
              <img src={feature.image} alt="image" />
            </div>
            <div className="bg-blue-600 w-fit p-2 text-white font-bold rounded-lg px-4">PHASE 1</div>

            <h1 className="font-semibold text-[30px] md:leading-[30px]">{feature.title1}</h1>
            <p className="text-[20px] md:leading-[25px]">{feature.desc}</p>
          </div>
        ))}
        </div>
       
      </div>

{/* reviews */}

     <Reviews/>
      {/* Respond to lead section */}
      <div className="w-[90%] h-[800px] mt-[100px] rounded-t-3xl mx-auto bg-black bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500 via-[#1f2589] to-[#171A3F flex flex-col">
        <div className="flex flex-col mt-[40px] items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-center md:leading-[50px] font-serif font-bold md:text-[40px] "
          >
            Respond to Leads ans Close Deals <br /> with{" "}
            <span className="">
              Unibox
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-serif w-[40%] text-center text-white md:leading-[25px] text-[20px] font-semibold"
          >
            Manage conversations across inboxes in Unibox. AI Custom Reply
            Labels automatically categorize responses for you, so you can focus
            on moving your outbound pipeline forward, from Interested to
            Closed-Won.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-2 bg-whit text-white text-[25px]  font-serif font-bold px-8 ml-3 py-2 rounded-full mt-5 relative overflow-hidden
  shadow-[0_0_15px_4px_rgba(114,88,158,0.5)] hover:shadow-[0_0_25px_6px_rgba(114,88,158,0.8)] transition-shadow duration-300 ease-in-out"
          >
            BOOK A DEMO
          </motion.button>
        </div>

        {/* image */}
        <div className="relative mt-10 w-full h-full overflow-hidden">
          <motion.img
            initial={{ opacity: 0.1, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute  top-0 w-full px-[150px] object-cover"
            src="https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/638a6dde57859f7455bbc850_mmf.png"
            alt="Unibox"
          />
        </div>
      </div>

      {/* Revenue section */}
      <div className="w-[90%] mt-[100px] flex flex-col gap-5 mx-auto">
        {revenue.map((feature, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } gap-5 p-10 rounded-lg bg-white justify-between`}
          >
            {/* Left Section */}
            <motion.div className="w-1/2 flex">
              <div className="flex flex-col font-serif mt-1 gap-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="md:text-[60px] md:leading-[60px] font-serif font-semibold"
                >
                  {feature.title1}{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-700">
                    {feature.title2}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="md:text-[20px] px-3 mt-3 md:leading-[25px] text-gray-700"
                >
                  {feature.desc}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-blue-700 text-white text-[25px]  font-serif font-bold px-8 ml-3 py-2 rounded-full mt-5 self-start relative overflow-hidden
  shadow-[0_0_15px_4px_rgba(114,88,158,0.5)] hover:shadow-[0_0_25px_6px_rgba(114,88,158,0.8)] transition-shadow duration-300 ease-in-out"
                >
                  BOOK A DEMO
                </motion.button>
              </div>
            </motion.div>

            {/* Right Section */}
            <div className="w-1/2">
              <motion.img
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                width={400}
                height={400}
                src={feature.image}
                alt={`${feature.title1} ${feature.title2}`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Community */}
      <div className="w-[90%]  mt-[100px] h-[500px] rounded-3xl bg-blue-70 bg-black flex flex-col md:flex-row gap-5 mx-auto">
        <div className="md:w-3/4 p-10 mt-10  text-white">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:text-[50px] md:leading-[60px]  font-serif font-semibold"
          >
            Learn From The Best in
            <br />
            <span className="">
              Our Private Community
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:text-[20px] px-3 mt-3 md:leading-[25px] text-gray-400"
          >
            Get access to our Private Facebook Community where you can learn
            from other similar entrepreneurs. See whats working and not working
            for them. Ask questions and get answers from our experts.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-700 text-white md:text-[25px] md:mt-[100px]  font-serif font-bold px-8 ml-3 py-2 rounded-full mt-5 self-start relative overflow-hidden
  shadow-[0_0_15px_4px_rgba(114,88,158,0.5)] hover:shadow-[0_0_25px_6px_rgba(114,88,158,0.8)] transition-shadow duration-300 ease-in-out"
          >
            START FOR FREE
          </motion.button>
        </div>
        <div className="md:w-1/2 hidden md:block justify-end relative overflow-hidden">
          <div className="absolute h-[200px] top-[100px] bg-white md:top-[100px] md:right-[50px] w-[400px]">
            <img src="https://i.pinimg.com/736x/db/4d/f1/db4df1a792626bd1d60a0772038365ef.jpg" />
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute font-serif font-bold text-[40px] top-[100px] left-[92px] text-[#4b1787]"
            >
              Connectly
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
