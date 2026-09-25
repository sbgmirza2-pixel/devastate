"use client";

import React, { useState } from "react";
import { defaultHomeContent } from "@/lib/homeDefaults";

export default function FAQ({ content }) {
  const [openIndex, setOpenIndex] = useState(null);
  const data = content || defaultHomeContent.faq;
  const faqs = data.items || defaultHomeContent.faq.items;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 uppercase tracking-wide text-center">
          {data.heading || "Frequently Asked Questions"}
        </h2>

        {/* FAQ List */}
        <div className="w-full space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full min-w-0 px-4 sm:px-5 py-4 flex items-center justify-between gap-3 text-left focus:outline-none cursor-pointer"
                >
                  <div className="min-w-0 flex-1 flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>

                    <span className="text-sm sm:text-lg font-bold text-black leading-snug break-words">
                      {item.question}
                    </span>
                  </div>

                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-black transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-sm sm:text-base text-black/85 leading-relaxed border-t border-black/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}