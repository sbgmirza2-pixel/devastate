export default function CommonProblems() {
  const problems = [
    {
      title: "APK Installation Fails",
      paragraphs: [
        "This can happen because of insufficient storage, an unsupported Android version, a damaged download, or an existing incompatible installation.",
        "Try downloading the file again, checking your Android version, freeing storage, and removing an older conflicting version."
      ]
    },
    {
      title: "The Game Doesn't Open",
      paragraphs: [
        "Restart the phone and try again. If the problem continues, clear the game's cache and check whether your device meets the requirements.",
        "Reinstalling a clean version can also help."
      ]
    },
    {
      title: "Black Screen",
      paragraphs: [
        "A black screen can sometimes be caused by compatibility or installation problems.",
        "Try restarting the game, clearing its cache, restarting the phone, freeing storage, or reinstalling the APK."
      ]
    },
    {
      title: "Touch Input Isn't Responding",
      paragraphs: [
        "Restart the application first. If you're playing through an emulator, check its input settings as well.",
        "On a phone, make sure the screen is responding normally and try clearing the cache if needed."
      ]
    },
    {
      title: "Display Looks Cropped",
      paragraphs: [
        "This is more common on emulators or devices with unusual screen ratios.",
        "Changing the emulator resolution, switching display modes, or trying another compatible device may solve the problem."
      ]
    },
    {
      title: "Buttons or Items Don't Respond",
      paragraphs: [
        "Give the game a moment to finish loading, then try again. Restarting the app can fix temporary issues.",
        "If the problem remains, clear the cache or reinstall the game."
      ]
    }
  ];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 uppercase tracking-wide">
            Common Installation Problems and Their Solutions
          </h2>

          {/* Problems list */}
          <div className="w-full space-y-8">
            {problems.map((item, index) => (
              <div key={index} className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="space-y-3 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                  {item.paragraphs.map((p, pIndex) => (
                    <p key={pIndex} className="font-normal">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}