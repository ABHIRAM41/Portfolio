import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../constants/data";
import { useNavScrolled, useScrollProgress, useActiveSection } from "../../hooks/useActiveSection";
import { IoMdDownload } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import Button from "../ui/Button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const scrolled = useNavScrolled(40);
  const progress = useScrollProgress();
  const sectionIds = navLinks.map((l) => l.id);
  const activeSection = useActiveSection(sectionIds, 0.35);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <nav
        role="navigation"
        aria-label="Main Navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease",
          // Always frosted glass so text underneath never overlaps or bleeds through
          background: scrolled
            ? "rgba(8, 11, 22, 0.92)"
            : "rgba(10, 14, 26, 0.82)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: scrolled
            ? "1px solid rgba(108, 99, 255, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(108, 99, 255, 0.15)"
            : "0 2px 20px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "0 clamp(1.25rem, 5vw, 3rem)",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "1.2rem",
              background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
              letterSpacing: "-0.02em",
            }}
            aria-label="Scroll to top"
          >
            {personalInfo.shortName}.dev
          </button>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="nav-desktop"
          >
            <ul
              style={{
                display: "flex",
                gap: "1.75rem",
                listStyle: "none",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: activeSection === link.id ? 600 : 400,
                      color:
                        activeSection === link.id
                          ? "var(--accent-secondary)"
                          : "var(--text-secondary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color var(--transition-base)",
                      padding: "4px 0",
                      position: "relative",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== link.id)
                        e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        activeSection === link.id
                          ? "var(--accent-secondary)"
                          : "var(--text-secondary)";
                    }}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          right: 0,
                          height: "2px",
                          background:
                            "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                          borderRadius: "var(--radius-full)",
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setResumeOpen(true)}
              iconRight={<IoMdDownload size={14} aria-hidden="true" />}
              id="nav-resume-btn"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            style={{
              display: "none",
              color: "var(--text-primary)",
              padding: "8px",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--border-card)",
              cursor: "pointer",
              transition: "background var(--transition-fast)",
            }}
            className="nav-mobile-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose size={22} aria-hidden="true" /> : <IoMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(10, 14, 26, 0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s ease",
        }}
        aria-hidden={!menuOpen}
      >
        <ul style={{ listStyle: "none", textAlign: "center", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  fontSize: "1.6rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: activeSection === link.id ? "var(--accent-secondary)" : "var(--text-primary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color var(--transition-base)",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          size="md"
          onClick={() => { setResumeOpen(true); setMenuOpen(false); }}
          iconRight={<IoMdDownload size={16} aria-hidden="true" />}
        >
          View Resume
        </Button>
      </div>

      {/* Resume Modal */}
      {resumeOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setResumeOpen(false)}
        >
          <div
            style={{
              background: "var(--bg-secondary)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              width: "100%",
              maxWidth: "860px",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "var(--shadow-glow)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-card)" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem" }}>
                Resume — J Abhiram Reddy
              </span>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Button
                  variant="primary"
                  size="sm"
                  href={personalInfo.resumePdf}
                  download="J Abhiram Reddy Resume.pdf"
                  icon={<IoMdDownload size={14} aria-hidden="true" />}
                >
                  Download
                </Button>
                <button
                  onClick={() => setResumeOpen(false)}
                  style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem" }}
                  aria-label="Close modal"
                >
                  <IoClose aria-hidden="true" />
                </button>
              </div>
            </div>
            <embed
              src={personalInfo.resumePdf}
              type="application/pdf"
              style={{ width: "100%", flex: 1, minHeight: "70vh" }}
            />
          </div>
        </div>
      )}

      {/* Responsive styles injected via style tag */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default NavBar;
