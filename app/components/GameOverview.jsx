export default function GameOverview() {
  const preferences = [
    "Anime-inspired games",
    "Character-driven experiences",
    "2D visuals",
    "Mystery-based settings",
    "Interactive conversations",
    "Simulation gameplay",
    "Item interaction",
    "Daily activities",
    "Customization",
    "Slower story-focused games"
  ];

  return (
    <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        What Kind of Game Is Devastate?
      </h2>
      <p>
        Devastate is an anime-style interactive simulation game for Android. Its gameplay revolves around characters, conversations, objects, tasks, rewards, and progression rather than traditional action-focused mechanics.
      </p>
      <p>
        The 2D presentation gives it a visual-novel-inspired appearance, while the interactive elements make it more than something you simply read or watch. You can explore the available scenes, interact with characters, use items, complete activities, collect coins, and work through the different options presented during gameplay.
      </p>
      
      <div className="bg-[#F4F1EA] p-6 rounded-2xl mt-6">
        <h3 className="text-xl font-bold text-black mb-4 uppercase">It may be a good match if you prefer:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-medium">
          {preferences.map((pref, index) => (
            <div key={index} className="flex items-center gap-2">✓ {pref}</div>
          ))}
        </div>
      </div>
    </div>
  );
}