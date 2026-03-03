"use client";

import type React from "react";
import { useState } from "react";

type RoleImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src?: string;
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = "/characters/placeholder.svg";

export default function RoleImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt, ...props }: RoleImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = !src || hasError ? fallbackSrc : src;

  return (
    <img
      src={resolvedSrc}
      alt={alt || ""}
      loading={props.loading ?? "lazy"}
      decoding={props.decoding ?? "async"}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
      {...props}
    />
  );
}
