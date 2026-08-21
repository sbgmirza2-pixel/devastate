'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function MarkdownContent({ content }) {
  if (!content) return null;

  return (
    <div className="prose-devastate max-w-none text-[#1f2937] leading-relaxed text-base sm:text-[17px]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 mb-4 tracking-tight border-b border-black/10 pb-3"
              style={{ fontFamily: 'var(--font-heading), sans-serif' }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900 mt-10 mb-4 tracking-tight border-b border-black/10 pb-2.5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-heading), sans-serif' }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-lg sm:text-xl lg:text-[21px] font-semibold text-gray-900 mt-8 mb-3 tracking-tight"
              style={{ fontFamily: 'var(--font-heading), sans-serif' }}
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-2"
              style={{ fontFamily: 'var(--font-heading), sans-serif' }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-5 leading-relaxed text-gray-800 text-base sm:text-[17px]" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-gray-900" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-gray-800" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 sm:pl-8 mb-6 space-y-2 text-gray-800 marker:text-black/60" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 sm:pl-8 mb-6 space-y-2 text-gray-800 marker:font-semibold marker:text-black/70" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="leading-relaxed pl-1" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-black bg-black/[0.03] p-5 sm:p-6 rounded-r-2xl my-6 text-gray-900 italic shadow-sm"
              {...props}
            />
          ),
          img: ({ node, alt, src, title, ...props }) => (
            <figure className="my-8 flex flex-col items-center">
              <div className="overflow-hidden rounded-2xl border border-black/10 shadow-md bg-white p-1">
                <img
                  src={src}
                  alt={alt || 'Devastate blog image'}
                  className="max-h-[520px] w-auto max-w-full object-contain rounded-xl"
                  loading="lazy"
                  {...props}
                />
              </div>
              {(alt || title) && (
                <figcaption className="text-xs sm:text-sm text-gray-500 mt-2.5 text-center font-medium italic">
                  {title || alt}
                </figcaption>
              )}
            </figure>
          ),
          a: ({ node, href, children, ...props }) => {
            const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
            if (isInternal) {
              return (
                <Link
                  href={href}
                  className="text-black font-semibold underline decoration-black/40 hover:decoration-black transition-all"
                  {...props}
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold underline decoration-black/40 hover:decoration-black hover:opacity-80 transition-all inline-flex items-center gap-0.5"
                {...props}
              >
                {children}
              </a>
            );
          },
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8 border border-black/10 rounded-2xl shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-sm sm:text-base" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-[#1e293b] text-white" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="p-3.5 sm:p-4 text-xs sm:text-sm font-semibold tracking-wider" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="p-3.5 sm:p-4 border-t border-black/10 text-gray-800 font-medium" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code
                  className="bg-black/5 text-gray-900 px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm border border-black/10 font-semibold"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-[#151515] text-white p-5 rounded-2xl overflow-x-auto font-mono text-xs sm:text-sm my-6 border border-white/10 shadow-inner">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          hr: ({ node, ...props }) => (
            <hr className="my-10 border-t border-black/10" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
