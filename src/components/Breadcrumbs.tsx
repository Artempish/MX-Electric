import Link from 'next/link';

export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-400">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-semibold text-ink-600">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-brand-600">
                    {item.name}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
