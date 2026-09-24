import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarkdownContent from '@/app/components/MarkdownContent';
import JsonLd, {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/app/components/JsonLd';

// Static Blog Posts Data (Database hatane ke baad yeh static data use hoga)
const staticBlogPosts = [
  {
    id: '1',
    title: 'How to Install Devastate APK on Android Devices Safely',
    slug: 'how-to-install-devastate-apk-safely',
    category: 'Guides',
    date: 'September 2026',
    readTime: '5 min read',
    excerpt: 'Step-by-step guide on enabling unknown sources, verifying package integrity, and completing secure installation.',
    coverImage: '/picblog.webp',
    content: `
# How to Install Devastate APK on Android Devices Safely

Installing third-party APK files on Android can be simple and safe if you follow standard security procedures. Because Devastate APK is distributed outside the Google Play Store, you will need to enable app installation from unknown sources on your device.

## Step 1: Enable Unknown Sources
1. Open your Android **Settings**.
2. Navigate to **Apps & Notifications** or **Security**.
3. Select **Install unknown apps** and choose your browser or file manager.
4. Toggle **Allow from this source** to on.

## Step 2: Download the Verified APK
Ensure you download the installation file from the official source to prevent malware or modified code. Check the file size and version details before proceeding.

## Step 3: Complete Installation
Tap the downloaded APK file in your notification panel or file manager, review the requested permissions, and hit **Install**. Once finished, open the app and enjoy your game!
    `
  },
  {
    id: '2',
    title: 'Playing Devastate on PC Using Android Emulators',
    slug: 'playing-devastate-on-pc-emulators',
    category: 'Tutorials',
    date: 'September 2026',
    readTime: '6 min read',
    excerpt: 'Learn how to run Devastate smoothly on Windows and Mac using popular emulators like BlueStacks or LDPlayer.',
    coverImage: '/picblog.webp',
    content: `
# Playing Devastate on PC Using Android Emulators

If you prefer playing simulation and visual novel games on a larger screen with keyboard controls, running Devastate APK on a PC emulator is a fantastic option.

## Recommended Emulators
* **BlueStacks:** High performance, customizable controls, and excellent compatibility.
* **LDPlayer:** Lightweight, optimized for gaming, and stable resource management.

## Setup Instructions
1. Download and install your preferred emulator on Windows or Mac.
2. Download the official Devastate APK file on your computer.
3. Drag and drop the APK file into the emulator window, or use the "Install APK" button inside the emulator interface.
4. Launch the game from the emulator home screen and configure your keymappings!
    `
  },
  {
    id: '3',
    title: 'Devastate APK v1.0 Update Changelog & What’s New',
    slug: 'devastate-apk-v1-update-changelog',
    category: 'Updates',
    date: 'September 2026',
    readTime: '4 min read',
    excerpt: 'Explore the latest features, bug fixes, performance optimizations, and interface improvements in the newest release.',
    coverImage: '/picblog.webp',
    content: `
# Devastate APK v1.0 Update Changelog & What’s New

The v1.0 release of Devastate APK brings major performance enhancements, refined anime character models, smoother narrative branching, and bug fixes.

## What's New in v1.0?
* **Optimized Rendering Engine:** Faster asset loading times and smoother transitions between scenes.
* **Expanded Dialogue Options:** More branching narrative choices and character interactions.
* **UI Refinements:** Clean, distraction-free menus designed for optimal mobile reading and interaction.
* **Bug Fixes:** Resolved minor UI scaling issues on older tablet devices and optimized battery consumption.

Download the latest version from our downloads page to enjoy the most stable and feature-rich experience!
    `
  },
];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = staticBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found - Devastate' };
  }

  const coverImg = post.coverImage || '/picblog.webp';

  return {
    title: `${post.title} - Devastate APK`,
    description: post.excerpt || `Read ${post.title} on Devastate APK official blog.`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: '2026-09-01T00:00:00.000Z',
      authors: ['Devastate APK'],
      images: [
        {
          url: coverImg,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [coverImg],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = staticBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = 'https://thedevastate.com';

  // Structured Data
  const articleSchema = generateArticleSchema(post, siteUrl);

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      {
        name: post.title,
        url: `/blog/${post.slug}`,
      },
    ],
    siteUrl
  );

  // Related posts (excluding current post, max 3)
  const relatedPosts = staticBlogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const coverSrc = post.coverImage || '/picblog.webp';

  return (
    <article
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      style={{
        fontFamily: 'var(--font-roboto), sans-serif',
      }}
    >
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-black/60 uppercase tracking-wider"
      >
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-black transition">
          Blog
        </Link>
        <span>/</span>
        <span className="text-black line-clamp-1 max-w-[200px] sm:max-w-xs">
          {post.category || 'Article'}
        </span>
      </nav>

      {/* Header Card */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-black/60 mb-4">
          <span className="bg-black text-white px-3.5 py-1.5 rounded-full shadow-sm">
            {post.category || 'General'}
          </span>
          {post.date && <span>{post.date}</span>}
          <span>&bull;</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>

        <h1
          className="text-2xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.2] mb-6"
          style={{
            fontFamily: 'var(--font-heading), sans-serif',
          }}
        >
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg sm:text-xl text-black/80 font-normal leading-relaxed max-w-3xl border-l-4 border-black pl-4 my-6">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Cover Image */}
      {coverSrc && (
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-10 shadow-lg border border-black/10 bg-black/5">
          <img
            src={coverSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Main Content Card */}
      <div className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-black/10 mb-12">
        <MarkdownContent content={post.content} />

        {/* In-Article APK Download CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFECE6] border-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-black/60 bg-black/5 px-2.5 py-1 rounded">
              Ready to play?
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-1"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
              }}
            >
              Download Devastate APK
            </h3>
            <p className="text-black/70 text-sm max-w-md">
              Get the verified latest release for Android with anime
              simulation gameplay and interactive scenes.
            </p>
          </div>
          <Link
            href="/download"
            className="shrink-0 bg-black hover:bg-black/90 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition shadow-md"
          >
            Get Devastate APK &rarr;
          </Link>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-black/10 pt-12 mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight"
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
              }}
            >
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold uppercase text-black hover:underline tracking-wider"
            >
              View All Posts &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <article
                key={rel.id}
                className="bg-white rounded-2xl p-5 border border-black/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black/5 border border-black/5">
                    <img
                      src={rel.coverImage || '/picblog.webp'}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/5 px-2.5 py-1 rounded-full text-black/70">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold text-black mt-2 mb-2 line-clamp-2 group-hover:text-black/80">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="text-xs text-black/70 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-black/50 uppercase">
                  <span>{rel.readTime || '5 min'}</span>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-black font-extrabold hover:underline"
                  >
                    Read &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Back to Top / Blog Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border-2 border-black bg-white hover:bg-black hover:text-white text-black font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition shadow-sm"
        >
          &larr; Back to All Articles
        </Link>
      </div>
    </article>
  );
}