import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport, it adds the `visible` class.
 *
 * @param {Object} options
 * @param {number} options.threshold - 0–1, how much of the element must be visible. Default 0.12
 * @param {string} options.rootMargin - margin around the root. Default "0px 0px -60px 0px"
 * @param {boolean} options.once - if true, only triggers once. Default true
 *
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 *
 * Usage:
 *   const { ref } = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("visible");
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * useStaggerReveal — like useScrollReveal but for the parent container.
 * Adds `visible` to the container, CSS stagger handles the children.
 *
 * Usage:
 *   const { ref } = useStaggerReveal();
 *   <ul ref={ref} className="stagger-container">
 *     <li>...</li>
 *   </ul>
 */
export function useStaggerReveal({ threshold = 0.08, rootMargin = "0px 0px -40px 0px", once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("visible");
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
