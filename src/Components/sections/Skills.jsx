import React from "react";
import { skillCategories } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { useStaggerReveal, useScrollReveal } from "../../hooks/useScrollReveal";
import { MdCode, MdLayers, MdStorage, MdCloud, MdSecurity, MdWeb } from "react-icons/md";

const categoryIcons = {
  code: MdCode,
  layout: MdWeb,
  layers: MdLayers,
  database: MdStorage,
  cloud: MdCloud,
  shield: MdSecurity,
};

const SkillCategoryCard = ({ category, index }) => {
  const { ref } = useScrollReveal({ threshold: 0.1 });
  const IconComp = categoryIcons[category.icon] || MdCode;

  return (
    <div
      ref={ref}
      className="glass-card reveal"
      style={{
        padding: "1.5rem",
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {/* Category header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "1.25rem",
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "var(--radius-sm)",
            background: "rgba(108, 99, 255, 0.12)",
            border: "1px solid rgba(108, 99, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <IconComp size={18} color="var(--accent-primary)" />
        </div>
        <h3
          className="font-heading"
          style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}
        >
          {category.label}
        </h3>
      </div>

      {/* Skill pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {category.skills.map((skill) => (
          <Badge
            key={skill}
            label={skill}
            variant="default"
            size="md"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" alternate>
      <SectionTitle
        title="Skills & Technologies"
        accentWord="Technologies"
        subtitle="My technical toolkit — curated from 2.5+ years of building production systems."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {skillCategories.map((category, i) => (
          <SkillCategoryCard key={category.id} category={category} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
