// Re-exports from blogPosts.json so all existing imports work without changes
const posts = require('../data/blogPosts.json');

/** @type {Array<{id: string, slug: string, title: string, category: string, date: string, readTime: string, excerpt: string, content: string}>} */
export const blogsList = posts;

export default blogsList;
