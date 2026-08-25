import Link from 'next/link';

export const metadata = {
  title: "DMCA Copyright Policy - Devastate APK",
  description: "Digital Millennium Copyright Act (DMCA) notice and takedown procedure for Devastate APK.",
  alternates: {
    canonical: '/dmca',
  },
};

export default function DmcaPolicyPage() {
  return (
    <div
      className="max-w-4xl mx-auto px-6 sm:px-10 py-16"
      style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
    >
      
      {/* Main Heading */}
      <h1
        className="text-4xl sm:text-5xl font-bold text-black uppercase mb-8"
        style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
      >
        DMCA Policy
      </h1>

      {/* Intro Text */}
      <div className="text-sm sm:text-base leading-7 text-black/80 space-y-6 mb-12">
        <p>
          DevastateAPK.net respects copyright rights and takes genuine copyright concerns seriously.
        </p>
        <p className="font-semibold text-black">
          If you believe that material published on our website violates your copyright, you can contact us with the details of your claim.
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-12 text-sm sm:text-base leading-7 text-black/80">
        
        {/* Copyright Notice */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Copyright Notice
          </h2>
          <p>
            A copyright complaint should clearly identify the protected work and explain where the material appears on the website.
          </p>
          <p className="font-semibold text-black pt-1">Please provide:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm font-medium">
            <div>✓ Your name</div>
            <div>✓ Your contact information</div>
            <div>✓ A description of the copyrighted work</div>
            <div>✓ The exact page or location of the material</div>
            <div>✓ An explanation of your copyright concern</div>
            <div>✓ Confirmation that info is accurate</div>
          </div>
        </section>

        {/* Content Review */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Content Review
          </h2>
          <p>
            After receiving a valid complaint, we will review the reported material and take appropriate action when necessary.
          </p>
          <p className="text-xs sm:text-sm text-black/70">
            If the material is found to violate copyright rights, we may remove it or restrict access to it.
          </p>
        </section>

        {/* False Claims */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            False Claims
          </h2>
          <p>
            Please do not submit false or misleading copyright complaints. A notice should only be sent when you have a genuine copyright concern.
          </p>
        </section>

        {/* contact */}
        <section className="space-y-4">
          <h2
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
          >
            Contact
          </h2>
          <p>
            For Copyright-related requests, use the contact details available on the Contact Us page. Please provide complete information so we can review your request properly.
          </p>
        </section>

      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 pt-10 mt-16 border-t border-black/10">
        <Link 
          href="/contact" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Contact Us
        </Link>
        <Link 
          href="/" 
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Home Page
        </Link>
      </div>

    </div>
  );
}