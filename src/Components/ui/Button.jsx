import React from "react";

/**
 * Button — reusable button with primary and secondary variants.
 *
 * Props:
 *  variant {"primary" | "secondary" | "ghost"} - style variant. Default "primary"
 *  size {"sm" | "md" | "lg"} - size. Default "md"
 *  onClick {function}
 *  href {string} - if provided, renders as an anchor tag
 *  download {string} - download attribute for anchor
 *  target {string} - target for anchor
 *  rel {string}
 *  disabled {boolean}
 *  children {ReactNode}
 *  icon {ReactNode} - optional leading icon
 *  iconRight {ReactNode} - optional trailing icon
 *  fullWidth {boolean}
 *  className {string}
 */
const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  href,
  download,
  target,
  rel,
  disabled = false,
  children,
  icon,
  iconRight,
  fullWidth = false,
  className = "",
  style = {},
  type = "button",
}) => {
  const sizes = {
    sm: { fontSize: "0.8rem", padding: "8px 18px", gap: "6px" },
    md: { fontSize: "0.9rem", padding: "11px 24px", gap: "8px" },
    lg: { fontSize: "1rem", padding: "14px 32px", gap: "10px" },
  };

  const variants = {
    primary: {
      background: "linear-gradient(135deg, var(--accent-primary), #8b5cf6)",
      color: "#fff",
      border: "none",
      boxShadow: "0 4px 20px rgba(108, 99, 255, 0.3)",
    },
    secondary: {
      background: "transparent",
      color: "var(--accent-secondary)",
      border: "1px solid rgba(0, 212, 255, 0.4)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-card)",
      boxShadow: "none",
    },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all var(--transition-base)",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hoverHandlers = disabled
    ? {}
    : {
        onMouseEnter: (e) => {
          if (variant === "primary") {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(108, 99, 255, 0.45)";
          } else if (variant === "secondary") {
            e.currentTarget.style.background = "rgba(0, 212, 255, 0.08)";
            e.currentTarget.style.borderColor = "var(--accent-secondary)";
          } else {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "var(--text-muted)";
          }
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = variants[variant].boxShadow || "none";
          e.currentTarget.style.background = variants[variant].background;
          e.currentTarget.style.borderColor = "";
        },
      };

  const content = (
    <>
      {icon && <span style={{ display: "flex" }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: "flex" }}>{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        style={baseStyle}
        className={className}
        {...hoverHandlers}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      className={className}
      {...hoverHandlers}
    >
      {content}
    </button>
  );
};

export default Button;
