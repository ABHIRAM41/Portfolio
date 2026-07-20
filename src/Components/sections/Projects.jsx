import React, { useState } from "react";
import { projects } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { useStaggerReveal } from "../../hooks/useScrollReveal";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { MdRocketLaunch } from "react-icons/md";

const typeFilters = ["all", "backend", "fullstack"];

const ProjectCard = ({ project }) => {
  return (
    <div
      className="glass-card"
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Coming soon overlay */}
      {project.isComingSoon && (
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 1,
          }}
        >
          <span className="coming-soon-badge">
            <MdRocketLaunch size={10} /> Coming Soon
          </span>
        </div>
      )}

      {/* Featured badge */}
      {project.featured && !project.isComingSoon && (
        <div style={{ position: "absolute", top: "14px", right: "14px" }}>
          <Badge label="Featured" variant="accent" size="sm" />
        </div>
      )}

      {/* Type label */}
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          marginBottom: "0.75rem",
          fontWeight: 500,
        }}
      >
        {project.type}
      </div>

      <h3
        className="font-heading"
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: project.isComingSoon ? "var(--text-muted)" : "var(--text-primary)",
          marginBottom: "0.75rem",
          lineHeight: 1.3,
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.87rem",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "1.25rem",
          opacity: project.isComingSoon ? 0.65 : 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="outline" size="sm" />
        ))}
      </div>

      {/* Links */}
      {!project.isComingSoon && (
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<HiOutlineExternalLink size={13} />}
            >
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<SiGithub size={14} />}
            >
              GitHub
            </Button>
          )}
        </div>
      )}

      {project.isComingSoon && (
        <div
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            fontStyle: "italic",
          }}
        >
          In development — check back soon
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref } = useStaggerReveal({ threshold: 0.05 });

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        title="Projects"
        subtitle="Building in public — these projects directly defend my resume's technical claims."
      />

      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {typeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: "6px 18px",
              borderRadius: "var(--radius-full)",
              border: "1px solid",
              fontSize: "0.82rem",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              transition: "all var(--transition-base)",
              textTransform: "capitalize",
              ...(activeFilter === filter
                ? {
                    background: "var(--accent-primary)",
                    borderColor: "var(--accent-primary)",
                    color: "#fff",
                    boxShadow: "0 4px 14px rgba(108,99,255,0.35)",
                  }
                : {
                    background: "transparent",
                    borderColor: "var(--border-card)",
                    color: "var(--text-muted)",
                  }),
            }}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        ref={ref}
        className="stagger-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
