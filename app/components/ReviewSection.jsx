'use client';

import { useState, useEffect } from 'react';

function StarDisplay({ rating, size = 'sm' }) {
  const stars = [1, 2, 3, 4, 5];
  const cls = size === 'lg' ? 'text-2xl' : 'text-base';
  return (
    <span className={`flex gap-0.5 ${cls}`} aria-label={`${rating} out of 5 stars`}>
      {stars.map((s) => (
        <span key={s} className={s <= rating ? 'text-yellow-400' : 'text-black/15'}>
          ★
        </span>
      ))}
    </span>
  );
}

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          aria-label={`Rate ${s} star${s > 1 ? 's' : ''}`}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(s)}
          className={`text-3xl transition-transform duration-100 hover:scale-110 ${
            s <= (hovered || value) ? 'text-yellow-400' : 'text-black/20'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function RatingBar({ label, count, total }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="w-10 text-right font-semibold text-black/70 shrink-0">{label}★</span>
      <div className="flex-1 h-2 rounded-full bg-black/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-black/50 text-xs shrink-0">{count}</span>
    </div>
  );
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ author: '', rating: 0, comment: '' });

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        setReviews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Aggregate stats
  const total = reviews.length;
  const avgRating = total > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  const countByStars = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: reviews.filter((r) => r.rating === s).length,
  }));

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!form.rating) {
      setError('Please select a star rating.');
      return;
    }
    if (!form.author.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!form.comment.trim()) {
      setError('Please write a short review.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      const newReview = await res.json();
      setReviews((prev) => [newReview, ...prev]);
      setForm({ author: '', rating: 0, comment: '' });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    'w-full border border-black/15 rounded-xl px-4 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 bg-white transition';

  return (
    <section id="reviews" className="w-full mt-16 mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2
          className="text-2xl sm:text-3xl font-bold text-black tracking-tight"
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          User Ratings & Reviews
        </h2>
        {total > 0 && (
          <span className="text-xs font-bold uppercase tracking-wider text-black/40 bg-black/5 px-3 py-1 rounded-full">
            {total} review{total !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Rating Summary */}
      <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 mb-10 shadow-sm">
        {total === 0 ? (
          <div className="text-center py-6">
            <p className="text-5xl mb-3">⭐</p>
            <p className="text-xl font-bold text-black mb-1">No ratings yet</p>
            <p className="text-sm text-black/50">Be the first to rate Devastate APK.</p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            {/* Average Score */}
            <div className="flex flex-col items-center shrink-0">
              <span className="text-7xl font-black text-black leading-none">
                {avgRating.toFixed(1)}
              </span>
              <StarDisplay rating={Math.round(avgRating)} size="lg" />
              <span className="text-xs text-black/40 mt-1 font-semibold">out of 5</span>
              <span className="text-xs text-black/40 font-semibold">{total} review{total !== 1 ? 's' : ''}</span>
            </div>

            {/* Star breakdown bars */}
            <div className="flex-1 w-full space-y-2">
              {countByStars.map(({ star, count }) => (
                <RatingBar key={star} label={star} count={count} total={total} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reviews List */}
      {!loading && total > 0 && (
        <div className="space-y-4 mb-10">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-black/10 p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm uppercase shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">{rev.author}</p>
                    <p className="text-black/40 text-xs">{rev.date}</p>
                  </div>
                </div>
                <StarDisplay rating={rev.rating} />
              </div>
              <p className="text-sm text-black/80 leading-relaxed mt-2">{rev.comment}</p>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <div className="py-8 text-center text-sm text-black/40">Loading reviews…</div>
      )}

      {/* Submit Review Form */}
      <div className="bg-[#EFECE6] rounded-3xl border border-black/10 p-6 sm:p-8 shadow-sm">
        <h3
          className="text-xl font-bold text-black mb-5"
          style={{ fontFamily: 'var(--font-heading), sans-serif' }}
        >
          {submitted ? '✅ Thank you for your review!' : 'Leave a Review'}
        </h3>

        {submitted ? (
          <div className="text-sm text-black/70 space-y-2">
            <p>Your review has been published.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-black font-bold underline text-xs"
            >
              Write another review
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Star Picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/60 mb-2">
                Your Rating *
              </label>
              <StarPicker
                value={form.rating}
                onChange={(v) => setForm((f) => ({ ...f, rating: v }))}
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/60 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Alex"
                value={form.author}
                maxLength={60}
                onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                className={inputClass}
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/60 mb-2">
                Your Review *
              </label>
              <textarea
                placeholder="Share your experience with Devastate APK…"
                value={form.comment}
                maxLength={500}
                rows={4}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
              <p className="text-xs text-black/30 mt-1">{form.comment.length}/500</p>
            </div>

            {error && (
              <p className="text-sm text-red-600 font-semibold">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-black text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition hover:bg-black/80 disabled:opacity-50"
            >
              {submitting ? 'Submitting…' : 'Submit Review'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
