"use client";

import React, { useEffect, useRef, useState } from "react";
import "./float-up.css";

export type FloatDirection = "up" | "down" | "left" | "right" | "none";

export interface FloatUpProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Delay before animation starts in milliseconds (default: 0) */
  delay?: number;
  /** Duration of transition in milliseconds (default: 450) */
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
}

export function FloatUp({
  children,
  delay = 0,
  duration = 450,
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
  ...props
}: FloatUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(disabled);

  // Compute final calculated delay factoring in optional stagger index
  const computedDelay =
    staggerIndex !== undefined ? delay + staggerIndex * staggerStep : delay;

  useEffect(() => {
    if (disabled) {
      setIsRevealed(true);
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if element is already within the visible viewport during page refresh or initial mount
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // If element is inside or above current scroll position on refresh, reveal immediately without layout shift
    if (rect.top < windowHeight && rect.bottom > 0) {
      setIsRevealed(true);
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
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      data-direction={direction}
      data-revealed={isRevealed ? "true" : "false"}
      className={`float-up-element ${isRevealed ? "is-revealed" : ""} ${className}`.trim()}
      style={customStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * FloatUpGroup helper component to automatically stagger direct child elements
 */
export interface FloatUpGroupProps {
  children: React.ReactNode;
  staggerStep?: number;
  baseDelay?: number;
  duration?: number;
  distance?: number;
  blur?: number;
  direction?: FloatDirection;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: React.ElementType;
}

export function FloatUpGroup({
  children,
  staggerStep = 70,
  baseDelay = 0,
  duration,
  distance,
  blur,
  direction,
  threshold,
  rootMargin,
  className = "",
  as: Component = "div",
}: FloatUpGroupProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <Component className={className}>
      {childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <FloatUp
            key={child.key ?? index}
            staggerIndex={index}
            staggerStep={staggerStep}
            delay={baseDelay}
            duration={duration}
            distance={distance}
            blur={blur}
            direction={direction}
            threshold={threshold}
            rootMargin={rootMargin}
          >
            {child}
          </FloatUp>
        );
      })}
    </Component>
  );
}

// Convenience alias exports for component consumer flexibility
export { FloatUp as FloatUpBlur, FloatUp as FadeInBlur, FloatUp as FloatUpContainer };
