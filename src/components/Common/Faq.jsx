"use client";

import React, { useState } from "react";
import { ArrowBigDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What kinds of clients do you typically work with?",
    answer:
      "We work with a diverse range of clients, from startups to enterprise-level organizations.",
  },
  {
    question: "How do you manage project timelines?",
    answer:
      "We set clear milestones and maintain open communication with our clients to ensure projects stay on track.",
  },
  {
    question: "What sets your service apart?",
    answer:
      "Our focus on quality and a personalized approach is what truly sets us apart in the industry.",
  },
  {
    question: "Can you work with remote teams?",
    answer:
      "Absolutely! We have extensive experience collaborating with remote teams across the globe.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and tailored to the needs of each project.",
  },
];

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setShowAnswer((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black mt-[100px] text-white">
      {/* Outer container with a fixed max-width */}
      <div className="w-full max-w-4xl p-10 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">FAQS</h1>
          <h2 className="mt-2 text-lg">Wonder if we're right for you?</h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleAnswer(index)}
              className="border-t border-gray-400 p-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">{faq.question}</h1>
                <span>
                  <ArrowBigDownIcon
                    className={`transition-transform duration-300 ${
                      showAnswer === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
              <AnimatePresence >
                {showAnswer === index && (
                  <motion.div
                  
                    style={{ overflow: "hidden" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mt-4 text-lg text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
