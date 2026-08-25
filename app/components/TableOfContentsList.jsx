'use client';

export default function TableOfContentsList({ items, headingTitle }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      // Calculate navbar height + comfortable padding offset
      const navbar = document.querySelector('header');
      const navHeight = navbar ? navbar.offsetHeight : 80;
      const offset = navHeight + 28; // Extra clearance below navbar

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', href);

      // Trigger rich pulse animation on heading and section
      const heading = element.querySelector('h2') || element;
      heading.classList.remove('toc-highlight-pulse');
      element.classList.remove('toc-section-pulse');

      // Force DOM reflow to restart animation reliably
      void heading.offsetWidth;

      heading.classList.add('toc-highlight-pulse');
      element.classList.add('toc-section-pulse');

      setTimeout(() => {
        heading.classList.remove('toc-highlight-pulse');
        element.classList.remove('toc-section-pulse');
      }, 2500);
    }
  };

  return (
    <div className="w-full bg-white border border-black/15 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-3.5 mb-3.5">
        <div className="flex items-center gap-2 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <h2 className="text-base sm:text-lg font-bold text-black uppercase tracking-wide">
            {headingTitle || "Table of Contents"}
          </h2>
        </div>
        <span className="text-[11px] font-bold text-black/60 bg-black/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          {items.length} Topics
        </span>
      </div>

      {/* Topics List */}
      <nav className="w-full">
        <ul className="space-y-1.5">
          {items.map((item, index) => {
            const itemNumber = (index + 1).toString().padStart(2, '0');

            return (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-black/5 transition-all duration-200 cursor-pointer"
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '26px',
                        minWidth: '32px',
                        backgroundColor: 'rgba(0, 0, 0, 0.06)',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        fontFamily: 'monospace',
                        color: '#4B5563',
                        marginRight: '14px',
                        flexShrink: 0
                      }}
                    >
                      {itemNumber}
                    </span>
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#111827',
                        lineHeight: '1.4'
                      }}
                      className="group-hover:text-black group-hover:font-semibold transition-all"
                    >
                      {item.title}
                    </span>
                  </div>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px', marginLeft: '12px' }}
                    className="shrink-0 text-black/30 group-hover:text-black group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
