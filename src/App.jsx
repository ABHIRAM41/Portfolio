import React, { Suspense, lazy } from "react";
import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import "./index.css";

// ── Lazy-load everything below the fold ───────────────────────────────────────
// Hero + NavBar load eagerly (above the fold / critical path).
// Everything else is code-split and only fetched when React renders it,
// giving a faster First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
const About       = lazy(() => import("./components/sections/About"));
const Experience  = lazy(() => import("./components/sections/Experience"));
const Skills      = lazy(() => import("./components/sections/Skills"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Contact     = lazy(() => import("./components/sections/Contact"));
const Footer      = lazy(() => import("./components/sections/Footer"));

// Minimal inline fallback — no layout shift, no spinner flash for fast connections
const SectionFallback = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-primary)",
    }}
    aria-hidden="true"
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid var(--border-card)",
        borderTopColor: "var(--accent-primary)",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <>
      {/* Critical — rendered immediately */}
      <NavBar />

      <main role="main" id="main-content">
        {/* Hero is above the fold — eager load */}
        <Hero />

        {/* Everything below the fold — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
