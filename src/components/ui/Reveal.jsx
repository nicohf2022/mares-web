import { createElement, useEffect, useRef, useState } from "react";

export default function Reveal({
  as = "div",
  className = "",
  delay = 0,
  children,
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref: elementRef,
      className: `reveal ${isVisible ? "is-visible" : ""} ${className}`.trim(),
      style: { "--reveal-delay": `${delay}ms` },
      ...props,
    },
    children,
  );
}
