export default function DmcaPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-normal text-black mb-6 tracking-wide uppercase" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        DMCA Policy
      </h1>

      {/* Intro Paragraphs */}
      <div className="space-y-6 text-black/80 text-base sm:text-lg leading-relaxed mb-12">
        <p>
          DevastateAPK.net respects copyright rights and takes genuine copyright concerns seriously.
        </p>
        <p className="font-semibold text-black">
          If you believe that material published on our website violates your copyright, you can contact us with the details of your claim.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-10 text-black/80 text-base sm:text-lg leading-relaxed">
        
        {/* Copyright Notice */}
        <section className="bg-[#F4F1EA] p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Copyright Notice
          </h2>
          <p className="mb-4">
            A copyright complaint should clearly identify the protected work and explain where the material appears on the website.
          </p>
          <p className="mb-3 font-semibold text-black">Please provide:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black/80 text-sm sm:text-base font-medium">
            <div className="flex items-center gap-2">✓ Your name</div>
            <div className="flex items-center gap-2">✓ Your contact information</div>
            <div className="flex items-center gap-2">✓ A description of the copyrighted work</div>
            <div className="flex items-center gap-2">✓ The exact page or location of the material</div>
            <div className="flex items-center gap-2">✓ An explanation of your copyright concern</div>
            <div className="flex items-center gap-2">✓ Confirmation that info is accurate</div>
          </div>
        </section>

        {/* Content Review */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Content Review
          </h2>
          <p className="mb-4">
            After receiving a valid complaint, we will review the reported material and take appropriate action when necessary.
          </p>
          <p className="text-sm text-black/70">
            If the material is found to violate copyright rights, we may remove it or restrict access to it.
          </p>
        </section>

        {/* False Claims */}
        <section className="bg-black/5 p-8 rounded-2xl border-l-4 border-black">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            False Claims
          </h2>
          <p>
            Please do not submit false or misleading copyright complaints. A notice should only be sent when you have a genuine copyright concern.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t border-black/10 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
            Contact
          </h2>
          <p>
            For copyright-related requests, use the contact details available on the Contact Us page. Please provide complete information so we can review your request properly.
          </p>
        </section>

      </div>

    </div>
  );
}