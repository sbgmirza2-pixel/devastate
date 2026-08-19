import { notFound } from 'next/navigation';
import { blogsList } from '@/data/blogData';
import Link from 'next/link';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  // Slug ke mutabiq blog dhoondna
  const post = blogsList.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Back Link */}
      <Link href="/blog" className="inline-flex items-center text-sm font-extrabold text-black/70 hover:text-black mb-8 uppercase tracking-wider">
        &larr; Back to Blogs
      </Link>

      {/* Meta info */}
      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-black/50 mb-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-black/70 border border-black/10">
          {post.category}
        </span>
        <span>{post.date} &bull; {post.readTime}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6 uppercase tracking-wide leading-tight" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        {post.title}
      </h1>

      {/* Content */}
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm space-y-6 text-black/80 text-base sm:text-lg leading-relaxed border border-black/5">
        <p>{post.content}</p>
      </div>

    </div>
  );
}