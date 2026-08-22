import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';
import { verifySession } from '@/lib/auth';

// DELETE /api/reviews/[id]  — admin only: delete a review
export async function DELETE(request, { params }) {
  const isAdmin = verifySession(request);
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const reviews = readData('reviews.json') || [];
  const updated = reviews.filter((r) => r.id !== id);
  writeData('reviews.json', updated);

  return NextResponse.json({ success: true });
}
