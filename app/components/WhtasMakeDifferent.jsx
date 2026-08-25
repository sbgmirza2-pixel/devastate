import { defaultHomeContent } from '@/lib/homeDefaults';

export default function WhatMakesDifferent({ content }) {
  const data = content || defaultHomeContent.different;
  const features = data.items || defaultHomeContent.different.items;

  return (
    <section id="what-makes-different" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "What Makes Devastate Different?"}
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            {data.intro || "Devastate stands out with its character-focused gameplay, interactive conversations, and slower pace, giving you more time to explore and enjoy the experience."}
          </p>

          {/* Sub-sections */}
          <div className="w-full space-y-8">
            {features.map((item, index) => (
              <div key={index} className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}