import BlogListClient from './BlogListClient';
import JsonLd, { generateBreadcrumbSchema } from '@/app/components/JsonLd';

export const metadata = {
  title: "Devastate APK Blog - Guides, Tutorials, Updates & Safety Insights",
  description: "Explore in-depth Devastate APK guides, PC installation steps, troubleshooting fixes, updates changelog, permission checks, and gameplay walkthroughs.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Devastate APK Blog - Guides, Tutorials, Updates & Safety Insights",
    description: "Explore in-depth Devastate APK guides, PC installation steps, troubleshooting fixes, updates changelog, permission checks, and gameplay walkthroughs.",
    url: '/blog',
    images: ['/picblog.webp'],
  },
};

// Static Blog Posts (Database hatane ke baad yeh static data use hoga)
const staticBlogPosts = [
  {
    _id: '1',
    title: 'How to Install Devastate APK on Android Devices Safely',
    slug: 'how-to-install-devastate-apk-safely',
    excerpt: 'Step-by-step guide on enabling unknown sources, verifying package integrity, and completing secure installation.',
    date: 'September 2026',
    category: 'Guides',
  },
  {
    _id: '2',
    title: 'Playing Devastate on PC Using Android Emulators',
    slug: 'playing-devastate-on-pc-emulators',
    excerpt: 'Learn how to run Devastate smoothly on Windows and Mac using popular emulators like BlueStacks or LDPlayer.',
    date: 'September 2026',
    category: 'Tutorials',
  },
  {
    _id: '3',
    title: 'Devastate APK v1.0 Update Changelog & What’s New',
    slug: 'devastate-apk-v1-update-changelog',
    excerpt: 'Explore the latest features, bug fixes, performance optimizations, and interface improvements in the newest release.',
    date: 'September 2026',
    category: 'Updates',
  },
];

export default async function BlogPage() {
  const posts = staticBlogPosts;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ], 'https://thedevastate.com');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      <JsonLd data={breadcrumbSchema} />
      
      {/* Top Banner Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <span className="bg-black text-white text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
          Knowledge Base & Guides
        </span>
        <h1
          className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          Devastate APK Insights & Guides
        </h1>
        <p className="text-black/80 text-base sm:text-lg leading-relaxed max-w-2xl">
          Everything you need to know about Devastate APK — installation tutorials, PC emulator setup, offline capabilities, safety checks, and gameplay walkthroughs.
        </p>
      </div>

      {/* Interactive Blog List Component */}
      <BlogListClient posts={posts} />

    </div>
  );
}