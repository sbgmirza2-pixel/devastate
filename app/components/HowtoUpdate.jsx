import { defaultHomeContent } from '@/lib/homeDefaults';

export default function HowToUpdate({ content }) {
  const data = content || defaultHomeContent.update;
  const steps = data.steps || defaultHomeContent.update.steps;

  return (
    <>
      {/* How to Update Section */}
      <section id="how-to-update" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              {data.heading || "How to Update Devastate APK"}
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              {data.intro || "Keeping Devastate updated can help you get the latest changes and avoid problems with older files. If you are installing a newer APK manually, make sure you use the correct version and keep your existing game data safe."}
            </p>

            {/* Sub-sections */}
            <div className="w-full space-y-8">
              {steps.map((item, index) => (
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

      {/* Internet Connection Section */}
      <section className="w-full py-12 sm:py-16 bg-black/[0.06] text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              {data.internetHeading || "Does Devastate Need an Internet Connection?"}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
              {(data.internetParagraphs || [
                "Internet requirements can depend on the version and the feature being used. Some gameplay may work without a constant connection, while updates, advertisements, downloads, or external services may require internet access.",
                "So, don't assume that every part of the game works offline. Test the version you install to see which features remain available without a connection."
              ]).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}