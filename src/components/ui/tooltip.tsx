"use client";

import "./tooltip.css";
import React from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom";
  align?: "center" | "left" | "right";
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  align = "center",
  className = "",
}: TooltipProps) {
  return (
    <div className={`cute-tooltip-wrapper ${className}`}>
      {children}
      <div
        className={`cute-tooltip cute-tooltip--${position} cute-tooltip--align-${align}`}
        role="tooltip"
      >
        <span className="cute-tooltip__content">{content}</span>
      </div>
    </div>
  );
}
