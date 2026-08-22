import JsonLd, { generateFaqSchema, generateBreadcrumbSchema } from '@/app/components/JsonLd';

export const metadata = {
  title: "Frequently Asked Questions (FAQs) - Devastate APK",
  description: "Find clear answers to common questions about Devastate APK for Android: gameplay features, minimum requirements, safety checks, offline support, PC emulator setup, and updates.",
  alternates: {
    canonical: '/faqs',
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQs) - Devastate APK",
    description: "Find clear answers to common questions about Devastate APK for Android: gameplay, requirements, safety, and PC play.",
    url: '/faqs',
  },
};

const FAQ_LIST = [
  {
    q: "What is Devastate APK?",
    a: "Devastate APK is the Android installation package for the Devastate simulation game. It features anime-inspired 2D visuals, character interaction, dialogue, items, tasks, rewards, and customization."
  },
  {
    q: "Is Devastate Free to Play?",
    a: "Yes, Devastate is free to play on Android, with its main gameplay available without an upfront payment."
  },
  {
    q: "What type of game is Devastate?",
    a: "It is an interactive simulation game with anime-style visuals, character-focused gameplay, dialogue, and visual-novel-inspired elements."
  },
  {
    q: "What is the package name?",
    a: "The listed package name is com.devastate.android."
  },
  {
    q: "Which Android version is required?",
    a: "The listed minimum requirement is Android 6.0 or newer."
  },
  {
    q: "How large is the APK?",
    a: "The listed file size is approximately 52.21 MB."
  },
  {
    q: "Does the game use 2D anime visuals?",
    a: "Yes. Its presentation uses anime-inspired 2D characters and scenes."
  },
  {
    q: "Are dialogue choices available?",
    a: "Dialogue and character interaction are important parts of the experience, although the available options may differ between versions."
  },
  {
    q: "Can I customize characters?",
    a: "Outfit customization is listed among the game's features, although the available choices can depend on the version."
  },
  {
    q: "Does it include daily tasks?",
    a: "Yes. Daily activities are part of the progression system described for the game."
  },
  {
    q: "Are coins available?",
    a: "Yes. Coins form part of the game's reward and progression mechanics."
  },
  {
    q: "Can I play without internet?",
    a: "Some parts may work offline, but this depends on the version and the feature. Online elements may still need a connection."
  },
  {
    q: "Can I use an emulator?",
    a: "A compatible Android emulator may run the game, although performance and display quality depend on the emulator and its settings."
  },
  {
    q: "Is Devastate APK safe?",
    a: "Use a trustworthy source, inspect the APK details, and avoid modified or suspicious versions before installing."
  },
  {
    q: "Should I install a Mod APK?",
    a: "Avoid modified versions whenever possible. An altered APK may contain unexpected changes and can create additional security or compatibility problems."
  }
];

export default function FAQsPage() {
  const faqSchema = generateFaqSchema(FAQ_LIST);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Frequently Asked Questions', url: '/faqs' },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Page Title & Intro */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 
          className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4" 
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-black/80">
          Got questions about Devastate APK? Find clear, verified answers to the most common queries below.
        </p>
      </div>
      
      {/* FAQs List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {FAQ_LIST.map((faq, index) => (
          <div key={index} className="bg-white p-6 sm:p-7 rounded-2xl border border-black/10 shadow-sm transition hover:shadow-md">
            <h2 
              className="text-base sm:text-lg font-bold text-gray-900 mb-2.5"
              style={{ fontFamily: 'var(--font-heading), sans-serif' }}
            >
              {faq.q}
            </h2>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}