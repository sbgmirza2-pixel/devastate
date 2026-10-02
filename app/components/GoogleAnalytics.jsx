'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ gaId }) {
  if (!gaId || gaId.trim() === '') return null;

  return (
    <>
      <Script
        strategy="lazyOnload" // 👈 Fixed: Main thread block nahi hoga
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="lazyOnload" // 👈 Fixed
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}