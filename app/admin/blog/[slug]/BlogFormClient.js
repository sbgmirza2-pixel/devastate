'use client';

import BlogForm from '../BlogForm';

export default function BlogFormClient({ initialData }) {
  return <BlogForm initialData={initialData} isEdit={true} />;
}
