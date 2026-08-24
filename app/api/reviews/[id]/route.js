import { NextResponse } from 'next/server';
import { getCurrentAdmin } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// DELETE /api/reviews/[id]  — admin only: delete a review
export async function DELETE(request, { params }) {
  const isAdmin = await getCurrentAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) return NextResponse.json({ error: 'Invalid review id' }, { status: 400 });
  await (await getDatabase()).collection('reviews').deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ success: true });
}
