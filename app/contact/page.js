export default function ContactUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Contact Us
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          Have a question about our website or Devastate content? You can contact us if you need help, want to report an error, or have a useful suggestion.
        </p>
        <p className="font-semibold text-black">
          We appreciate genuine feedback and take website-related concerns seriously.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-10 text-black/80 text-base sm:text-lg leading-relaxed">
        
        {/* What You Can Contact Us About */}
        <section className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            What You Can Contact Us About
          </h2>
          <p className="mb-4 text-sm sm:text-base">You can contact us about:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black/80 text-sm sm:text-base font-medium">
            <div className="flex items-center gap-2">✓ Incorrect Devastate information</div>
            <div className="flex items-center gap-2">✓ Outdated APK details</div>
            <div className="flex items-center gap-2">✓ Broken links</div>
            <div className="flex items-center gap-2">✓ Content corrections</div>
            <div className="flex items-center gap-2">✓ Website problems</div>
            <div className="flex items-center gap-2">✓ Suggestions</div>
            <div className="flex items-center gap-2">✓ Copyright concerns</div>
            <div className="flex items-center gap-2">✓ Other site-related questions</div>
          </div>
        </section>

        {/* Before You Contact Us */}
        <section className="border-l-4 border-black pl-6 py-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Before You Contact Us
          </h2>
          <p className="mb-4">
            Please explain your concern clearly and mention the page or section related to your message. This helps us understand the issue and review it properly.
          </p>
          <p className="text-sm text-black/70">
            For copyright requests, provide enough information to help us identify the material in question.
          </p>
        </section>

        {/* Closing Notice */}
        <section className="bg-black/5 p-6 rounded-2xl text-center">
          <p className="text-base sm:text-lg font-medium text-black">
            We will review your message and respond when a reply is needed.
          </p>
        </section>

      </div>

    </div>
  );
}