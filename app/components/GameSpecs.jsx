import { defaultHomeContent } from '@/lib/homeDefaults';
import TableOfContentsList from './TableOfContentsList';

export default async function AppInfoWithTableOfContents({ content, apkData }) {
  const apk = apkData || {
    appName: "Devastate",
    version: "1.0",
    category: "Simulation",
    packageName: "com.devastate.android",
    size: "52.21 MB",
    androidRequired: "Android 6.0 or higher",
    mainUse: "Anime-style character and story simulation",
    devices: "Android phones, tablets, and PC via emulator if preferred",
  };

  const specsConfig = content || defaultHomeContent.specs;

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
    { title: "Frequently Asked Questions", href: "#faq" }
  ];

  return (
    <section id="app-info" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: App Information */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 tracking-tight uppercase border-b-2 border-black pb-3 w-full">
              {specsConfig.heading || "App Information"}
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specs.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 border border-black/10 rounded-xl p-4 shadow-xs hover:border-black/30 transition-colors flex flex-col justify-center"
                >
                  <span className="text-[10px] sm:text-[11px] font-bold text-black/55 uppercase tracking-wider mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-black tracking-wide break-words">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Table of Contents */}
          <div className="lg:col-span-5 flex flex-col items-start w-full sticky top-24">
            <TableOfContentsList 
              items={tableOfContents} 
              headingTitle={specsConfig.tocHeading || "Table of Contents"} 
            />
          </div>

        </div>
      </div>
    </section>
  );
}