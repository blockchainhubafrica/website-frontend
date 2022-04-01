import Image from "next/image";
import React from "react";
import { getBlurPath } from "../../utils/img-blur-path";

type ComponentProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  width: number;
  height: number;
  quality?: number;
  unoptimized?: boolean;
};

function CloudinaryImage({
  src,
  alt,
  priority,
  width,
  height,
  quality,
  unoptimized,
}: ComponentProps) {
  return (
    <Image
      unoptimized={unoptimized || false}
      objectFit="cover"
      priority={priority || false}
      alt={alt || ""}
      src={src}
      quality={quality}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={getBlurPath(src)}
    />
  );
}

export { CloudinaryImage };
