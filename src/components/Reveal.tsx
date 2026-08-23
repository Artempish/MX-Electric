'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger in milliseconds — use on siblings to cascade them in */
  delay?: number;
  /** Direction the element travels from */
  from?: 'up' | 'left' | 'right' | 'scale';
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

/**
 * Reveals its children as they scroll into view.
 *
 * The children are server-rendered and always present in the HTML — this
 * only toggles a class, so nothing is hidden from crawlers or from
 * visitors without JavaScript (the hidden state is gated behind the `js`
 * class that layout.tsx sets, and disabled entirely under
 * prefers-reduced-motion).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support: show everything immediately.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      // Fire slightly before the element is fully on screen
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn('reveal', `reveal-${from}`, className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
