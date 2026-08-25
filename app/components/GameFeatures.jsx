import { defaultHomeContent } from '@/lib/homeDefaults';

export default function MainFeatures({ content }) {
  const data = content || defaultHomeContent.features;
  const features = data.items || defaultHomeContent.features.items;

  return (
    <section id="main-features" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">

          {/* Section Heading */}
          <div className="mb-10 w-full border-b border-black/10 pb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-wide">
              {data.heading || "Main Features of Devastate APK"}
            </h2>
            <p className="text-black/70 text-sm sm:text-base mt-2">
              {data.subtitle || "Discover what makes this simulation game a unique experience on Android devices."}
            </p>
          </div>

          {/* Features Grid Layout */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    {feature.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  
                  <div className="space-y-3 text-black/85 text-sm sm:text-base leading-relaxed font-normal">
                    {(feature.paragraphs || []).map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}