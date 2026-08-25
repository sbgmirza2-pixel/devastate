import { defaultHomeContent } from '@/lib/homeDefaults';

export default function ProsAndCons({ content }) {
  const data = content || defaultHomeContent.prosCons;
  const advantages = data.advantages || defaultHomeContent.prosCons.advantages;
  const limitations = data.limitations || defaultHomeContent.prosCons.limitations;
  const tips = data.tips || defaultHomeContent.prosCons.tips;

  return (
    <>
      {/* Pros and Cons Section */}
      <section id="pros-and-cons" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 uppercase tracking-wide">
              {data.heading || "Pros and Cons"}
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Advantages */}
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
                  Advantages
                </h3>
                <div className="space-y-2">
                  {advantages.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 py-1">
                      <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                      <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Limitations */}
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
                  Limitations
                </h3>
                <div className="space-y-2">
                  {limitations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 py-1">
                      <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                      <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for a Smoother Experience Section */}
      <section className="w-full py-12 sm:py-16 bg-black/[0.03] text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              {data.tipsHeading || "Tips for a Smoother Experience"}
            </h2>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              {data.tipsIntro || "A few simple things can make gameplay easier:"}
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="font-bold text-black flex-shrink-0">{index + 1}.</span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}