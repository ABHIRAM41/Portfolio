import React from "react";
import { personalInfo, socialLinks, education } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import IconLink from "../ui/IconLink";
import Badge from "../ui/Badge";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const About = () => {
  const { ref: imgRef } = useScrollReveal({ threshold: 0.2 });
  const { ref: textRef } = useScrollReveal({ threshold: 0.15 });

  const stats = [
    { value: "2.5+", label: "Years Experience" },
    { value: "99.9%", label: "Uptime Delivered" },
    { value: "50%", label: "DB Load Reduced" },
    { value: "100ms", label: "API Latency Target" },
  ];

  return (
    <SectionWrapper id="about" alternate>
      <SectionTitle title="About Me" accentWord="Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left — Avatar + Stats */}
        <div ref={imgRef} className="reveal-left">
          {/* Avatar card with subtle glass glow */}
          <div
            className="glass-card"
            style={{
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "1 / 1",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              overflow: "hidden",
              position: "relative",
              background: "radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.2), rgba(15, 23, 42, 0.8))",
            }}
          >
            {/* Ambient background blur */}
            <div
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Initials avatar */}
            <div
              className="font-heading"
              style={{
                fontSize: "4.5rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, var(--accent-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                zIndex: 1,
              }}
            >
              JAR
            </div>

            {/* Bottom role badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "rgba(15, 23, 42, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-md)",
                padding: "8px 12px",
                textAlign: "center",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              🚀 <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Backend & Systems</span> SDE
            </div>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.875rem",
              maxWidth: "340px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{ padding: "1.1rem 0.875rem", textAlign: "center" }}
              >
                <div
                  className="font-heading"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #ffffff 30%, var(--accent-secondary) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "4px", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Text */}
        <div ref={textRef} className="reveal-right">
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            I joined{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Vectorsoft</span>{" "}
            as the{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 500 }}>first engineer</span>{" "}
            — no playbook, no team to hand things off to. I built the API, wired up the AWS
            infrastructure, and shipped HIPAA-compliant data pipelines to production, all from
            scratch. That experience taught me to think in systems, not just features.
          </p>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            I care about three things:{" "}
            <span style={{ color: "var(--accent-secondary)", fontWeight: 500 }}>correctness</span>,{" "}
            <span style={{ color: "var(--accent-primary)", fontWeight: 500 }}>observability</span>, and{" "}
            <span style={{ color: "#f9a8d4", fontWeight: 500 }}>speed</span>. Software that silently
            fails, can't be debugged, or crawls under load isn't finished — it's just waiting to cause
            an incident. Outside of engineering, I compete in coding contests and grind LeetCode to keep
            my problem-solving sharp.
          </p>


          {/* Education card */}
          {education.map((edu) => (
            <div
              key={edu.id}
              className="glass-card"
              style={{ padding: "1.25rem 1.5rem", marginBottom: "2rem" }}
            >
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                Education
              </div>
              <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.3rem" }}>
                {edu.degree}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                {edu.institution} · {edu.location}
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "0.5rem" }}>
                <Badge label={`CGPA: ${edu.cgpa}`} variant="accent" size="sm" />
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{edu.period}</span>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {socialLinks.map((link) => (
              <IconLink
                key={link.id}
                icon={link.icon}
                url={link.url}
                label={link.label}
                size={20}
                showLabel
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
