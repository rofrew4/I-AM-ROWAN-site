import Link from "next/link";
import { ReactNode } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getImageMeta } from "@/lib/images";

/** Thumbnails are hidden below md — tell the browser not to fetch on mobile. */
const THUMB_SIZES = "(max-width: 767px) 0px, 180px";
const THUMB_WIDTH = 180;

type MediaItem = {
  src: string;
  alt: string;
  contain?: boolean;
  priority?: boolean;
};

export interface EntryProps {
  logo?: string;
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
  imageSide?: "left" | "right";
  title: string;
  href?: string;
  description?: ReactNode;
  url?: string;
  linkLabel?: string;
}

function InlinePhoto({
  src,
  alt,
  contain = true,
  priority = false,
}: MediaItem) {
  const meta = getImageMeta(src);
  const displayHeight = Math.round((meta.height / meta.width) * THUMB_WIDTH);

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      sizes={THUMB_SIZES}
      priority={priority}
      className={`shrink-0 ${
        contain ? "object-contain" : "object-cover"
      }`}
      style={{ width: THUMB_WIDTH, height: displayHeight }}
    />
  );
}

function PhotoStack({ items }: { items: MediaItem[] }) {
  return (
    <div className="flex shrink-0 flex-col gap-4">
      {items.map((item) => (
        <InlinePhoto key={item.src} {...item} />
      ))}
    </div>
  );
}

export function Entry({
  logo,
  image,
  imageAlt = "",
  images,
  imageSide = "left",
  title,
  href,
  description,
  url,
  linkLabel,
}: EntryProps) {
  const thumb = image ?? logo;
  const thumbContain = !image;

  const media: MediaItem[] =
    images?.map((item) => ({ ...item, contain: true })) ??
    (thumb ? [{ src: thumb, alt: imageAlt, contain: thumbContain }] : []);

  const left =
    media.length >= 2
      ? media[0]
      : media.length === 1 && imageSide === "left"
        ? media[0]
        : null;
  const right =
    media.length >= 2
      ? media[1]
      : media.length === 1 && imageSide === "right"
        ? media[0]
        : null;

  return (
    <article className="flex items-start gap-5 md:gap-6">
      {left && (
        <div className="hidden shrink-0 md:block">
          <PhotoStack items={[left]} />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <h2 className="text-[20px] font-semibold leading-snug text-ink">
          {href ? (
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && (
          <div className="mt-1 text-[16px] leading-relaxed text-muted">
            {description}
          </div>
        )}
        {url && linkLabel && (
          <p className="mt-2 text-[16px]">
            <Link
              href={url}
              {...(url.startsWith("/")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              → {linkLabel}
            </Link>
          </p>
        )}
        {url && !linkLabel && (
          <p className="mt-1 text-[14px] lowercase text-muted">{url}</p>
        )}
      </div>

      {right && (
        <div className="hidden shrink-0 md:block">
          <PhotoStack items={[right]} />
        </div>
      )}
    </article>
  );
}
