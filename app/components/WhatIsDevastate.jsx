import { defaultHomeContent } from '@/lib/homeDefaults';

export default function WhatIsDevastate({ content }) {
  const data = content || defaultHomeContent.whatIs;

  return (
    <section id="what-is-devastate" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "What Is Devastate?"}
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            {(data.paragraphs || []).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Simple List */}
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              {data.highlightsHeading || "It may be a good match if you prefer:"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {(data.highlights || []).map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}