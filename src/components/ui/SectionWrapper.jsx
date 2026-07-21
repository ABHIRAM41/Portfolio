import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * SectionWrapper — wraps every section with:
 *  - a full-width container (dark bg variant optional)
 *  - centered content with max-width
 *  - scroll-reveal animation
 *
 * Props:
 *  id {string} - section ID for nav scroll targeting
 *  className {string} - extra classes
 *  alternate {boolean} - if true, uses slightly lighter bg
 *  children {ReactNode}
 */
const SectionWrapper = ({ id, children, className = "", alternate = false, style = {} }) => {
  const { ref } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      id={id}
      className={`full-section${alternate ? " section-alternate" : ""}${className ? " " + className : ""}`}
      style={{
        background: alternate ? "var(--bg-secondary)" : "var(--bg-primary)",
        ...style,
      }}
    >
      <div ref={ref} className="section-wrapper reveal">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
