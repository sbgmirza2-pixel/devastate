export default function BeforeYouInstall() {
  const checklistItems = [
    "App name",
    "Package name",
    "Version",
    "File size",
    "Developer information",
    "Android requirement",
    "Requested permissions",
    "Download source"
  ];

  return (
    <div id="before-you-install" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full text-left space-y-6">
          
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wide">
            Before You Install the APK
          </h2>

          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
            Installing an APK manually is different from downloading an application through an official store, so checking the file first is important.
          </p>

          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
            Before opening it, compare:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-1">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal pt-2">
            Be cautious with pages that redirect you repeatedly, offer several unrelated downloads, or ask you to install additional files.
          </p>

        </div>
      </div>
    </div>
  );
}