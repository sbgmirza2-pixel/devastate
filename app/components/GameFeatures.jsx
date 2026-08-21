export default function MainFeatures() {
  const features = [
    {
      title: "1. Anime-Inspired 2D Presentation",
      paragraphs: [
        "The game uses 2D anime-style artwork for its characters and scenes. This gives the experience a distinct visual identity without relying on demanding 3D graphics.",
        "The presentation is especially suited to players who enjoy anime games, visual novels, and character-focused mobile experiences."
      ]
    },
    {
      title: "2. Characters, Conversations, and Choices",
      paragraphs: [
        "Characters are at the center of much of the gameplay. You can follow conversations, interact with available characters, and move through different situations as they appear.",
        "Dialogue also helps build the atmosphere and gives players a more involved role in the experience."
      ]
    },
    {
      title: "3. Items and Interactive Gameplay",
      paragraphs: [
        "Items add another layer beyond simply reading dialogue. Depending on the situation, objects can become part of tasks or interactions.",
        "This gives you more reasons to explore the available scenes and understand how different gameplay elements work together."
      ]
    },
    {
      title: "4. Daily Tasks and Coin Rewards",
      paragraphs: [
        "Daily activities provide smaller objectives that can be completed during regular play. Rewards such as coins add another reason to keep progressing.",
        "These systems can make the experience feel more structured instead of leaving players with nothing to do after the initial story content."
      ]
    },
    {
      title: "5. Character Customization",
      paragraphs: [
        "Outfit options give players some control over character appearance where the feature is available.",
        "Customization can also provide additional goals as you progress through the game, particularly if you enjoy spending time on character presentation."
      ]
    },
    {
      title: "6. Easy Touch-Based Gameplay",
      paragraphs: [
        "The controls are designed around Android touch input. Menus, dialogue, items, and other interactive elements can be accessed directly through taps.",
        "There is no complicated control system to learn, which keeps the experience approachable on phones and tablets."
      ]
    }
  ];

  return (
    <div id="main-features" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12 py-16 bg-black/[0.03]">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
        <div className="w-full flex flex-col items-start">

          {/* Section Heading */}
          <div className="mb-10 w-full border-b border-black/10 pb-6">
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-wide">
              Main Features of Devastate APK
            </h2>
            <p className="text-black/70 text-sm sm:text-base mt-2">
              Discover what makes this simulation game a unique experience on Android devices.
            </p>
          </div>

          {/* Features Grid Layout with Subtly Enhanced Hover */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase tracking-wide flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    {feature.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  
                  <div className="space-y-3 text-black/85 text-sm sm:text-base leading-relaxed font-normal">
                    {feature.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}