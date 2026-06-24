import Image from "next/image";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getImageMeta } from "@/lib/images";

const HERO_PHOTO_WIDTH = 220;
const HERO_PHOTO_HEIGHT = Math.round(HERO_PHOTO_WIDTH * (4 / 3));
const HERO_PHOTO_SIZES = `(max-width: 767px) 0px, ${HERO_PHOTO_WIDTH * 3}px`;

const photos = [
  {
    src: "/images/home-1.webp",
    alt: "Rowan Frew with family in a cathedral hallway",
    priority: true,
  },
  {
    src: "/images/home-2.webp",
    alt: "Rowan Frew sitting on the grass with a friend",
    priority: false,
  },
  {
    src: "/images/home-presenting.webp",
    alt: "Rowan Frew giving a presentation",
    priority: false,
  },
  {
    src: "/images/home-3.webp",
    alt: "Rowan Frew by the fountain at the World War II Memorial",
    priority: false,
    position: "object-[50%_38%]",
    zoom: 1.45,
  },
  {
    src: "/images/home-4.webp",
    alt: "Rowan Frew with friends at a neighborhood block party",
    priority: false,
  },
] as const;

function HeroPhoto({
  src,
  alt,
  priority = false,
  position = "object-center",
  zoom,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  position?: string;
  zoom?: number;
}) {
  const sizes =
    zoom != null
      ? `(max-width: 767px) 0px, ${Math.round(HERO_PHOTO_WIDTH * 3 * zoom)}px`
      : HERO_PHOTO_SIZES;

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-lg"
      style={{ width: HERO_PHOTO_WIDTH, height: HERO_PHOTO_HEIGHT }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover ${position}`}
        style={{
          width: HERO_PHOTO_WIDTH,
          height: HERO_PHOTO_HEIGHT,
          transform: zoom != null ? `scale(${zoom})` : undefined,
        }}
      />
    </div>
  );
}

function StackPhoto({
  src,
  alt,
  priority = false,
  position = "object-center",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  position?: string;
}) {
  const meta = getImageMeta(src);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
      <Image
        src={meta.src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 320px"
        quality={90}
        placeholder="blur"
        blurDataURL={meta.blurDataURL}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={`object-cover ${position}`}
      />
    </div>
  );
}

export function HomePressStackPhotos() {
  return (
    <div className="flex flex-col gap-4">
      <StackPhoto {...photos[1]} />
      <StackPhoto {...photos[2]} />
    </div>
  );
}

export function HomePhotoRight() {
  return (
    <div className="hidden shrink-0 flex-col gap-4 md:flex">
      <HeroPhoto {...photos[3]} />
      <HeroPhoto {...photos[4]} />
    </div>
  );
}
