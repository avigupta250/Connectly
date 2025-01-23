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
    title: "Products",
    links: [
      { name: "Outreach", href: "#", icon:<FaUsers/> },
      { name: "Lead Database", href: "#", icon:<BsDatabaseFillCheck/> },
      { name: "Deliverablity", href: "#", icon:<MdMarkEmailRead/> },
      { name: "SRM", href: "#", icon:<HiMiniUsers/> },
      { name: "Website Visitors", href: "#", icon:<TbWorld/>},
      { name: "Email Accounts", href: "#", icon:<MdMail/>},
      { name: "Verificatio", href: "#", icon:<SiAuth0/> },
      { name: "Inbox Placement", href: "#", icon:<IoMailOpen/> },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { name: "Agencies", href: "#",  icon:<FaUsers/>  },
      { name: "Founders", href: "#", icon:<FaUsers/>  },
      { name: "Marketing", href: "#", icon:<FaUsers/>  },
      { name: "Freelancers", href: "#",  icon:<FaUsers/> },
      { name: "Sales", href: "#", icon:<FaUsers/>  },
      { name: "Sales Development", href: "#",  icon:<FaUsers/>  },
      { name: "Enterprise", href: "#",  icon:<FaUsers/>  },
      { name: "Vip Service", href: "#",  icon:<FaUsers/>  },
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
              className="absolute top-full left-0 mt-2 grid grid-cols-2 w-full bg-white shadow-lg rounded-md  "
            >
              <motion.div className="grid  grid-cols-2 px-4 mb-10 gap-x-6">
                {item.links.map((link, linkIndex) => (
                  <div key={linkIndex} className=" flex  py-4 px-4 flex-col border-b  justify-center ">
                    
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

              <div className="bg-gray-100 rounded-lg flex  justify-center items-cente px-5">
                <div>
                  <div className="text-gray-800 text-[40px] mt-4 font-semibold leading-[40px]">Find & Close Your Ideal Clients</div>
                  <p className="text-gray-600 text-[20px] font-serif font-normal mt-6 leading-[20px]">
                    Instantly turns lead into clinets with Automated Outreach,
                    Deliverablity Network, Lead Databse & CR
                  </p>
                  <button className="bg-blue-500 mt-4 rounded-full py-2 px-4">BOOOK A DEMO</button>
                </div>
                

                <div>
                {/* <Image width={400} height={400} src={"https://lottie.host/embed/ed00fe6a-ca65-4ab9-8ead-5a421d8a9fb3/qB9ZKdHBjl.lottie"}></Image> */}
                <iframe width={250} height={250} src="https://lottie.host/embed/ed00fe6a-ca65-4ab9-8ead-5a421d8a9fb3/qB9ZKdHBjl.lottie"></iframe>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
