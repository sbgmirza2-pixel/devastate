import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/dataUtils';

// GET /api/reviews  — fetch all approved reviews
export async function GET() {
  try {
    const reviews = readData('reviews.json') || [];
    // Only return approved ones publicly
    const approved = reviews.filter((r) => r.approved !== false);
    return NextResponse.json(approved);
  } catch {
    return NextResponse.json([]);
  }
}

// POST /api/reviews  — submit a new review (pending approval by default)
export async function POST(request) {
  try {
    const body = await request.json();
    const { author, rating, comment } = body;

    if (!author || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
    }

    const reviews = readData('reviews.json') || [];
    const newReview = {
      id: Date.now().toString(),
      author: String(author).trim().slice(0, 60),
      rating: ratingNum,
      comment: String(comment).trim().slice(0, 500),
      date: new Date().toISOString().split('T')[0],
      approved: true, // auto-approve; set to false if you want manual moderation
    };

    reviews.unshift(newReview);
    writeData('reviews.json', reviews);

    return NextResponse.json(newReview, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}
