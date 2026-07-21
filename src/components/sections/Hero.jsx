import React, { useEffect, useRef, useCallback } from "react";
import Typewriter from "typewriter-effect";
import { personalInfo, socialLinks } from "../../constants/data";
import IconLink from "../ui/IconLink";
import Button from "../ui/Button";
import { IoMdDownload } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";

const Hero = () => {
  const canvasRef = useRef(null);
  const animIdRef = useRef(null);
  const resizeTimerRef = useRef(null);

  const scrollToAbout = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on reduced-motion preference — saves battery + respects accessibility
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    // Debounced resize — fires 150ms after the last resize event
    const onResize = () => {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(setSize, 150);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Reduce particle count on mobile to save GPU
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 40;

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();
      });
      animIdRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animIdRef.current);
      clearTimeout(resizeTimerRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        // 100svh = viewport minus iOS Safari browser chrome; fallback to 100vh
        minHeight: "100svh",
        height: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
        // Contain layout so orbs don't cause reflow outside section
        contain: "layout style",
      }}
    >
      {/* Background orbs — CSS only, no JS */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="grid-pattern" aria-hidden="true" />

      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          // Promote to its own compositor layer — avoids re-paint with content
          willChange: "contents",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "100px clamp(1.25rem, 5vw, 3rem) 20px", // top pad clears fixed navbar comfortably
          maxWidth: "850px",
          width: "100%",
          animation: "heroFadeIn 0.8s ease both",
        }}
      >
        {/* Status & Copy Email Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "1.75rem",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              borderRadius: "var(--radius-full)",
              padding: "6px 16px",
              fontSize: "0.78rem",
              color: "#34d399",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                flexShrink: 0,
                boxShadow: "0 0 10px #10b981",
                animation: "pulse 2s infinite",
              }}
            />
            Available for new roles
          </div>

          {/* Quick location tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-full)",
              padding: "6px 16px",
              fontSize: "0.78rem",
              color: "var(--text-secondary)",
              fontWeight: 500,
            }}
          >
            📍 Hyderabad, India
          </div>
        </div>

        {/* H1 — primary SEO heading */}
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 4.8rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: "1.25rem",
            background: "linear-gradient(135deg, #ffffff 20%, #cbd5e1 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.03em",
            fontDisplay: "swap",
          }}
        >
          {personalInfo.name}
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "var(--text-secondary)",
            marginBottom: "1.75rem",
            minHeight: "2.2rem",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            alignItems: "center",
            fontFamily: "var(--font-body)",
          }}
        >
          <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>{">"}</span>
          <Typewriter
            options={{
              strings: personalInfo.typewriterRoles,
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 55,
            }}
          />
        </div>

        {/* Summary paragraph */}
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.925rem, 1.8vw, 1.05rem)",
            lineHeight: 1.8,
            maxWidth: "620px",
            margin: "0 auto 2.5rem",
          }}
        >
          {personalInfo.summary}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <Button variant="primary" size="lg" onClick={scrollToAbout} id="hero-view-work">
            Explore My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={personalInfo.resumePdf}
            download="J Abhiram Reddy Resume.pdf"
            icon={<IoMdDownload size={18} aria-hidden="true" />}
            id="hero-download-cv"
          >
            Download CV
          </Button>
        </div>

        {/* Social icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1rem, 3vw, 1.75rem)",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((link) => (
            <IconLink
              key={link.id}
              icon={link.icon}
              url={link.url}
              label={link.label}
              size={22}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "var(--text-muted)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "12px", // enlarged touch target
          animation: "scrollBounce 2.5s ease-in-out infinite",
          transition: "color var(--transition-base)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        aria-label="Scroll to About section"
      >
        <IoArrowDown size={20} aria-hidden="true" />
      </button>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        /* iOS Safari SVH fallback */
        @supports not (min-height: 100svh) {
          #hero { min-height: 100vh; height: 100vh; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
