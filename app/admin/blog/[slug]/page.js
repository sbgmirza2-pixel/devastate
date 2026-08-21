import { notFound } from 'next/navigation';
import { readData } from '@/lib/dataUtils';
import BlogFormClient from './BlogFormClient';

export default async function EditBlogPost({ params }) {
  const { slug } = await params;

  let posts;
  try {
    posts = readData('blogPosts.json');
  } catch {
    notFound();
  }

  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogFormClient initialData={post} />;
}
