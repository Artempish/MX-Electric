'use client';

import { useState } from 'react';
import type { Video } from '@/data/videos';
import { cn } from '@/lib/cn';

/**
 * Click-to-load YouTube embed (a "facade").
 *
 * Nothing from YouTube is requested until the visitor presses play — no
 * third-party script on first paint, no cookies set for people who never
 * watch, and no ~500KB of player weight counted against LCP. The poster
 * is drawn locally rather than pulled from YouTube's thumbnail CDN, so
 * the panel costs zero network requests at rest.
 */
export function VideoEmbed({
  video,
  className,
}: {
  video: Video;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-lg bg-ink-950 shadow-lift',
        className,
      )}
    >
      {playing ? (
        <iframe
          // youtube-nocookie keeps tracking off until playback starts
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title}`}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          {/* Branded poster — bolt motif, no external request */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(115deg, #ffd400 0 2px, transparent 2px 24px)',
            }}
          />
          <span className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-600 shadow-lg transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              className="ml-1 h-7 w-7 text-white sm:h-9 sm:w-9"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
          <span className="relative px-6 text-center">
            <span className="block font-display text-lg font-extrabold uppercase tracking-wider text-white sm:text-xl">
              {video.title}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-volt-400">
              Watch the video
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
