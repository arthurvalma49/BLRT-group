import { useEffect, useRef } from "react";

type Tag = keyof JSX.IntrinsicElements;

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Extra CSS delay class: "delay-100" | "delay-200" | "delay-300" */
  delay?: "delay-100" | "delay-200" | "delay-300";
  as?: Tag;
}

export default function RevealSection({
  children,
  className = "",
  delay,
  as: Component = "div",
}: RevealSectionProps) {
  const ref = useRef<Element>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible (e.g., above the fold) — skip observer
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = Component as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${delay ?? ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
