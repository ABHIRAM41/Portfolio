import { useEffect, useState, useRef } from "react";

/**
 * useActiveSection — tracks which section is in the viewport.
 * Uses a stable sectionIds ref to avoid re-creating observers on every render.
 */
export function useActiveSection(sectionIds, threshold = 0.4) {
  const [activeSection, setActiveSection] = useState("");
  // Stable ref to avoid re-subscribing on every render
  const idsRef = useRef(sectionIds);
  useEffect(() => { idsRef.current = sectionIds; }, [sectionIds]);

  useEffect(() => {
    const observers = [];
    idsRef.current.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]); // Only re-run if threshold changes, NOT on every sectionIds render

  return activeSection;
}

/**
 * useScrollProgress — scroll % with RAF throttling.
 * Uses requestAnimationFrame so it only updates once per paint frame —
 * no scroll jank from excessive setState calls.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return; // Skip if a frame is already queued
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
        setProgress(Math.round(pct * 10) / 10); // Round to 1dp — avoids micro-updates
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return progress;
}

/**
 * useNavScrolled — true when user has scrolled past `offset` px.
 * Throttled with RAF.
 */
export function useNavScrolled(offset = 60) {
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > offset);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [offset]);

  return scrolled;
}
