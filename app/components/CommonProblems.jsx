import { defaultHomeContent } from '@/lib/homeDefaults';

export default function CommonProblems({ content }) {
  const data = content || defaultHomeContent.problems;
  const problems = data.items || defaultHomeContent.problems.items;

  return (
    <section id="troubleshooting" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-8 uppercase tracking-wide">
            {data.heading || "Common Installation Problems and Their Solutions"}
          </h2>

          {/* Problems list */}
          <div className="w-full space-y-8">
            {problems.map((item, index) => (
              <div key={index} className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="space-y-3 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                  {(item.paragraphs || []).map((p, pIndex) => (
                    <p key={pIndex} className="font-normal">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}