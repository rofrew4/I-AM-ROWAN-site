import { OptimizedImage } from "@/components/OptimizedImage";

const HOME_PHOTO_WIDTH = 150;
const HOME_PHOTO_HEIGHT = Math.round(HOME_PHOTO_WIDTH * (4 / 3));
/** Request 3× display width for retina + tight crops without upscaling blur. */
const HOME_PHOTO_SIZES = `(max-width: 767px) 0px, ${HOME_PHOTO_WIDTH * 3}px`;

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

function Photo({
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
      ? `(max-width: 767px) 0px, ${Math.round(HOME_PHOTO_WIDTH * 3 * zoom)}px`
      : HOME_PHOTO_SIZES;

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-lg"
      style={{ width: HOME_PHOTO_WIDTH, height: HOME_PHOTO_HEIGHT }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover ${position}`}
        style={{
          width: HOME_PHOTO_WIDTH,
          height: HOME_PHOTO_HEIGHT,
          transform: zoom != null ? `scale(${zoom})` : undefined,
        }}
      />
    </div>
  );
}

export function HomePhotos() {
  return (
    <div className="hidden shrink-0 flex-col gap-4 md:flex">
      <Photo {...photos[0]} />
      <Photo {...photos[1]} />
    </div>
  );
}

export function HomePhotoRight() {
  return (
    <div className="hidden shrink-0 flex-col gap-4 md:flex">
      <Photo {...photos[2]} />
      <Photo {...photos[3]} />
    </div>
  );
}
