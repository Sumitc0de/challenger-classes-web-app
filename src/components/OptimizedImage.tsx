"use client";
import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  imagekitId?: string;
}

export default function OptimizedImage({
  src,
  alt,
  title,
  caption,
  imagekitId = "akpxh7r76", // default from user's other files
  className,
  ...props
}: OptimizedImageProps) {
  
  const loader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
    const q = quality || 80;
    const path = src.startsWith('/') ? src.slice(1) : src;
    // Format requested by user: https://ik.imagekit.io/<your_id>/formulas/<subject>/<image-name>.webp?w=800&q=80&f=webp
    return `https://ik.imagekit.io/${imagekitId}/${path}?w=${width}&q=${q}`;
  };

  const imgElement = (
    <Image
      loader={loader}
      src={src}
      alt={alt}
      title={title || alt}
      loading="lazy"
      className={className}
      {...props}
    />
  );

  if (caption) {
    return (
      <figure className="m-0 p-0 relative w-full h-full flex flex-col">
        {imgElement}
        {/* Caption is visually hidden or absolute to not break aspect-video parents */}
        <figcaption className="sr-only">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return imgElement;
}
