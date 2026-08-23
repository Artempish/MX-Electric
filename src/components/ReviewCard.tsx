import type { Review } from '@/data/reviews';
import { StarIcon } from '@/components/Icons';
import { cn } from '@/lib/cn';

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      className={cn('flex gap-0.5 text-volt-400', className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={cn('h-4 w-4', i >= rating && 'text-ink-200')}
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  review,
  tone = 'light',
  className,
}: {
  review: Review;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const dark = tone === 'dark';
  return (
    <figure
      className={cn(
        'flex h-full flex-col rounded-2xl border p-6 sm:p-7',
        dark
          ? 'border-white/10 bg-white/5 text-ink-200'
          : 'border-ink-100 bg-white text-ink-600 shadow-card',
        className,
      )}
    >
      <StarRating rating={review.rating} />
      <h3
        className={cn(
          'mt-4 font-display text-lg font-bold leading-snug',
          dark && 'text-white',
        )}
      >
        &ldquo;{review.title}&rdquo;
      </h3>
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed">
        {review.quote}
      </blockquote>
      <figcaption
        className={cn(
          'mt-5 flex items-center gap-3 border-t pt-4 text-sm font-bold',
          dark ? 'border-white/10 text-white' : 'border-ink-100 text-ink-900',
        )}
      >
        <span
          aria-hidden
          className={cn(
            'grid h-9 w-9 place-items-center rounded-full font-display text-sm',
            dark ? 'bg-volt-400 text-ink-950' : 'bg-ink-900 text-volt-300',
          )}
        >
          {review.author.charAt(0)}
        </span>
        {review.author}
      </figcaption>
    </figure>
  );
}
