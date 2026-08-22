import Link from 'next/link';

export const metadata = {
  title: "Contact Us - Devastate APK",
  description: "Get in touch with the Devastate APK team for inquiries, feedback, corrections, or support.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactUsPage() {
  return (
    <div
      className="max-w-6xl mx-auto px-12 sm:px-20 lg:px-32 py-16"
      style={{
        fontFamily: 'var(--font-roboto), sans-serif',
      }}
    >

      {/* Main Heading */}
      <div className="max-w-4xl">
        <h2
          className="text-4xl sm:text-5xl font-bold text-black uppercase"
          style={{
            fontFamily: 'var(--font-chakra-petch), sans-serif',
          }}
        >
          Contact Us
        </h2>

        {/* Intro Text (Continuous flow without paragraph gaps) */}
        <div className="text-sm sm:text-base leading-7 text-black/80 mt-5">
          Have a question about our website or Devastate content? You can contact us if you need help, want to report an error, or have a useful suggestion. 
          We appreciate genuine feedback and take website-related concerns seriously. Please read through our categories before reaching out to ensure your message gets directed properly.
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl space-y-12 text-sm sm:text-base leading-7 text-black/80 mt-12">

        {/* What You Can Contact Us About */}
        <section className="space-y-4">
          <h3
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{
              fontFamily: 'var(--font-chakra-petch), sans-serif',
            }}
          >
            What You Can Contact Us About
          </h3>

          <div>
            You can contact us about:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-xs sm:text-sm font-medium">
            <div>Incorrect Devastate information</div>
            <div>Outdated APK details</div>
            <div>Broken links</div>
            <div>Content corrections</div>
            <div>Website problems</div>
            <div>Suggestions</div>
            <div>Copyright concerns</div>
            <div>Other site-related questions</div>
          </div>
        </section>

        {/* Before You Contact Us */}
        <section className="border-l-2 border-black/20 pl-6 py-1 space-y-3">
          <h3
            className="text-xl sm:text-2xl font-bold text-black uppercase"
            style={{
              fontFamily: 'var(--font-chakra-petch), sans-serif',
            }}
          >
            Before You Contact Us
          </h3>

          <div>
            Please explain your concern clearly and mention the page or section related to your message. This helps us understand the issue and review it properly.
          </div>

          <div className="text-xs sm:text-sm text-black/60 italic pt-1">
            For copyright requests, provide enough information to help us identify the material in question.
          </div>
        </section>

        {/* Closing Notice */}
        <section className="pt-4 border-t border-black/10">
          <div className="text-sm sm:text-base font-medium text-black">
            We will review your message and respond when a reply is needed.
          </div>
        </section>

      </div>

      {/* Quick Links */}
      <div className="max-w-4xl flex flex-wrap gap-4 pt-10 mt-14 border-t border-black/10">
        <Link
          href="/"
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          Home Page
        </Link>

        <Link
          href="/about"
          className="border-2 border-black bg-black text-white hover:bg-black/90 font-extrabold text-xs tracking-wider px-6 py-3 rounded-xl transition uppercase shadow-sm"
        >
          About Us
        </Link>
      </div>

    </div>
  );
}