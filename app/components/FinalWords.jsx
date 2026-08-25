import { defaultHomeContent } from '@/lib/homeDefaults';

export default function FinalWords({ content }) {
  const data = content || defaultHomeContent.finalWords;

  return (
    <section id="final-words" className="w-full py-12 sm:py-16 bg-black/[0.03] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-start">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            {data.heading || "Final Words"}
          </h2>

          {/* Content paragraphs */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal">
            {(data.paragraphs || [
              "Devastate APK offers a different kind of Android gaming experience for players who enjoy anime-inspired visuals, character interaction, dialogue, mystery, items, daily activities, rewards, and customization.",
              "Its slower pace and visual-novel-style presentation make it more focused on interaction and progression than traditional action games. That makes it particularly interesting for players who prefer character-driven simulation experiences.",
              "Before installing, check the version, package name, file size, Android requirement, and download source. Avoid suspicious or modified files, and only allow installation from outside sources when you trust the APK.",
              "Once everything checks out, install the game, explore the available scenes, follow the conversations, experiment with the item system, complete daily activities, and see where the experience takes you."
            ]).map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}