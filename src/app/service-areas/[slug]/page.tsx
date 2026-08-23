import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceAreas, getServiceArea } from '@/data/serviceAreas';
import { ServiceAreaTemplate } from '@/components/ServiceAreaTemplate';
import { business } from '@/data/business';

type Params = { params: Promise<{ slug: string }> };

/**
 * Per-city landing pages, all rendered through one shared template.
 * Adding a town = adding an entry to src/data/serviceAreas.ts.
 */
export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  return {
    title: `Electrician in ${area.city}, ${area.state} | ${business.shortName}`,
    description: `${area.intro} Veteran-owned, licensed and insured, serving ${area.city} since ${business.foundedYear}. Call ${business.phone.display}.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();
  return <ServiceAreaTemplate area={area} />;
}
