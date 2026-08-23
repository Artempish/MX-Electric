/** Tiny className joiner — no runtime dependency needed for this site. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
