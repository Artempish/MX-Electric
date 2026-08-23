'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { cn } from '@/lib/cn';

/**
 * A project plus its before/after image URLs, resolved on the server
 * (this component is a client component and cannot touch the
 * filesystem). Either URL may be null until the photo is supplied.
 */
export type GalleryProject = Project & {
  beforeSrc: string | null;
  afterSrc: string | null;
};

function Shot({ src, label }: { src: string | null; label: string }) {
  if (!src) {
    return (
      <PlaceholderImage label={label} aspect="aspect-[4/3]" rounded="rounded-none" />
    );
  }
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={src}
        alt={label.replace(/^\[PLACEHOLDER:\s*/i, '').replace(/\]$/, '')}
        fill
        sizes="(max-width: 640px) 50vw, 20vw"
        className="object-cover"
      />
    </div>
  );
}

/**
 * Filterable recent-work grid. All projects render on the server; the
 * filter only hides cards client-side, so every blurb stays in the HTML
 * source for SEO.
 */
export function ProjectGallery({
  projects,
  categories,
}: {
  projects: GalleryProject[];
  categories: string[];
}) {
  const [active, setActive] = useState('All');
  const filters = ['All', ...categories];

  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by service">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-md px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider transition-colors sm:text-xs',
                active === filter
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-900/20'
                  : 'bg-ink-100 text-ink-700 hover:bg-ink-200',
              )}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const visible = active === 'All' || project.category === active;
          return (
            <article
              // Re-keying on the active filter replays the entrance
              // animation for whichever cards are now showing.
              key={`${active}-${project.slug}`}
              hidden={!visible}
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
              className="flex animate-fade-up flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Before / after slots */}
              <div className="grid grid-cols-2 gap-px bg-ink-100">
                <Shot src={project.beforeSrc} label={project.beforeAlt} />
                <Shot src={project.afterSrc} label={project.afterAlt} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                  <span className="rounded bg-brand-600 px-2 py-1 text-white">
                    {project.category}
                  </span>
                  <span className="rounded bg-ink-100 px-2 py-1 text-ink-600">
                    {project.trade}
                  </span>
                  <span className="text-ink-400">{project.city}</span>
                </div>

                <h3 className="mt-3 font-display text-base font-extrabold uppercase leading-snug tracking-wide text-ink-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {project.scope}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {project.blurb}
                </p>
                <p className="mt-auto pt-4 text-xs text-ink-400">
                  Completed: {project.completed}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
