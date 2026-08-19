import Link from 'next/link';
import { blogsList } from '@/data/blogData';

export default function BlogPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-left" style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
      
      {/* Page Title */}
      <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4 tracking-wide uppercase border-b-2 border-black pb-3 w-full text-center" style={{ fontFamily: 'var(--font-anton), sans-serif' }}>
        Devastate Insights & Blog
      </h2>
      
      <p className="text-black/80 text-base sm:text-lg leading-relaxed mb-10 text-center max-w-xl">
        Stay updated with the latest tips, guides, security checks, and technical breakdowns for Devastate APK.
      </p>

      {/* Blog Cards List */}
      <div className="w-full space-y-6">
        {blogsList.map((post) => (
          <article 
            key={post.id} 
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm transition hover:shadow-md border border-black/5 flex flex-col justify-between"
          >
            <div>
              {/* Category & Date Meta */}
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black/50 mb-3">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-black/70 border border-black/10">
                  {post.category}
                </span>
                <span>{post.date} &bull; {post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-3 hover:text-black/80 transition">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-black/70 text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Read More Link */}
            <div>
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-flex items-center text-black font-extrabold text-sm uppercase tracking-wider hover:underline"
              >
                Read Article &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}