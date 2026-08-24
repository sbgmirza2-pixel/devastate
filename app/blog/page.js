import BlogListClient from './BlogListClient';
import { listBlogPosts } from '@/lib/database';
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

export default async function BlogPage() {
  const posts = await listBlogPosts();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

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
      <BlogListClient posts={posts.map((post) => ({ ...post, _id: post._id?.toString() }))} />

    </div>
  );
}