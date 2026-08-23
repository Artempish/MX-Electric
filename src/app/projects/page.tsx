import type { Metadata } from 'next';
import { projects, projectCategories } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { SectionHeading } from '@/components/SectionHeading';
import { CTABand } from '@/components/CTABand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Recent Projects | Electrical Work in Champaign County',
  description:
    'Recent electrical work by MX Electric across Champaign, Urbana, Ogden and Central Illinois — panel upgrades, generators, rewires, EV chargers, lighting retrofits and new construction.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
        ])}
      />

      <PageHero
        eyebrow="Our work"
        title="Recent projects"
        subtitle="Before and after, with the city, the trade and the scope — so you can see the kind of work we actually do."
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' },
        ]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            title="Filter by service"
            eyebrow="Panels · generators · rewires · EV · lighting"
          />

          <p className="mx-auto mt-8 max-w-3xl rounded-md border-2 border-dashed border-brand-300 bg-brand-50/60 p-4 text-center text-sm leading-relaxed text-ink-700">
            <strong className="font-bold uppercase tracking-wide text-brand-700">
              [PLACEHOLDER GALLERY]
            </strong>{' '}
            Every project below is scaffolding, and every image is an empty slot.
            Replace the titles, blurbs, cities and photos with real MX Electric
            jobs before launch — and get written permission from the homeowner
            before publishing photos of their property.
          </p>

          <div className="mt-12">
            <ProjectGallery projects={projects} categories={projectCategories} />
          </div>
        </div>
      </section>

      <CTABand title="Want work like this at your place?" />
    </>
  );
}
