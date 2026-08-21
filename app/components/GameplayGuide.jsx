export default function HowGameplayWorks() {
  const startingRoute = [
    "Launch the game.",
    "Explore the main interface.",
    "Check the available scenes.",
    "Follow the current conversation.",
    "Interact with characters.",
    "Try available items.",
    "Complete tasks.",
    "Collect rewards.",
    "Explore customization options.",
    "Continue with the available content."
  ];

  return (
    // w-screen and background preserved with responsive side padding inner wrapper
    <div  id ="gameplay-works"className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-12 bg-black/[0.03]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">
          
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 uppercase tracking-wide">
            How the Gameplay Works
          </h2>

          {/* Descriptive Paragraphs */}
          <div className="w-full space-y-4 text-base sm:text-lg text-black/90 leading-relaxed font-normal mb-8">
            <p>
              The different systems work together to create a slower simulation experience.
            </p>
            <p>
              A normal session can involve checking the main screen, exploring available scenes, talking with characters, using items, completing a task, collecting rewards, and continuing with the next available interaction.
            </p>
          </div>

          {/* Starting Route List */}
          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide">
              A simple starting route is:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {startingRoute.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-1">
                  <span className="font-bold text-black flex-shrink-0">{index + 1}.</span>
                  <span className="font-normal text-black/90 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm sm:text-base text-black/70 italic">
              The exact choices and features can vary between versions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}