import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const typographyVariants = cva("", {
  variants: {
    variant: {
      hero: "font-serif-display text-[46px] leading-[1.05] font-semibold",
      display: "font-serif-display text-[28px] leading-tight font-semibold",
      h1: "font-serif-display text-[22px] leading-tight font-semibold",
      h2: "font-serif-display text-[18px] leading-snug font-semibold",
      h3: "font-serif-display text-[15px] leading-snug font-semibold",
      title: "text-[14.5px] leading-snug font-medium",
      body: "text-[13.5px] leading-relaxed font-normal",
      bodySm: "text-[12.5px] leading-relaxed font-normal",
      caption: "text-[11.5px] leading-normal font-normal",
      overline: "text-[11px] font-medium tracking-[0.3em] uppercase",
      label: "text-[13px] leading-normal font-medium",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-primary",
      inverse: "text-background",
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "default",
  },
});

const defaultElement: Record<string, React.ElementType> = {
  hero: "h1",
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  title: "p",
  body: "p",
  bodySm: "p",
  caption: "span",
  overline: "span",
  label: "span",
};

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

function Typography({ as, variant = "body", tone, className, ...props }: TypographyProps) {
  const Component = as ?? defaultElement[variant ?? "body"] ?? "p";
  return (
    <Component
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant, tone, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
