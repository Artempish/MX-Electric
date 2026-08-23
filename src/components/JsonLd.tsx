/**
 * Renders schema.org JSON-LD. Server-rendered, so it is in the HTML
 * source for crawlers with no JavaScript execution required.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is generated from local data files, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
