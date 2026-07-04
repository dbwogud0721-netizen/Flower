"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Path under /public, e.g. "/images/flowers/rose_thumbnail.png". This is the exact
   * filename ChatGPT should deliver — do not substitute a generated image for it. */
  src: string;
  alt: string;
  /** "photo" shows a labeled placeholder box until the real file lands.
   *  "icon" shows a small neutral blank swatch (no glyph — icons are ChatGPT's job too). */
  variant?: "photo" | "icon";
  /** Fill the parent (use with a relatively-positioned wrapper) instead of intrinsic sizing. */
  fill?: boolean;
  wrapperClassName?: string;
}

function fileNameFromSrc(src: string) {
  return src.split("/").pop() ?? src;
}

/**
 * Design-system Image primitive. Never render hand-drawn icons/illustrations here —
 * this component only ever shows a real file from /public/images, or a neutral
 * placeholder labeled with the exact filename ChatGPT needs to produce.
 *
 * Probes the src with a detached Image() before ever mounting a real <img>, so a
 * missing file never flashes the browser's native broken-image icon — relying on
 * the <img> tag's own onError can lose the race against React attaching the
 * listener when a local 404 resolves near-instantly.
 */
function Image({ src, alt, variant = "photo", fill, wrapperClassName, className, style, ...props }: ImageProps) {
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading");
  const label = fileNameFromSrc(src);

  React.useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setStatus("loaded");
    };
    probe.onerror = () => {
      if (!cancelled) setStatus("error");
    };
    probe.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (status !== "loaded") {
    if (variant === "icon") {
      return (
        <span
          role="img"
          aria-label={alt}
          title={status === "error" ? `missing: ${label}` : undefined}
          style={style}
          className={cn(
            "inline-block shrink-0 rounded-full bg-muted/70",
            fill ? "absolute inset-0" : "size-6",
            wrapperClassName,
            className
          )}
        />
      );
    }
    return (
      <div
        role="img"
        aria-label={alt}
        style={style}
        className={cn(
          "flex flex-col items-center justify-center gap-1 border border-dashed border-foreground/15 bg-muted/60 px-2 text-center",
          fill ? "absolute inset-0" : "aspect-square w-full",
          wrapperClassName,
          className
        )}
      >
        {status === "error" && <span className="text-[10.5px] font-medium text-muted-foreground">{label}</span>}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={style}
      className={cn(fill ? "absolute inset-0 size-full object-cover" : undefined, className)}
      {...props}
    />
  );
}

export { Image };
