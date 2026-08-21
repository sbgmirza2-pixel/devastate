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

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

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

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-[#F5F3EF] border border-black/10 text-black rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-black/30 placeholder-black/40"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40 text-xs">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black text-xs font-bold"
            >
              ✕
            </button>
          )}
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
        <>
          {/* Grand Featured Post (Top post) */}
          {featuredPost && (
            <article className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
              
              {/* Image Column */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black/5">
                <img
                  src={featuredPost.coverImage || '/picblog.webp'}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  ⭐ Featured
                </span>
              </div>

              {/* Text Info Column */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-black/50 mb-3">
                    <span className="bg-black/5 px-3 py-1 rounded-full text-black/80 border border-black/5">
                      {featuredPost.category}
                    </span>
                    {featuredPost.date && (
                      <span>{featuredPost.date}</span>
                    )}
                    <span>&bull;</span>
                    <span>{featuredPost.readTime || '5 min read'}</span>
                  </div>

                  <h2
                    className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight leading-snug group-hover:text-black/80 transition"
                    style={{ fontFamily: 'var(--font-heading), sans-serif' }}
                  >
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-black/70 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-black hover:bg-black/90 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-sm"
                  >
                    Read Full Article &rarr;
                  </Link>
                </div>
              </div>

            </article>
          )}

          {/* Remaining Posts Grid */}
          {remainingPosts.length > 0 && (
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-6 border-b border-black/10 pb-3"
                style={{ fontFamily: 'var(--font-heading), sans-serif' }}
              >
                More Articles ({remainingPosts.length})
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {remainingPosts.map((post) => (
                  <article
                    key={post.id}
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
            </div>
          )}
        </>
      )}

    </div>
  );
}
