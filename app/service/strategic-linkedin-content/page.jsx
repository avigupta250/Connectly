import Faq from "@/src/components/Common/Faq";
import { features } from "@/src/Constant";
import { Magnet, Plus } from "lucide-react";
import React from "react";

const pricingCard = [
  {
    typr: "Starter",
    desc: "Everything you need to get started",
    price: "$19",
    features: [
      "Custom Domains",
      "Edge content delivery",
      "Advanced analytics",
      "Quarterly workshops",
      "Single sign-on (SSO)",
      "Priority phone support",
    ],
  },
  {
    typr: "Starter",
    desc: "Everything you need to get started",
    price: "$19",
    features: [
      "Custom Domains",
      "Edge content delivery",
      "Advanced analytics",
      "Quarterly workshops",
      "Single sign-on (SSO)",
      "Priority phone support",
    ],
  },
  {
    typr: "Starter",
    desc: "Everything you need to get started",
    price: "$19",
    features: [
      "Custom Domains",
      "Edge content delivery",
      "Advanced analytics",
      "Quarterly workshops",
      "Single sign-on (SSO)",
      "Priority phone support",
    ],
  },
];

const Page = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="flex p-10 w-[50%] flex-col gap-6 text-center">
          <h1 className="text-[50px] md:leading-[60px] font-bold text-blue-600">
          Strategic LinkedIn Content That Engages & Converts
        </h1>
          <h2 className="text-[20px] md:leading-[25px]">
          Stand out with compelling LinkedIn content tailored to your audience. We craft data-driven posts that boost engagement, authority, and lead generation—100% managed for you. 
          </h2>

          <div>
            <button className="bg-orange-500 md:mt-[30px] p-3 px-6 text-white font-bold rounded-full ">
              FREE CONSULTAION
            </button>
          </div>
        </div>
      </div>

      {/* card */}

      <div className="flex justify-center gap-10 mb-[50px] flex-wrap bg-b;">
        {pricingCard.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 text-[18px] border-[8px] border-opacity-10  rounded-3xl p-14 "
          >
            <h1 className="text-[20px] font-bold text-blue-600">{card.typr}</h1>
            <h2>{card.desc}</h2>
            <div className="flex  items-center  gap-4">
              <span className="text-[60px] font-bold ">{card.price}</span>
              <span>
                USD <br /> per month
              </span>
            </div>

            <div>
              <button className="bg-blue-600 p-3 rounded-lg font-bold text-[16px] text-white">
                Start a free trial
              </button>
            </div>

            <h1>Start selling with :</h1>
            <div className="">
              {card.features.map((item, index) => (
                <div className="flex gap-5 mt-[10px] items-center">
                  <span>
                    <Plus />
                  </span>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* metrics section */}
      <div className="bg-blue-700 mx-[100px]  rounded-3xl p-10 text-center">
        <h1 className="text-[50px] md:leading-[50px] text-white font-bold">
          Thousands of our clients see success <br /> marketing on LinkedIn to
          drive revenue
        </h1>

        <div className="flex justify-center text-white mt-10 gap-[200px]">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-[60px] font-bold ">150K</h1>
            <h2>Leads Generated</h2>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-[60px] font-bold ">150K</h1>
            <h2>Leads Generated</h2>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-[60px] font-bold ">150K</h1>
            <h2>Leads Generated</h2>
          </div>
        </div>

        <h1 className="text-[30px] font-bold text-white p-4 mt-12">Predictably scale growth on LinkedIn</h1>
        <div className="flex gap-6">
          <div className="flex flex-col gap-5 justify-center items-center bg-white rounded-lg p-10 ">
            <span className="bg-blue-800 text-white rounded-md p-1"><Magnet/></span>
            <h1 className="text-[20px] text-blue-800 font-bold ">Exact targeting Filters</h1>
            <p className="text-gray-500 text-[14px] ">Attract specific decision makers with extremely precise LinkedIn targetting</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center bg-white rounded-lg p-10 ">
            <span className="bg-blue-800 text-white rounded-md p-1"><Magnet/></span>
            <h1 className="text-[20px] text-blue-800 font-bold ">Exact targeting Filters</h1>
            <p className="text-gray-500 text-[14px] ">Attract specific decision makers with extremely precise LinkedIn targetting</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center bg-white rounded-lg p-10 ">
            <span className="bg-blue-800 text-white rounded-md p-1"><Magnet/></span>
            <h1 className="text-[20px] text-blue-800 font-bold ">Exact targeting Filters</h1>
            <p className="text-gray-500 text-[14px] ">Attract specific decision makers with extremely precise LinkedIn targetting</p>
          </div>
          
        </div>
      </div>
      <Faq/>
    </section>
  );
};

export default Page;
