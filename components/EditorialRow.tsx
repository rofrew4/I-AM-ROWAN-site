import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { getImageMeta } from "@/lib/images";

export const PLACEHOLDER_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AJOk6Vb6fp0FlbRiOJBhR7nJqT//Z";

export const EDITORIAL_IMAGE_WIDTH = 640;
export const EDITORIAL_IMAGE_HEIGHT = 427;
export const EDITORIAL_IMAGE_SIZES = "(max-width: 768px) 100vw, 640px";

export type EditorialLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type EditorialEntry = {
  title: string;
  titleHref?: string;
  image?: string;
  imageAlt?: string;
  imageHref?: string;
  imagePosition?: string;
  imageAspect?: string;
  imageFit?: "cover" | "contain";
  imageScale?: number;
  description: ReactNode;
  link?: EditorialLink;
  url?: string;
  headingLevel?: "h1" | "h2";
};

function resolveEditorialImage(src: string) {
  try {
    const meta = getImageMeta(src);
    return { src: meta.src, blurDataURL: meta.blurDataURL };
  } catch {
    return null;
  }
}

export function EditorialImage({
  src,
  alt,
  priority = false,
  href,
  position = "object-center",
  aspectClass = "aspect-[3/2]",
  fit = "cover",
  scale = 1,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  href?: string;
  position?: string;
  aspectClass?: string;
  fit?: "cover" | "contain";
  scale?: number;
}) {
  const resolved = resolveEditorialImage(src);

  if (!resolved) {
    return (
      <div
        className={`relative flex ${aspectClass} items-center justify-center overflow-hidden rounded-lg bg-gray-100`}
      >
        <span className="text-sm text-gray-400">Photo needed</span>
      </div>
    );
  }

  const image = (
    <div
      className={`relative overflow-hidden rounded-lg ${scale < 1 ? "ml-auto" : ""}`}
      style={{ width: scale < 1 ? `${scale * 100}%` : "100%" }}
    >
      <div className={`relative ${aspectClass} overflow-hidden rounded-lg`}>
      <Image
        src={resolved.src}
        alt={alt}
        fill
        sizes={EDITORIAL_IMAGE_SIZES}
        priority={priority}
        quality={90}
        placeholder="blur"
        blurDataURL={resolved.blurDataURL}
        className={`${
          fit === "contain" ? "object-contain" : "object-cover"
        } transition-transform duration-300 hover:scale-[1.02] ${position}`}
      />
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label={`Visit ${alt}`}
      >
        {image}
      </a>
    );
  }

  return image;
}

function EditorialContent({ entry }: { entry: EditorialEntry }) {
  const Heading = entry.headingLevel ?? "h2";

  return (
    <>
      <Heading className="text-2xl font-semibold tracking-tight md:text-3xl">
        {entry.titleHref ? (
          <a
            href={entry.titleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink no-underline hover:underline"
          >
            {entry.title}
          </a>
        ) : (
          entry.title
        )}
      </Heading>
      <div className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        {entry.description}
      </div>
      {entry.link && (
        <p className="mt-4">
          <Link
            href={entry.link.href}
            className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 transition-colors hover:text-gray-600"
            {...(entry.link.external !== false && !entry.link.href.startsWith("/")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            → {entry.link.label}
          </Link>
        </p>
      )}
      {entry.url && (
        <p className="mt-2 text-sm lowercase text-gray-500">{entry.url}</p>
      )}
    </>
  );
}

export function EditorialRow({
  entry,
  index,
  priorityImage = false,
  compact = false,
}: {
  entry: EditorialEntry;
  index: number;
  priorityImage?: boolean;
  compact?: boolean;
}) {
  if (!entry.image) {
    return (
      <section className="py-20">
        <div className="max-w-md">
          <EditorialContent entry={entry} />
        </div>
      </section>
    );
  }

  const imageRight = index % 2 === 1;

  return (
    <section
      className={`grid grid-cols-1 items-center md:grid-cols-2 ${
        compact ? "gap-8 py-8" : "gap-12 py-20"
      } ${
        imageRight ? "[&>*:first-child]:md:order-2 [&>*:last-child]:md:order-1" : ""
      }`}
    >
      <EditorialImage
        src={entry.image}
        alt={entry.imageAlt ?? ""}
        priority={priorityImage}
        href={entry.imageHref}
        position={entry.imagePosition ?? "object-center"}
        aspectClass={entry.imageAspect ?? "aspect-[3/2]"}
        fit={entry.imageFit ?? "cover"}
        scale={entry.imageScale ?? 1}
      />
      <div className="max-w-md">
        <EditorialContent entry={entry} />
      </div>
    </section>
  );
}
