import Image from "next/image";
import React from "react";
import { getBlurPath } from "../../utils/img-blur-path";

type ComponentProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  width: number;
  height: number;
};

function CloudinaryImage({
  src,
  alt,
  priority,
  width,
  height,
}: ComponentProps) {
  return (
    <Image
      objectFit="cover"
      priority={priority || false}
      alt={alt || ""}
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={getBlurPath(src)}
    />
  );
}

export { CloudinaryImage };
