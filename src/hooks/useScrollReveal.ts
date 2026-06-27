import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions extends IntersectionObserverInit {
  /** When true, toggle off when the element leaves so it re-animates on re-entry. */
  repeat?: boolean;
}

/**
 * Lightweight, dependency-free scroll reveal using IntersectionObserver.
 * Returns a ref to attach and a boolean for whether the element is in view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) {
  const { repeat = false, threshold, rootMargin, root } = options ?? {};
  const ref = useRef<T | null>(null);
  // Respect users who prefer reduced motion — start revealed, skip the observer.
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || (visible && !repeat)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.disconnect();
        } else if (repeat) {
          setVisible(false);
        }
      },
      {
        threshold: threshold ?? 0.12,
        rootMargin: rootMargin ?? '0px 0px -40px 0px',
        root,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat, threshold, rootMargin, root, visible]);

  return { ref, visible };
}
