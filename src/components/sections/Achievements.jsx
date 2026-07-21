import React from "react";
import { achievements } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import { useStaggerReveal } from "../../hooks/useScrollReveal";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import { BsFire } from "react-icons/bs";

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  star: FaStar,
  streak: BsFire,
};

const colorMap = {
  gold: {
    bg: "rgba(251, 191, 36, 0.08)",
    border: "rgba(251, 191, 36, 0.25)",
    icon: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.2)",
  },
  cyan: {
    bg: "rgba(0, 212, 255, 0.08)",
    border: "rgba(0, 212, 255, 0.25)",
    icon: "var(--accent-secondary)",
    glow: "rgba(0, 212, 255, 0.2)",
  },
  purple: {
    bg: "rgba(108, 99, 255, 0.08)",
    border: "rgba(108, 99, 255, 0.25)",
    icon: "var(--accent-primary)",
    glow: "var(--accent-glow)",
  },
  orange: {
    bg: "rgba(251, 146, 60, 0.08)",
    border: "rgba(251, 146, 60, 0.25)",
    icon: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
  },
};

const AchievementCard = ({ achievement }) => {
  const IconComp = iconMap[achievement.icon] || FaTrophy;
  const colors = colorMap[achievement.color] || colorMap.purple;

  return (
    <div
      className="glass-card"
      style={{
        padding: "1.75rem",
        display: "flex",
        alignItems: "flex-start",
        gap: "1.25rem",
        borderColor: colors.border,
        transition: "transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 32px ${colors.glow}`;
        e.currentTarget.style.borderColor = colors.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "var(--radius-md)",
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: `0 0 16px ${colors.glow}`,
        }}
      >
        <IconComp size={22} color={colors.icon} />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
          <h3
            className="font-heading"
            style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}
          >
            {achievement.link ? (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none", transition: "color var(--transition-fast)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.icon)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {achievement.title}
              </a>
            ) : (
              achievement.title
            )}
          </h3>
          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.78rem",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {achievement.year}
          </span>
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.65 }}>
          {achievement.description}
        </p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const { ref } = useStaggerReveal({ threshold: 0.1 });

  return (
    <SectionWrapper id="achievements" alternate>
      <SectionTitle
        title="Achievements"
        subtitle="Milestones that reflect consistency, competitive drive, and technical depth."
      />

      <div
        ref={ref}
        className="stagger-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
