"use client";

import React, { useEffect, useRef, useState } from "react";
import "./float-up.css";

export type FloatDirection = "up" | "down" | "left" | "right" | "none";

export interface FloatUpProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Delay before animation starts in milliseconds (default: 0) */
  delay?: number;
  /** Duration of transition in milliseconds (default: 650) */
  duration?: number;
  /** Distance in pixels for translation (default: 16) */
  distance?: number;
  /** Initial blur intensity in pixels (default: 6) */
  blur?: number;
  /** Direction of translation (default: "up") */
  direction?: FloatDirection;
  /** Whether to animate only once when scrolled into view (default: true) */
  once?: boolean;
  /** IntersectionObserver threshold (0 to 1, default: 0.05) */
  threshold?: number;
  /** IntersectionObserver rootMargin (default: "0px 0px -10px 0px") */
  rootMargin?: string;
  /** Additional CSS class names */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** HTML element type or React component to render as (default: "div") */
  as?: React.ElementType;
  /** Auto stagger index for array list mapping */
  staggerIndex?: number;
  /** Step delay per stagger index in milliseconds (default: 60) */
  staggerStep?: number;
  /** Disable animation completely */
  disabled?: boolean;
  /** Enable scaling from small to 1x size (default: false) */
  scale?: boolean;
  /** Initial scale ratio when unrevealed (default: 0.92) */
  initialScale?: number;
  /** Transform origin for scaling (default: "center") */
  transformOrigin?: string;
}

export type FloatUpScaleProps = FloatUpProps;

export function FloatUp({
  children,
  delay = 0,
  duration = 650,
  distance = 16,
  blur = 6,
  direction = "up",
  once = true,
  threshold = 0.05,
  rootMargin = "0px 0px -10px 0px",
  className = "",
  style = {},
  as: Component = "div",
  staggerIndex,
  staggerStep = 60,
  disabled = false,
  scale = false,
  initialScale = 0.92,
  transformOrigin = "center",
  ...props
}: FloatUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(disabled);

  // Compute final calculated delay factoring in optional stagger index
  const computedDelay =
    staggerIndex !== undefined ? delay + staggerIndex * staggerStep : delay;

  useEffect(() => {
    let mounted = true;

    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      requestAnimationFrame(() => {
        if (mounted) setIsRevealed(true);
      });
      return;
    }

    // Check if element is already within visible viewport
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      requestAnimationFrame(() => {
        if (mounted) setIsRevealed(true);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);

            if (once && element) {
              observer.unobserve(element);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      mounted = false;
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [once, threshold, rootMargin, disabled]);

  const customStyles: React.CSSProperties = {
    ...style,
    "--float-delay": `${computedDelay}ms`,
    "--float-duration": `${duration}ms`,
    "--float-distance": `${distance}px`,
    "--float-blur": `${blur}px`,
    ...(scale || initialScale !== undefined
      ? {
          "--float-initial-scale": `${initialScale}`,
          "--float-origin": transformOrigin,
        }
      : {}),
  } as React.CSSProperties;

  const baseClass = scale ? "float-up-scale-element" : "float-up-element";

  return (
    <Component
      ref={ref}
      data-direction={direction}
      data-revealed={isRevealed ? "true" : "false"}
      className={`${baseClass} ${isRevealed ? "is-revealed" : ""} ${className}`.trim()}
      style={customStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * FloatUpScale: Variant of FloatUp that scales from small to 1x size as it rises into view.
 */
export function FloatUpScale({
  initialScale = 0.92,
  ...props
}: FloatUpScaleProps) {
  return <FloatUp scale initialScale={initialScale} {...props} />;
}
