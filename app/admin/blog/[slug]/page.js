import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/database';
import BlogFormClient from './BlogFormClient';

export default async function EditBlogPost({ params }) {
  const { slug } = await params;

  const post = await getBlogPost(slug);
  if (!post) notFound();

  return <BlogFormClient initialData={post} />;
}
