import { defaultHomeContent } from '@/lib/homeDefaults';

export default function HowGameplayWorks({ content }) {
  const data = content || defaultHomeContent.gameplay;
  const startingRoute = data.routeSteps || defaultHomeContent.gameplay.routeSteps;

  return (
    <section id="gameplay-works" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "How the Gameplay Works"}
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            {(data.paragraphs || []).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Starting Route List */}
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              {data.routeHeading || "A simple starting route is:"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {startingRoute.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="font-bold text-black flex-shrink-0">{index + 1}.</span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {data.note && (
              <p className="mt-8 text-sm sm:text-base text-black/70 italic">
                {data.note}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}