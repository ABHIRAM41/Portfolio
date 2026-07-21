import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * SectionTitle — reusable animated section heading.
 *
 * Props:
 *  title {string} - the heading text
 *  subtitle {string} - optional smaller text below
 *  align {"left" | "center"} - text alignment. Default "left"
 *  accentWord {string} - a word within `title` to render in gradient color
 */
const SectionTitle = ({ title, subtitle, align = "left", accentWord = "" }) => {
  const { ref } = useScrollReveal({ threshold: 0.15 });

  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        textAlign: align,
        marginBottom: "clamp(2rem, 4vw, 3.5rem)",
      }}
    >
      <h2
        className="font-heading"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.2,
          marginBottom: subtitle ? "0.75rem" : 0,
        }}
      >
        {renderTitle()}
      </h2>

      {/* Animated underline accent */}
      <div
        style={{
          display: "inline-block",
          height: "3px",
          width: "56px",
          background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
          borderRadius: "var(--radius-full)",
          marginTop: "0.5rem",
          marginLeft: align === "center" ? "auto" : 0,
          marginRight: align === "center" ? "auto" : 0,
          ...(align === "center" ? { display: "block" } : {}),
          boxShadow: "0 0 12px var(--accent-glow)",
        }}
      />

      {subtitle && (
        <p
          style={{
            marginTop: "1rem",
            color: "var(--text-secondary)",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            maxWidth: "560px",
            lineHeight: 1.7,
            ...(align === "center" ? { margin: "1rem auto 0" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
