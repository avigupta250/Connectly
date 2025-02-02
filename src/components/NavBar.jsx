"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaUsers } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { IoMailOpen } from "react-icons/io5";
const navItems = [
  {
    title: "Services",
    links: [
      { name: "LinkedIn Paid Ads", href: "#", icon:<FaUsers/> },
      { name: "LinkedIn Leads Generation", href: "#", icon:<BsDatabaseFillCheck/> },
      { name: "Strategic LinkedIn Content", href: "#", icon:<MdMarkEmailRead/> },
      { name: "White-Label Lead Generation", href: "#", icon:<HiMiniUsers/> },
      { name: "Cold Email Lead Generation", href: "#", icon:<TbWorld/>},
      { name: "Advanced Lead Gen Masterclass", href: "#", icon:<MdMail/>},
      
    ],
  },
 
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#",  icon:<FaUsers/>  },
      { name: "Revies", href: "#",  icon:<FaUsers/>  },
      { name: "Affiliate", href: "#", icon:<FaUsers/>  },
      { name: "Experts", href: "#", icon:<FaUsers/>  },
      { name: "Instantly Accelerator", href: "#", icon:<FaUsers/> },
      { name: "Facebook Group", href: "#",  icon:<FaUsers/>  },
      { name: "Help Desk", href: "#",  icon:<FaUsers/>  },
    ],
  },
  {
    title: "Pricing",
    links: [],
  },
];

const colors = [
  "text-red-700",
  "text-blue-700",
  "text-green-700",
  "text-yellow-700",
  "text-purple-700",
  "text-pink-700",
];
const NavBar = () => {
  return (
    <nav className="w-[100vw]   ">
      <div className="flex w-[90%] relative   p-4 px-0 font-bold text-white  mx-auto  justify-between  items-center  ">
        {/* Brand Name */}
        <div className="text-[30px] font-bold text-white ">Connectly</div>

        {/* Nav Items */}
        <div className="text-[20px] ">
          <NavButtons />
        </div>

        {/* Request button */}
        <button className="border text-[20px] rounded-full px-2 py-1">
          Request Demo
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

function NavButtons() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className=" flex w-full gap-5 ">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="transition-all duration-200"
          onMouseEnter={() => setActiveDropdown(index)}
          
          
         
        >
          <div className="flex gap-1  justify-center items-center">
            <button className="hover:text-purple-400 ">{item.title}</button>
            <span>
              {activeDropdown === index ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          {item.links.length > 0 && activeDropdown === index && (
            <motion.div
            onMouseLeave={() => setActiveDropdown(null)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-ful  mt-2   bg-white shadow-lg rounded-md  "
            >
              <motion.div className="grid  grid-cols-2 px-4  gap-x-6">
                {item.links.map((link, linkIndex) => (
                  <div key={linkIndex} className=" flex  py-4 px-4 flex-col    justify-center ">
                    
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center gap-2   px-2  text-[18px] text-gray-700 hover:text-gray-400"
                    >
                      <span className={` text-[25px] ${colors[Math.floor(Math.random() * colors.length)]}`}>{link.icon}</span>
                      <span className="borde "> {link.name}</span>
                    </Link>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
