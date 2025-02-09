"use client";

import { ArrowBigDownIcon } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "What kinds of clients do you typically work with",
    answer: "Answer What kinds of clients do you typically work with",
  },
  {
    question: "What kinds of clients do you typically work with",
    answer: "What kinds of clients do you typically work with",
  },
  {
    question: "What kinds of clients do you typically work with",
    answer: "What kinds of clients do you typically work with",
  },
  {
    question: "What kinds of clients do you typically work with",
    answer: "What kinds of clients do you typically work with",
  },
  {
    question: "What kinds of clients do you typically work with",
    answer: "What kinds of clients do you typically work with",
  },
];
const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(null);
  return (
    <section className=" bg-black text-white">
      <div className="w-[90%] p-10 mx-auto flex justify-center ">
        <div>
          <div className="text-center">
            <h1>FAQS</h1>
            <h2>Wonder if we're right for you?</h2>
          </div>

          <div className=" mt-[50px]">
            {faqs.map((faqs, index) => (
              <div onClick={() => setShowAnswer(prev=>prev===null?index:null)} key={index}
               className=" border-t-[1px] p-2">
                <div className="flex justify-between gap-[100px] ">
                  <h1>{faqs.question}</h1>
                  <span>
                    <ArrowBigDownIcon />
                  </span>
                </div>

                {showAnswer === index && (
                  <div>
                    <p>{faqs.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
