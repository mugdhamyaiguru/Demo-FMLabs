"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  targetX: number;
  targetY: number;
}

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isHovered: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const colors = [
      "rgba(24, 155, 155, 0.45)", // Teal
      "rgba(252, 148, 56, 0.35)", // Marigold
      "rgba(78, 66, 96, 0.45)",   // Royal Purple
      "rgba(216, 164, 68, 0.35)",  // Gold
    ];

    // Initialize blobs
    const blobs: Blob[] = Array.from({ length: 6 }, (_, i) => {
      const radius = Math.random() * 150 + 150; // Large blending blobs
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius,
        color: colors[i % colors.length],
        targetX: x,
        targetY: y,
      };
    });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    window.addEventListener("resize", handleResize);
    // Bind to parent or window for better interaction area
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";

      const mouse = mouseRef.current;

      blobs.forEach((blob) => {
        // Apply physics & mouse interaction
        if (mouse.isHovered) {
          const dx = mouse.x - blob.x;
          const dy = mouse.y - blob.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 400) {
            // Gentle attraction
            const force = (400 - dist) / 4000;
            blob.vx += dx * force * 0.1;
            blob.vy += dy * force * 0.1;
          }
        }

        // Add standard random drift to keep it fluid
        blob.vx += (Math.random() - 0.5) * 0.05;
        blob.vy += (Math.random() - 0.5) * 0.05;

        // Speed limit
        const speed = Math.hypot(blob.vx, blob.vy);
        const maxSpeed = 1.2;
        if (speed > maxSpeed) {
          blob.vx = (blob.vx / speed) * maxSpeed;
          blob.vy = (blob.vy / speed) * maxSpeed;
        }

        // Update positions
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off bounds with dampening
        if (blob.x < -blob.radius) {
          blob.x = -blob.radius;
          blob.vx *= -0.8;
        } else if (blob.x > width + blob.radius) {
          blob.x = width + blob.radius;
          blob.vx *= -0.8;
        }

        if (blob.y < -blob.radius) {
          blob.y = -blob.radius;
          blob.vy *= -0.8;
        } else if (blob.y > height + blob.radius) {
          blob.y = height + blob.radius;
          blob.vy *= -0.8;
        }

        // Draw blob with a soft radial gradient
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full pointer-events-none filter blur-[90px] opacity-60 dark:opacity-40 transition-opacity duration-1000"
    />
  );
}
