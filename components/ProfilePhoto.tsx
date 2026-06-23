"use client";

import Link from "next/link";
import { useState } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

interface ProfilePhotoProps {
  size: 96 | 48;
}

export function ProfilePhoto({ size }: ProfilePhotoProps) {
  const [missing, setMissing] = useState(false);

  const className =
    size === 96
      ? "h-24 w-24 rounded-full object-cover"
      : "h-12 w-12 rounded-full object-cover";

  return (
    <Link href="/" aria-label="Home">
      {missing ? (
        <div
          className={`${className} bg-placeholder`}
          style={{ width: size, height: size }}
        />
      ) : (
        <OptimizedImage
          src="/images/profile.webp"
          alt="Rowan Frew"
          sizes={`${size}px`}
          priority={size === 96}
          className={className}
          style={{ width: size, height: size }}
          onError={() => setMissing(true)}
        />
      )}
    </Link>
  );
}
