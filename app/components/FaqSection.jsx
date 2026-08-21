"use client";
import React, { useState } from 'react';

export default function FAQ() {
  // Track karega ke kaunsa index open hai (agar null hai toh sab band hain)
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Devastate?",
      answer: "Devastate is an anime-style interactive simulation game for Android featuring characters, conversations, and tasks."
    },
    {
      question: "What is Devastate APK?",
      answer: "Devastate APK is the Android installation package for the Devastate simulation game featuring 2D visuals and character interactions."
    },
    {
      question: "What is the package name of Devastate?",
      answer: "The listed package name is com.devastate.android."
    },
    {
      question: "Who developed Devastate?",
      answer: "It is developed by Devastate DEV."
    },
    {
      question: "What type of game is Devastate?",
      answer: "It is an interactive simulation game with anime-style visuals, dialogue, and visual-novel elements."
    },
    {
      question: "Does Devastate have 2D visuals?",
      answer: "Yes. Its presentation uses anime-inspired 2D characters and scenes."
    },
    {
      question: "Does Devastate have dialogue choices?",
      answer: "Dialogue and character interaction are key parts of the experience, varying by version."
    },
    {
      question: "Does Devastate have item-based gameplay?",
      answer: "Yes, items add another layer beyond dialogue, becoming part of tasks and interactions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq"className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 pl-12 pr-6 sm:pr-12 text-left bg-black/[0.04]">
      <div className="w-full flex flex-col items-start max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-2xl font-black text-black mb-8 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="w-full space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
              >
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                    <span className="text-base sm:text-lg font-bold text-black">
                      {item.question}
                    </span>
                  </div>
                  {/* Arrow Icon */}
                  <svg
                    className={`w-5 h-5 text-black transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer Content (Collapsible) */}
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-sm sm:text-base text-black/85 leading-relaxed font-normal border-t border-black/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}