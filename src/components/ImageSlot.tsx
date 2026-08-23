import Image from 'next/image';
import { resolveAsset } from '@/lib/media';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { cn } from '@/lib/cn';

type Props = {
  /** Asset name under /public/images, without extension */
  name: string;
  /** Alt text for the real photo, and the label while it is missing */
  label: string;
  /** Tailwind aspect class — reserves the space either way, so no CLS */
  aspect?: string;
  className?: string;
  rounded?: string;
  tone?: 'light' | 'dark';
  /** Set on the LCP image only (the homepage hero) */
  priority?: boolean;
  /** Responsive sizes hint for next/image */
  sizes?: string;
  labelPosition?: 'center' | 'bottom';
  /** Renders the image edge-to-edge behind content */
  fillParent?: boolean;
};

/**
 * One image slot. Renders the real photo when the file exists in
 * /public/images, and a labeled placeholder at the same aspect ratio
 * when it does not — so the layout is identical before and after the
 * photography arrives.
 */
export function ImageSlot({
  name,
  label,
  aspect = 'aspect-[4/3]',
  className,
  rounded = 'rounded-2xl',
  tone = 'light',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  labelPosition = 'center',
  fillParent = false,
}: Props) {
  const src = resolveAsset(name);

  if (!src) {
    return (
      <PlaceholderImage
        label={label}
        aspect={fillParent ? 'aspect-auto' : aspect}
        className={cn(fillParent && 'h-full', className)}
        rounded={rounded}
        tone={tone}
        labelPosition={labelPosition}
      />
    );
  }

  // Alt text should describe the photo, not carry the placeholder
  // scaffolding, so strip the "[PLACEHOLDER: ...]" wrapper if present.
  const alt = label.replace(/^\[PLACEHOLDER:\s*/i, '').replace(/\]$/, '');

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        fillParent ? 'h-full w-full' : cn('w-full', aspect),
        rounded,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
