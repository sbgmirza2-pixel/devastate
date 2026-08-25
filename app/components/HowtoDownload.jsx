import { defaultHomeContent } from '@/lib/homeDefaults';

export default function HowToDownload({ content }) {
  const data = content || defaultHomeContent.download;
  const downloadSteps = data.steps || defaultHomeContent.download.steps;

  return (
    <section id="how-to-download" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "How to Download Devastate APK"}
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            {data.intro || "You can download the APK by following these basic steps:"}
          </p>

          {/* Steps List */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {downloadSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3 py-1">
                <span className="font-bold text-black flex-shrink-0">{index + 1}.</span>
                <span className="font-normal text-black/90 text-sm sm:text-base">{step}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}