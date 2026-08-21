export default function WhatIsDevastate() {
  const highlights = [
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
    // w-screen and background kept as requested
    <div id="what-is-devastate" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
      {/* Container with responsive side padding to keep content settled */}
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            What Is Devastate?
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            <p>
              Devastate is an anime-style interactive simulation game for Android. Its gameplay revolves around characters, conversations, objects, tasks, rewards, and progression rather than traditional action-focused mechanics.
            </p>
            <p>
              The 2D presentation gives it a visual-novel-inspired appearance, while the interactive elements make it more than something you simply read or watch.
            </p>
            <p>
              You can explore the available scenes, interact with characters, use items, complete activities, collect coins, and work through the different options presented during gameplay.
            </p>
          </div>

          {/* Simple List */}
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              It may be a good match if you prefer:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}