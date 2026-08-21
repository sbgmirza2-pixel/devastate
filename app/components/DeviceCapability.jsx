export default function DeviceCompatibility() {
  const requirements = [
    { label: "Android", value: "6.0 or newer" },
    { label: "APK Size", value: "52.21 MB" },
    { label: "Platform", value: "Android" },
    { label: "Controls", value: "Touch" },
    { label: "Installation", value: "Manual APK" },
    { label: "Storage", value: "Extra free space recommended" },
  ];

  return (
    // w-screen and background preserved with responsive side padding inner wrapper
    <div id ="requirements" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            Android Requirements and Device Compatibility
          </h2>

          {/* Descriptive Text */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            Before installing, make sure your device meets the listed minimum requirement.
          </p>

          {/* Requirements Table / Grid */}
          <div className="w-full bg-black/15 border border-black/15 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-[1px] mb-8">
            {requirements.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-5 flex flex-col justify-center transition-colors duration-200 hover:bg-black/5"
              >
                <span className="text-[10px] sm:text-[11px] font-bold text-black/50 uppercase tracking-widest mb-1 sm:mb-1.5">
                  {item.label}
                </span>
                <span className="text-sm sm:text-base font-normal text-black tracking-wide break-words">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Notes */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
            <p>
              The listed APK is around 52 MB, but it is still a good idea to keep additional storage available for temporary files and game data.
            </p>
            <p>
              Performance can also vary depending on your phone's RAM, processor, Android version, and available storage.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}