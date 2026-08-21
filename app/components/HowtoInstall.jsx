export default function HowToInstallAndSafety() {
  const installationSteps = [
    {
      title: "Step 1: Locate the File",
      text: "Open your Downloads folder or file manager and find the downloaded APK."
    },
    {
      title: "Step 2: Open the APK",
      text: "Tap the file to begin the setup. If Android blocks the installation, continue to the next step."
    },
    {
      title: "Step 3: Allow Installation From the Source",
      text: "Open the Android setting that allows your browser or file manager to install unknown apps. The location of this option varies between Android versions and phone brands."
    },
    {
      title: "Step 4: Install the Game",
      text: "Return to the APK and tap Install. Wait for the installation to finish."
    },
    {
      title: "Step 5: Open Devastate",
      text: "Tap Open or launch the game from your app drawer. Afterward, you can start exploring the available scenes and gameplay options."
    }
  ];

  const safetyTips = [
    "Use a reliable download source.",
    "Check the package name.",
    "Compare the file size.",
    "Review the permissions.",
    "Scan the file when possible.",
    "Avoid modified and cracked versions.",
    "Don't install extra files from pop-ups.",
    "Keep Android security features enabled.",
    "Disable unknown-app installation again after setup."
  ];

  return (
    <>
      {/* How to Install Section */}
      <div id="how-to-install" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              How to Install Devastate APK on Android
            </h2>
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
              Once the APK is on your device, the installation process is straightforward.
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
      </div>

      {/* Is Devastate APK Safe Section */}
      <div id="is-safe" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
              Is Devastate APK Safe?
            </h2>
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-6">
              The safety of any manually installed APK depends on the source and the condition of the file. A trustworthy download is important, especially when the game is being installed outside an official store.
            </p>
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              For a safer installation:
            </h3>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pl-1 mb-8">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{tip}</span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
              If Android displays an unexpected security warning, don't ignore it. Check the file and source before proceeding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}