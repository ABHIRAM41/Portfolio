import React, { useState } from "react";
import { personalInfo, socialLinks } from "../../constants/data";
import SectionWrapper from "../ui/SectionWrapper";
import SectionTitle from "../ui/SectionTitle";
import IconLink from "../ui/IconLink";
import Button from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { IoMdSend } from "react-icons/io";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--border-card)",
  borderRadius: "var(--radius-md)",
  color: "var(--text-primary)",
  fontSize: "0.9rem",
  padding: "12px 16px",
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
};

const ContactInfo = [
  { icon: MdEmail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: MdPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MdLocationOn, label: "Location", value: personalInfo.location, href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const { ref: leftRef } = useScrollReveal({ threshold: 0.15 });
  const { ref: rightRef } = useScrollReveal({ threshold: 0.15 });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all fields before sending.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("loading");
    try {
      const accessKey =
        import.meta.env.VITE_EMAIL_KEY || "5a6f7102-1f7c-4b8d-bc86-5a5acbe335e6";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          access_key: accessKey,
        }),
      }).then((r) => r.json());

      if (res.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setErrorMessage(res.message || "Failed to send message. Please try again.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const focusInput = (e) => {
    e.target.style.borderColor = "var(--accent-primary)";
    e.target.style.boxShadow = "0 0 0 3px rgba(108,99,255,0.12)";
  };
  const blurInput = (e) => {
    e.target.style.borderColor = "var(--border-card)";
    e.target.style.boxShadow = "none";
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Get In Touch"
        accentWord="Touch"
        subtitle="I'm open to new opportunities, collaborations, or just a good conversation."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left — Contact Info */}
        <div ref={leftRef} className="reveal-left">
          <h3
            className="font-heading"
            style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}
          >
            Let's Connect
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Whether you have a project in mind, a role to discuss, or just want to say hello — my inbox is always open.
          </p>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {ContactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(108,99,255,0.1)",
                    border: "1px solid rgba(108,99,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} color="var(--accent-primary)" />
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color var(--transition-fast)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-secondary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >{value}</a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            {socialLinks.map((link) => (
              <IconLink key={link.id} icon={link.icon} url={link.url} label={link.label} size={22} />
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div ref={rightRef} className="reveal-right">
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{ display: "block", marginBottom: "6px", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                onFocus={focusInput}
                onBlur={blurInput}
                style={inputStyle}
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{ display: "block", marginBottom: "6px", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={focusInput}
                onBlur={blurInput}
                style={inputStyle}
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{ display: "block", marginBottom: "6px", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                onFocus={focusInput}
                onBlur={blurInput}
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div style={{ padding: "12px 16px", background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.3)", borderRadius: "var(--radius-md)", color: "#34d399", fontSize: "0.875rem" }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div style={{ padding: "12px 16px", background: "rgba(255, 101, 132, 0.1)", border: "1px solid rgba(255, 101, 132, 0.3)", borderRadius: "var(--radius-md)", color: "var(--accent-tertiary)", fontSize: "0.875rem" }}>
                ✕ {errorMessage || "Please fill in all fields and try again."}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={status === "loading"}
              icon={<IoMdSend size={16} />}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
