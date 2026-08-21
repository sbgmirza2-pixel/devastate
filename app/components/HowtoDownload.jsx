export default function HowToDownload() {
  const downloadSteps = [
    "Visit a trusted download source.",
    "Make sure the page matches the correct game.",
    "Check the listed version.",
    "Compare the file size.",
    "Confirm your Android version is supported.",
    "Start the download.",
    "Wait until the file is completely saved.",
    "Check the file before installing it.",
    "Avoid clicking random download buttons that appear through pop-ups."
  ];

  return (
    // w-screen and background preserved with responsive side padding inner wrapper
    <div id="how-to-download" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            How to Download Devastate APK
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            You can download the APK by following these basic steps:
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
    </div>
  );
}