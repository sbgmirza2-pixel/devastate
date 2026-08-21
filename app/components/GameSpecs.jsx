import { readData } from '@/lib/dataUtils';

export default function AppInfoWithTableOfContents() {
  let apk = {
    appName: "Devastate",
    version: "1.0",
    category: "Simulation",
    packageName: "com.devastate.android",
    size: "52.21 MB",
    androidRequired: "Android 6.0 or higher",
    mainUse: "Anime-style character and story simulation",
    devices: "Android phones, tablets, and PC via emulator if preferred",
  };
  try {
    apk = readData('apkData.json');
  } catch {}

  const specs = [
    { label: "APP NAME", value: apk.appName || "Devastate" },
    { label: "VERSION", value: apk.version || "1.0" },
    { label: "APP TYPE", value: `${apk.category || "Simulation"} game` },
    { label: "CATEGORY", value: apk.category || "Simulation" },
    { label: "PACKAGE NAME", value: apk.packageName || "com.devastate.android" },
    { label: "SIZE", value: apk.size || "52.21 MB" },
    { label: "REQUIRED ANDROID OS", value: apk.androidRequired || "Android 6.0 or higher" },
    { label: "MAIN USE", value: apk.mainUse || "Anime-style character and story simulation" },
    { label: "DEVICES", value: apk.devices || "Android phones, tablets, and PC via emulator if preferred" },
  ];

  const tableOfContents = [
    { title: "What Is Devastate?", href: "#what-is-devastate" },
    { title: "How the Gameplay Works", href: "#gameplay-works" },
    { title: "Main Features", href: "#main-features" },
    { title: "Android Requirements", href: "#requirements" },
    { title: "What Makes It Different", href: "#what-makes-different" },
    { title: "How to Update APK", href: "#how-to-update" },
    { title: "Before You Install", href: "#before-you-install" },
    { title: "How to Download", href: "#how-to-download" },
    { title: "How to Install", href: "#how-to-install" },
    { title: "Is It Safe?", href: "#is-safe" },
    { title: "Pros and Cons", href: "#pros-and-cons" },
    { title: "Frequently Asked Questions", href: "#faq" },
  ];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-16 bg-black/[0.03] text-left">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: App Information */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-10">
              App Information
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {specs.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-black/20 pb-6">
                  <span className="text-[11px] sm:text-[12px] font-bold text-black/70 uppercase tracking-widest mb-2">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-normal text-black tracking-wide break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Table of Contents */}
          <div className="lg:col-span-5 flex flex-col items-start lg:border-l lg:border-black/20 lg:pl-12 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-10">
              Table of Contents
            </h2>

            <ul className="w-full space-y-4">
              {tableOfContents.map((item, index) => (
                <li key={index} className="border-b border-black/20 pb-4">
                  <a 
                    href={item.href} 
                    className="text-sm sm:text-base font-normal text-black/90 hover:text-black underline decoration-black/40 hover:decoration-black transition-all duration-200 block py-1 cursor-pointer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}