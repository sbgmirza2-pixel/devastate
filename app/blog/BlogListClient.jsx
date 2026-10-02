import Link from 'next/link';
import Image from 'next/image';

export default function BlogListClient({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <article
          key={post._id || post.id}
          className="bg-white rounded-2xl p-5 border border-black/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative"
        >
          {/* Poore card ko clickable banane ke liye Link wrapper */}
          <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title} />

          <div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black/5 border border-black/5 relative">
              <Image
                src={post.coverImage || '/picblog.webp'}
                alt={post.title || 'Blog Post Cover Image'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-black/5 px-2.5 py-1 rounded-full text-black/70 relative z-20">
              {post.category}
            </span>
            <h3 className="text-lg font-bold text-black mt-2 mb-2 line-clamp-2 group-hover:text-black/80">
              {post.title}
            </h3>
            <p className="text-xs text-black/70 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold text-black/50 uppercase relative z-20">
            <span>{post.readTime || post.date || '5 min'}</span>
            <span className="text-black font-extrabold group-hover:underline">
              Read &rarr;
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}