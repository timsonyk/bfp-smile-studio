import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale" | "left" | "right";
  delay?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const animationClasses = {
    "fade-up": "scroll-animate",
    "fade-in": "scroll-animate",
    "scale": "scroll-animate-scale",
    "left": "scroll-animate-left",
    "right": "scroll-animate-right",
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;
