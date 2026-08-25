import { defaultHomeContent } from '@/lib/homeDefaults';

export default function BeforeYouInstall({ content }) {
  const data = content || defaultHomeContent.beforeInstall;
  const checklistItems = data.checklist || defaultHomeContent.beforeInstall.checklist;

  return (
    <section id="before-you-install" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-6">
          
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-wide">
            {data.heading || "Before You Install the APK"}
          </h2>

          {(data.paragraphs || [
            "Installing an APK manually is different from downloading an application through an official store, so checking the file first is important.",
            "Before opening it, compare:"
          ]).map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
              {p}
            </p>
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-1">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>

          {data.warning && (
            <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal pt-2">
              {data.warning}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}