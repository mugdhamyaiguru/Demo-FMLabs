"use client";

import { useEffect, useState } from "react";

export function AnimatedCount({ end, duration = 1200 }: { end: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(end * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, end]);

  return <span>{value.toLocaleString()}</span>;
}