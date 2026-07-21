import React from "react";
import { personalInfo, socialLinks } from "../../constants/data";
import IconLink from "../ui/IconLink";
import { IoArrowUp } from "react-icons/io5";
import Logo from "../ui/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "rgba(13, 17, 29, 0.95)",
        borderTop: "1px solid var(--border-card)",
        padding: "3rem clamp(1.25rem, 5vw, 3rem) 2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Left — Name + role + status */}
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Logo size={32} showText={true} />
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{personalInfo.role}</span>
            <span>·</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Center/Right — Social Icons & Back to top */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            {socialLinks.map((link) => (
              <IconLink key={link.id} icon={link.icon} url={link.url} label={link.label} size={20} />
            ))}
          </div>

          <button
            onClick={scrollToTop}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-card)",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all var(--transition-base)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.color = "var(--accent-primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-card)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.transform = "none";
            }}
            aria-label="Back to top"
            title="Back to top"
          >
            <IoArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border-card)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          color: "var(--text-muted)",
          fontSize: "0.78rem",
        }}
      >
        <div>© {year} {personalInfo.name}. All rights reserved.</div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
          System Operational
        </div>
      </div>
    </footer>
  );
};

export default Footer;
