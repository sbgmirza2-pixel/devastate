export default function ProsAndCons() {
  const advantages = [
    "Anime-inspired 2D visuals",
    "Character-focused gameplay",
    "Mystery atmosphere",
    "Interactive dialogue",
    "Item-based mechanics",
    "Daily activities",
    "Coin rewards",
    "Outfit customization",
    "Simple touch controls",
    "Visual-novel-style presentation",
    "Relatively small APK",
    "Straightforward simulation mechanics"
  ];

  const limitations = [
    "Manual installation may be necessary.",
    "Compatibility can differ between devices.",
    "APK information may vary across sources.",
    "Some features may require internet access.",
    "Emulator display issues can occur.",
    "Modified files can create security concerns.",
    "Updates may need to be installed manually."
  ];

  const tips = [
    "Keep enough free storage.",
    "Use Android 6.0 or newer.",
    "Download the correct version.",
    "Read the dialogue instead of skipping everything.",
    "Complete daily tasks.",
    "Check your rewards.",
    "Experiment with available items.",
    "Explore customization options.",
    "Pay attention to character responses.",
    "Avoid modified APK builds."
  ];

  return (
    <>
      {/* Pros and Cons Section */}
      <div id="pros-and-cons" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 uppercase tracking-wide">
              Pros and Cons
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
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
      </div>

      {/* Tips for a Smoother Experience Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              Tips for a Smoother Experience
            </h2>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              A few simple things can make gameplay easier:
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
      </div>
    </>
  );
}