import React from "react";
import { experience } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { useStaggerReveal } from "../../hooks/useScrollReveal";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ExperienceCard = ({ exp, isLast }) => {
  return (
    <div style={{ position: "relative", paddingLeft: "2.5rem", paddingBottom: isLast ? 0 : "2.5rem" }}>
      {/* Timeline line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: "32px",
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--accent-primary) 0%, rgba(99, 102, 241, 0.08) 100%)",
          }}
        />
      )}

      {/* Timeline dot */}
      <div
        style={{
          position: "absolute",
          left: "1px",
          top: "22px",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: exp.isCurrent
            ? "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))"
            : "var(--bg-primary)",
          border: "2px solid var(--accent-primary)",
          boxShadow: exp.isCurrent ? "0 0 14px var(--accent-glow)" : "none",
          zIndex: 1,
        }}
      />

      {/* Card */}
      <div
        className="glass-card"
        style={{ padding: "1.5rem 1.75rem" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.3rem" }}>
              <h3
                className="font-heading"
                style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)" }}
              >
                {exp.role}
              </h3>
              {exp.isCurrent && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                    borderRadius: "var(--radius-full)",
                    padding: "2px 10px",
                    fontSize: "0.7rem",
                    color: "var(--accent-secondary)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent-secondary)",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  Current
                </span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--accent-primary)",
                fontWeight: 500,
                fontSize: "0.95rem",
              }}
            >
              <MdWorkOutline size={14} />
              {exp.company}
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                marginBottom: "0.25rem",
                fontWeight: 500,
              }}
            >
              {exp.period}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                justifyContent: "flex-end",
              }}
            >
              <HiOutlineLocationMarker size={13} />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                color: "var(--text-secondary)",
                fontSize: "0.91rem",
                lineHeight: 1.7,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--accent-primary)",
                  flexShrink: 0,
                  marginTop: "0.55em",
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: highlightKeyMetrics(bullet) }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Highlights key metrics, outcomes and roles in bullet points
function highlightKeyMetrics(text) {
  return text.replace(
    /\b(inaugural engineer|HIPAA compliance|99\.9% uptime|sub-100ms API latency|50%|65%|20%|zero-downtime releases|AES-256|HL7 FHIR)\b/gi,
    '<strong style="color: var(--text-primary); font-weight: 600;">$1</strong>'
  );
}

const Experience = () => {
  const { ref } = useStaggerReveal({ threshold: 0.05 });

  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Work Experience"
        accentWord="Experience"
        subtitle="Key engineering responsibilities, system architecture, and production impact."
      />

      <div ref={ref} className="stagger-container">
        {experience.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} isLast={i === experience.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
