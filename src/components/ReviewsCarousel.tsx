'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Review } from '@/data/reviews';
import { ReviewCard } from '@/components/ReviewCard';
import { cn } from '@/lib/cn';

/**
 * Scroll-snap carousel. Every review is rendered in the markup (this
 * component is server-rendered on first paint), so the quotes are in the
 * HTML source whether or not JavaScript runs — the arrows and dots are
 * progressive enhancement over a plain horizontal scroller.
 */
export function ReviewsCarousel({
  reviews,
  tone = 'dark',
}: {
  reviews: Review[];
  tone?: 'light' | 'dark';
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  // Autoplay stops for good once the visitor takes control
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    setPaused(true);
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[index] as HTMLElement | undefined;
    if (item) {
      track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  // Gentle autoplay. Pauses on hover, focus and touch, never runs for
  // visitors who asked for reduced motion, and stops permanently once
  // someone uses the dots or arrows.
  useEffect(() => {
    if (paused) return;
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % reviews.length;
        const track = trackRef.current;
        const item = track?.children[next] as HTMLElement | undefined;
        if (track && item) {
          track.scrollTo({
            left: item.offsetLeft - track.offsetLeft,
            behavior: 'smooth',
          });
        }
        return next;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [paused, reviews.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const left = track.scrollLeft + track.offsetLeft;
      let closest = 0;
      let min = Infinity;
      children.forEach((child, i) => {
        const distance = Math.abs(child.offsetLeft - left);
        if (distance < min) {
          min = distance;
          closest = i;
        }
      });
      setActive(closest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const dark = tone === 'dark';

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onTouchStart={() => setPaused(true)}
    >
      <ul
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <li
            key={review.author + review.title}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <ReviewCard review={review} tone={tone} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.author}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Show review ${i + 1} of ${reviews.length}`}
              aria-current={i === active}
              className={cn(
                'h-2 rounded-full transition-all',
                i === active
                  ? 'w-6 bg-volt-400'
                  : dark
                    ? 'w-2 bg-white/25 hover:bg-white/50'
                    : 'w-2 bg-ink-200 hover:bg-ink-400',
              )}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          {(
            [
              ['Previous reviews', Math.max(0, active - 1), 'm15 6-6 6 6 6'],
              [
                'Next reviews',
                Math.min(reviews.length - 1, active + 1),
                'm9 6 6 6-6 6',
              ],
            ] as const
          ).map(([label, target, path]) => (
            <button
              key={label}
              type="button"
              onClick={() => scrollToIndex(target)}
              aria-label={label}
              className={cn(
                'grid h-11 w-11 place-items-center rounded-lg border transition-colors',
                dark
                  ? 'border-white/20 text-white hover:border-volt-400 hover:text-volt-300'
                  : 'border-ink-200 text-ink-700 hover:border-ink-900',
              )}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={path} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
