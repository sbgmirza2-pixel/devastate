const internalHosts = new Set([
  'devastate.vercel.app',
  'thedevastate.com',
  'www.thedevastate.com',
]);

export function normalizeBlogContent(content) {
  return content.replace(/\]\((https?:\/\/[^\s)]+)\)/g, (match, href) => {
    try {
      const url = new URL(href);
      if (!internalHosts.has(url.host)) return match;
      return `](${url.pathname}${url.search}${url.hash})`;
    } catch {
      return match;
    }
  });
}