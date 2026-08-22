import React from 'react';

/**
 * Reusable JSON-LD script injector
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Generates MobileApplication / SoftwareApplication schema for APK pages
 */
export function generateApkSchema(apk = {}, siteUrl = 'https://thedevastate.com') {
  const downloadUrl = apk.downloadUrl?.startsWith('http')
    ? apk.downloadUrl
    : `${siteUrl}${apk.downloadUrl || '/download'}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: `${apk.appName || 'Devastate'} APK`,
    operatingSystem: 'ANDROID',
    applicationCategory: 'GameApplication',
    applicationSubCategory: apk.category || 'Simulation',
    fileSize: apk.size || '52.21 MB',
    softwareVersion: apk.version || '1.0',
    contentRating: 'Everyone',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: apk.rating || '4.8',
      ratingCount: '18995',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: apk.developer || 'Devastate DEV',
      url: siteUrl,
    },
    downloadUrl: downloadUrl,
    installUrl: downloadUrl,
    image: `${siteUrl}/Devastate-fav-icon.webp`,
    screenshot: [
      `${siteUrl}/pic1.webp`,
      `${siteUrl}/pic2.webp`,
      `${siteUrl}/pic3.webp`,
      `${siteUrl}/pic4.webp`,
    ],
    description:
      'Download Devastate APK for Android. Anime-style simulation game with 2D visuals, interactive story dialogue, tasks, items, and character customization.',
  };
}

/**
 * Generates Organization & WebSite schema with search capability
 */
export function generateWebSiteSchema(siteSettings = {}) {
  const siteUrl = siteSettings.siteUrl || 'https://thedevastate.com';
  const siteName = siteSettings.siteName || 'Devastate APK';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/Devastate-fav-icon.webp`,
          caption: siteName,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteSettings.contactEmail || 'contact@thedevastate.com',
          contactType: 'customer support',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteSettings.siteDescription || '',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
        inLanguage: siteSettings.language || 'en-US',
      },
    ],
  };
}

/**
 * Generates Article / BlogPosting schema for blog posts
 */
export function generateArticleSchema(post, siteUrl = 'https://thedevastate.com') {
  if (!post) return null;

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage?.startsWith('http')
    ? post.coverImage
    : `${siteUrl}${post.coverImage || '/picblog.webp'}`;

  const publishedDate = post.date ? new Date(post.date).toISOString() : new Date().toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.excerpt || post.title,
    image: [imageUrl],
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Devastate Editorial Team',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Devastate APK',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Devastate-fav-icon.webp`,
      },
    },
    inLanguage: 'en-US',
  };
}

/**
 * Generates FAQPage schema from Q&A pairs
 */
export function generateFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items = [], siteUrl = 'https://thedevastate.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}
