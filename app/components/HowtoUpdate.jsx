export default function HowToUpdate() {
  const steps = [
    {
      title: "Updating From an Older Version",
      text: "Download the newer Devastate APK from a trusted source and install it over the current version. If Android does not allow the update, check that the package name matches and that the new APK is compatible with your installed version."
    },
    {
      title: "Backup Before Updating",
      text: "Before installing an update, it is a good idea to back up your game data if possible. This gives you something to restore if the update causes an installation problem or removes your existing progress."
    }
  ];

  return (
    <>
      {/* How to Update Section */}
      <div id="how-to-update"className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              How to Update Devastate APK
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              Keeping Devastate updated can help you get the latest changes and avoid problems with older files. If you are installing a newer APK manually, make sure you use the correct version and keep your existing game data safe.
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
      </div>

      {/* Internet Connection Section */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              Does Devastate Need an Internet Connection?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
              <p>
                Internet requirements can depend on the version and the feature being used. Some gameplay may work without a constant connection, while updates, advertisements, downloads, or external services may require internet access.
              </p>
              <p>
                So, don't assume that every part of the game works offline. Test the version you install to see which features remain available without a connection.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}