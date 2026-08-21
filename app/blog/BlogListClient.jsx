'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function BlogListClient({ posts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, [posts]);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-10">
      
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-black/10 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* When no posts match */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-black/10 p-8 shadow-sm">
          <p className="text-4xl mb-3">📑</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>
            No Articles Found
          </h3>
          <p className="text-black/60 text-sm mb-6 max-w-md mx-auto">
            We couldn't find any articles matching your search query or filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="bg-black text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-black/90 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* All Posts Grid Layout (Same sequence for all blogs) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id || post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5 border-b border-black/5">
                  <img
                    src={post.coverImage || '/picblog.webp'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black/10">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-black/50 uppercase tracking-wider mb-2">
                    {post.date && <span>{post.date}</span>}
                    {post.date && <span>&bull;</span>}
                    <span>{post.readTime || '5 min read'}</span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-black/80 transition line-clamp-2"
                    style={{ fontFamily: 'var(--font-heading), sans-serif' }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-black/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer link */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-black/5 mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-black font-bold text-xs uppercase tracking-wider hover:underline"
                >
                  Read Article &rarr;
                </Link>
              </div>

            </article>
          ))}
        </div>
      )}

    </div>
  );
}