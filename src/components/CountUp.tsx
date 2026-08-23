'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number up when it first scrolls into view.
 *
 * Values that are not numeric — "Veteran", "[PLACEHOLDER]" — render
 * unchanged, so the trust band still works while the real figures are
 * outstanding. The final value is what server-renders, so the correct
 * number is always in the HTML source.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  // "25+" -> prefix "", number 25, suffix "+"
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ''));
    if (!Number.isFinite(target)) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);

          const duration = 1100;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            // easeOutExpo — fast start, gentle settle
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.round(target * eased);
            setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
            if (progress < 1) frame = requestAnimationFrame(tick);
          };

          setDisplay(`${prefix}0${suffix}`);
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `match` is derived from `value` and stable across renders for a
    // given value, so `value` is the real dependency.
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
