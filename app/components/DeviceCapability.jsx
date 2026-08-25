import { defaultHomeContent } from '@/lib/homeDefaults';

export default function DeviceCompatibility({ content }) {
  const data = content || defaultHomeContent.requirements;
  const requirements = data.items || defaultHomeContent.requirements.items;

  return (
    <section id="requirements" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "Android Requirements and Device Compatibility"}
          </h2>

          {/* Descriptive Text */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            {data.description || "Before installing, make sure your device meets the listed minimum requirement."}
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
            {(data.notes || []).map((note, nIdx) => (
              <p key={nIdx}>{note}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}