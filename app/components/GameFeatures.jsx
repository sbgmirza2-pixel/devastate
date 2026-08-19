export default function GameFeatures() {
  const features = [
    {
      title: "1. Anime-Inspired 2D Presentation",
      desc: "Uses 2D anime-style artwork for characters and scenes without relying on demanding 3D graphics. Suited for fans of anime games and visual novels."
    },
    {
      title: "2. Characters, Conversations, and Choices",
      desc: "Characters are at the center of gameplay. Follow conversations, interact with available figures, and move through situations as they appear."
    },
    {
      title: "3. Items and Interactive Gameplay",
      desc: "Objects become part of tasks or interactions, giving you more reasons to explore scenes and understand how gameplay mechanics work together."
    },
    {
      title: "4. Daily Tasks and Coin Rewards",
      desc: "Daily activities provide smaller objectives and rewards like coins, adding structure and ongoing reasons to keep progressing."
    },
    {
      title: "5. Character Customization",
      desc: "Outfit options give players control over character appearance where available, adding additional goals during game progression."
    },
    {
      title: "6. Easy Touch-Based Gameplay",
      desc: "Designed around Android touch input. Menus, dialogue, items, and interactive elements are accessed directly through simple taps."
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Six Things That Stand Out
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-black/5 p-6 rounded-2xl border-l-4 border-black">
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-sm text-black/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}