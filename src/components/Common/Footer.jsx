"use client";

import React from "react";

const Footer = () => {
  return (
    <section className="bg-black font-sans text-white overflow-hidden">
      <div className="w-[90%] py-[100px] mx-auto flex flex-col gap-10 md:flex-row justify-between">
        {/* first div */}
        <div>
          <h1 className="text-[40px]">Connectly</h1>
          <p>-Sales Engagement & Lead Intelligence</p>
        </div>

        {/* 2nd div */}
        <div>
          <h1 className="text-[20px] mb-3 font-semibold">Quick links</h1>
          <ul className="text-gray-300 space-y-2">
            <li>Warmup</li>
            <li>Pricing</li>
            <li>CRM</li>
            <li>About</li>
            <li>Wall of Love</li>
            <li>Experts</li>
            <li>Affliate</li>
          </ul>
        </div>

        {/* 3rd div */}
        <div>
          <h1 className="text-[20px] mb-3 font-semibold">Support</h1>
          <ul className="text-gray-300 space-y-2">
            <li>Help Desk</li>
            <li>Roadmap</li>
            <li>Facebook Group</li>
          </ul>
        </div>

        {/* 4th div */}
        <div>
          <h1 className="text-[20px] mb-3 font-semibold">Company</h1>
          <ul className="text-gray-300 space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Dont Sell My Info</li>
            <li>Privacy Center</li>
            <li>Cookie Declaration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
