import React from "react";

/**
 * Badge — reusable tech stack pill / skill chip.
 *
 * Props:
 *  label {string} - text inside the badge
 *  variant {"default" | "accent" | "outline" | "coming-soon"} - style variant
 *  size {"sm" | "md"} - size. Default "md"
 *  className {string}
 */
const Badge = ({ label, variant = "default", size = "md", className = "" }) => {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    letterSpacing: "0.02em",
    maxWidth: "100%",
    whiteSpace: "normal",
    wordBreak: "break-word",
    transition: "all var(--transition-fast)",
    cursor: "default",
    lineHeight: 1.3,
  };

  const sizes = {
    sm: { fontSize: "0.7rem", padding: "3px 10px" },
    md: { fontSize: "0.78rem", padding: "5px 14px" },
  };

  const variants = {
    default: {
      background: "rgba(108, 99, 255, 0.1)",
      border: "1px solid rgba(108, 99, 255, 0.25)",
      color: "#a89ef5",
    },
    accent: {
      background: "rgba(0, 212, 255, 0.1)",
      border: "1px solid rgba(0, 212, 255, 0.25)",
      color: "#60d0ee",
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-card)",
      color: "var(--text-secondary)",
    },
    "coming-soon": {
      background: "rgba(255, 101, 132, 0.1)",
      border: "1px solid rgba(255, 101, 132, 0.3)",
      color: "var(--accent-tertiary)",
    },
  };

  return (
    <span
      className={className}
      style={{
        ...baseStyle,
        ...sizes[size],
        ...variants[variant],
      }}
    >
      {label}
    </span>
  );
};

export default Badge;
