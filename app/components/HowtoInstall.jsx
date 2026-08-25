import { defaultHomeContent } from '@/lib/homeDefaults';

export default function HowToInstallAndSafety({ content }) {
  const data = content || defaultHomeContent.install;
  const installationSteps = data.steps || defaultHomeContent.install.steps;
  const safetyTips = data.safetyTips || defaultHomeContent.install.safetyTips;

  return (
    <>
      {/* How to Install Section */}
      <section id="how-to-install" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              {data.heading || "How to Install Devastate APK on Android"}
            </h2>
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              {data.intro || "Once the APK is on your device, the installation process is straightforward."}
            </p>

            <div className="w-full space-y-8">
              {installationSteps.map((step, index) => (
                <div key={index} className="w-full">
                  <h3 className="text-lg sm:text-xl font-black text-black mb-2 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Is Devastate APK Safe Section */}
      <section id="is-safe" className="w-full py-12 sm:py-16 bg-black/[0.06] text-left scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              {data.safeHeading || "Is Devastate APK Safe?"}
            </h2>
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-6">
              {data.safeIntro || "The safety of any manually installed APK depends on the source and the condition of the file. A trustworthy download is important, especially when the game is being installed outside an official store."}
            </p>
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              {data.saferTitle || "For a safer installation:"}
            </h3>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pl-1 mb-8">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{tip}</span>
                </div>
              ))}
            </div>

            {data.safeWarning && (
              <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                {data.safeWarning}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}