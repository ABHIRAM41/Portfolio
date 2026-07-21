import React from "react";

/**
 * Brand Logo Component — Clean normal letter <ARJ> badge.
 * (Abhiram Reddy Jakkannagari)
 *
 * Props:
 *  size {number} - icon dimension in px (default 36)
 *  showText {boolean} - whether to show text alongside mark (default true)
 */
const Logo = ({ size = 36, showText = true, className = "" }) => {
  return (
    <div
      className={`brand-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Clean <ARJ> Squircle Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 52 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          filter: "drop-shadow(0 2px 10px rgba(99, 102, 241, 0.28))",
          flexShrink: 0,
        }}
      >
        <defs>
          <linearGradient id="logoBg" x1="0" y1="0" x2="52" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#070913" />
          </linearGradient>

          <linearGradient id="logoBorder" x1="0" y1="0" x2="52" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="arjTextGrad" x1="0" y1="0" x2="52" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* Outer Squircle Container */}
        <rect
          x="1"
          y="1"
          width="50"
          height="38"
          rx="10"
          fill="url(#logoBg)"
          stroke="url(#logoBorder)"
          strokeWidth="1.5"
        />

        {/* Left Bracket < */}
        <path
          d="M 8.5 16.5 L 5.5 20 L 8.5 23.5"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Normal Crisp Letters: A R J */}
        <text
          x="26"
          y="25.5"
          textAnchor="middle"
          fill="url(#arjTextGrad)"
          style={{
            fontFamily: "'Inter', 'Syne', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "0.12em",
          }}
        >
          ARJ
        </text>

        {/* Right Bracket > */}
        <path
          d="M 43.5 16.5 L 46.5 20 L 43.5 23.5"
          stroke="#34d399"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Optional Brand Text */}
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.025em",
            display: "inline-flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 60%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abhiram
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "2px 6px",
              borderRadius: "4px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              letterSpacing: "0.04em",
              marginLeft: "3px",
            }}
          >
            .dev
          </span>
        </span>
      )}
    </div>
  );
};

export default Logo;
