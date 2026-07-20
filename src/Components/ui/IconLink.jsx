import React from "react";
import {
  SiLinkedin,
  SiGithub,
  SiLeetcode,
  SiX,
} from "react-icons/si";

const iconMap = {
  linkedin: SiLinkedin,
  github: SiGithub,
  leetcode: SiLeetcode,
  twitter: SiX,
};

/**
 * IconLink — reusable social media icon with hover glow animation.
 *
 * Props:
 *  icon {string} - key from iconMap: "linkedin" | "github" | "leetcode" | "twitter"
 *  url {string} - href
 *  label {string} - aria-label
 *  size {number} - icon size in px. Default 22
 *  showLabel {boolean} - show text label alongside icon. Default false
 *  color {string} - override icon color
 */
const IconLink = ({ icon, url, label, size = 22, showLabel = false, color }) => {
  const IconComp = iconMap[icon];
  if (!IconComp) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: color || "var(--text-secondary)",
        transition: "color var(--transition-base), transform var(--transition-spring), filter var(--transition-base)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--accent-secondary)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.filter = "drop-shadow(0 0 8px var(--accent-glow-cyan))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = color || "var(--text-secondary)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.filter = "none";
      }}
    >
      <IconComp size={size} />
      {showLabel && (
        <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{label}</span>
      )}
    </a>
  );
};

export default IconLink;
