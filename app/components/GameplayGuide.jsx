export default function GameplayGuide() {
  const steps = [
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
    <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
      <h2 className="text-3xl font-bold text-black uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        How the Gameplay Comes Together
      </h2>
      <p>
        The different systems work together to create a slower simulation experience. A normal session involves exploring scenes, talking with characters, using items, completing tasks, and collecting rewards.
      </p>
      
      <div className="bg-[#F4F1EA] p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-black mb-4 uppercase">A simple starting route:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base font-medium">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}