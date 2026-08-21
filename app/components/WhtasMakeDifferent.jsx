export default function WhatMakesDifferent() {
  const features = [
    {
      title: "Story-Focused Gameplay",
      text: "The gameplay puts more attention on conversations, characters, and the situations you encounter along the way. Instead of rushing through levels, you can take your time exploring scenes, following the story, completing tasks, and seeing how the available content develops."
    },
    {
      title: "Interactive Character Experience",
      text: "Characters play an important role throughout the game. You can interact with them, follow their conversations, and see different situations as they progress. These interactions make the experience feel more personal and give you something to explore beyond the usual gameplay found in simple mobile games."
    }
  ];

  return (
    // Background and full width kept, padding applied to the inner container
    <div  id = "what-makes-different" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.06]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            What Makes Devastate Different?
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            Devastate stands out with its character-focused gameplay, interactive conversations, and slower pace, giving you more time to explore and enjoy the experience.
          </p>

          {/* Sub-sections */}
          <div className="w-full space-y-8">
            {features.map((item, index) => (
              <div key={index} className="w-full">
                <h3 className="text-lg sm:text-xl font-black text-black mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-black/90 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}