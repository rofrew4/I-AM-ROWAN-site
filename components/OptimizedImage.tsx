import Image, { type ImageProps } from "next/image";
import { getImageMeta } from "@/lib/images";

type OptimizedImageProps = Omit<
  ImageProps,
  "src" | "width" | "height" | "blurDataURL" | "placeholder"
> & {
  src: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
};

export function OptimizedImage({
  src,
  alt,
  sizes,
  priority = false,
  quality = 90,
  className,
  ...rest
}: OptimizedImageProps) {
  const meta = getImageMeta(src);

  return (
    <Image
      src={meta.src}
      alt={alt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      blurDataURL={meta.blurDataURL}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      {...rest}
    />
  );
}
