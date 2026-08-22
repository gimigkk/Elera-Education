"use client";

import { useEffect } from "react";

export function ScrollToTopOnRefresh() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable browser automatic scroll position restoration on refresh
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // Immediately scroll to the top of page on mount / refresh
      window.scrollTo(0, 0);

      const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  return null;
}
