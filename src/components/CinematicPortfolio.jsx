import { useEffect, useMemo, useState } from "react";

import { experiences, projects } from "../constants";
import { creator } from "../assets";

const contactEmail = "guptagovind516@gmail.com";
const phoneNumber = "+91 8006213786";
const resumePath = "/GovindGupta_SoftwareEngineer.pdf";

// Section order matches page order: About, Experience, Work, Contact
const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const projectTypes = [
  "AI Backend Service",
  "Event-Driven Backend",
  "Quiz API Platform",
  "ML Data Product",
  "Predictive Data Model",
  "Open Library Search App",
];

const dataStack = [
  "Databricks",
  "Spark SQL",
  "PySpark",
  "ETL",
  "Azure",
  "Kafka",
  "Redis",
  "Java",
  "Spring Boot",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Docker",
];

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  } catch {
    /* ignore */
  }
  return "dark";
};

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const CinematicPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState(getInitialTheme);

  const featuredProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        type: projectTypes[index] || "Software System",
      })),
    []
  );

  // Apply theme class to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // Scroll progress bar + nav scrolled state
  useEffect(() => {
    const progressBar = document.querySelector(".brut-progress span");
    const nav = document.querySelector(".brut-nav");
    if (!progressBar || !nav) return;

    let ticking = false;
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
      progressBar.style.width = `${pct}%`;
      nav.classList.toggle("scrolled", scrollTop > 8);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Custom cursor (fine pointers only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const cursor = document.querySelector(".brut-cursor");
    if (!cursor) return;

    document.documentElement.classList.add("has-cursor");

    const move = (event) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      cursor.classList.add("is-visible");
    };

    const onOver = (event) => {
      if (
        event.target.closest(
          "a, button, input, textarea, select, label, [data-cursor-hover]"
        )
      ) {
        cursor.classList.add("is-active");
      }
    };

    const onOut = (event) => {
      if (
        event.target.closest(
          "a, button, input, textarea, select, label, [data-cursor-hover]"
        )
      ) {
        cursor.classList.remove("is-active");
      }
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  // Obsidian-style scroll spy + reveal
  useEffect(() => {
    const sections = ["about", "experience", "work", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Cinematic scroll reveal
  useEffect(() => {
    const revealEls = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="brut-site">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="brut-cursor" aria-hidden="true" />

      <header className="brut-nav">
        <a
          href="#about"
          className="brut-brand"
          aria-label="Govind Gupta portfolio home"
        >
          <span className="brand-mark" aria-hidden="true">GG</span>
          <span className="brand-name">Govind.exe</span>
        </a>

        <nav aria-label="Primary navigation" className="brut-nav-links">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
            >
              <sup>{String(index + 1).padStart(2, "0")}</sup>
              {item.label}
            </a>
          ))}
          <a className="is-hire" href="#contact">
            Hire Me
          </a>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <span className="theme-icons" aria-hidden="true">
              <span className={theme === "dark" ? "is-visible" : ""}>
                <SunIcon />
              </span>
              <span className={theme === "dark" ? "" : "is-visible"}>
                <MoonIcon />
              </span>
            </span>
          </button>

          <a className="brut-resume" href={resumePath} download>
            Resume ↗
          </a>

          <button
            type="button"
            className="brut-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`brut-mobile-menu ${menuOpen ? "is-open" : ""}`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              <sup>{String(index + 1).padStart(2, "0")}</sup>
              {item.label}
            </a>
          ))}
          <a href={resumePath} download onClick={() => setMenuOpen(false)}>
            <sup>05</sup>
            Resume
          </a>
        </div>
      </header>

      {/* Scroll progress */}
      <div className="brut-progress" aria-hidden="true">
        <span />
      </div>

      <main id="main-content">
        {/* ================= HERO ================= */}
        <section className="brut-hero">
          <div className="hero-deco" aria-hidden="true">
            <div className="deco-square" />
            <div className="deco-circle" />
            <span className="deco-word">DATA</span>
          </div>

          <div className="hero-inner">
            <div className="hero-index">
              <span>Data Engineer — Databricks · Spark · Spring Boot</span>
              <span>Based in India · Remote-friendly</span>
            </div>

            <div className="hero-badge">
              <span className="badge-square" aria-hidden="true">
                <span className="badge-dot" />
              </span>
              <span>System Status: Online</span>
            </div>

            <h1 className="hero-title">
              BUILT FOR
              <br />
              <em className="text-outline">RELIABLE</em>
              <br />
              DATA.
            </h1>

            <p className="hero-statement">
              I am Govind Gupta — a Data Engineer turning raw business
              requirements into governed <b>Databricks</b> pipelines,{" "}
              <b>Spark SQL</b> datamarts, and dependable{" "}
              <b>Azure</b> data systems, backed by strong{" "}
              <b>Java Spring Boot</b> API depth.
            </p>

            <div className="hero-actions">
              <a href="#work" className="brut-button is-solid">
                View Work <b>↓</b>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="brut-button is-ghost"
              >
                Get in Touch <b>→</b>
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="brut-about">
          <div className="section-label" data-reveal>
            <h2>/ About</h2>
            <span>Data Engineer</span>
          </div>

          <div className="about-grid" data-reveal>
            <div className="avatar-card">
              <span className="avatar-tag">AVATAR.PNG</span>
              <img src={creator} alt="Govind Gupta" loading="lazy" />
            </div>
            <div className="about-copy">
              <h2>
                Now focused on <em>Databricks</em>, ETL and Spark, with strong
                Java Spring Boot depth.
              </h2>
              <div className="about-badges">
                <span className="about-badge is-dark">
                  📍 LOCATION: INDIA
                </span>
                <span className="about-badge is-green">
                  🟢 STATUS: AVAILABLE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="brut-about">
          <div className="section-label" data-reveal>
            <h2>/ Experience</h2>
            <span>2024 — Present</span>
          </div>

          <div className="brut-timeline">
            {experiences.map((experience) => (
              <article
                className="timeline-row"
                key={experience.company_name}
                data-reveal
              >
                <span className="timeline-marker" aria-hidden="true" />
                <div className="timeline-head">
                  <h3>{experience.title}</h3>
                  <span className="timeline-date-badge">
                    {experience.date}
                  </span>
                </div>
                <p className="timeline-company">
                  @ {experience.company_name}
                </p>
                <ul className="timeline-points">
                  {experience.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ================= STACK STRIP ================= */}
        <div className="brut-stack" aria-hidden="true">
          <div>
            {[...dataStack, ...dataStack].map((technology, index) => (
              <span key={`${technology}-${index}`}>{technology}</span>
            ))}
          </div>
        </div>

        {/* ================= WORK ================= */}
        <section id="work" className="brut-work">
          <div className="section-label" data-reveal>
            <h2>/ Selected Work</h2>
            <span>01 — 06</span>
          </div>

          <h2 className="work-title" data-reveal>
            Selected Works
          </h2>

          <div className="work-grid">
            {featuredProjects.map((project, index) => (
              <article
                className={`brut-project ${index % 2 === 1 ? "is-offset" : ""}`}
                key={project.name}
                data-reveal
              >
                <a
                  className="project-thumb"
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} source code`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                </a>
                <div className="project-body">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={`${project.name}-${tag.name}`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <div className="project-cta">
                    <div className="project-links">
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code ↗
                      </a>
                      {project.live_demo_link ? (
                        <a
                          href={project.live_demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live ↗
                        </a>
                      ) : null}
                    </div>
                    <a
                      className="project-arrow"
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} source code`}
                    >
                      <i className="ri-arrow-right-up-line" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-footer" data-reveal>
            <a
              className="brut-button"
              href="https://github.com/Govind516?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Repos on GitHub <b>→</b>
            </a>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="brut-contact">
          <div className="section-label" data-reveal>
            <h2>/ Contact</h2>
            <span>Let's Talk</span>
          </div>

          <div className="contact-card" data-reveal>
            <div className="contact-badge">Start a Project</div>

            <div className="contact-grid">
              <div className="contact-side">
                <h2 className="contact-title">
                  Have a pipeline that needs <em>form?</em>
                </h2>
                <p>
                  Send the data problem, source systems, and expected output. I
                  will respond directly — the first project review is free.
                </p>
                <div className="contact-list">
                  <a href={`mailto:${contactEmail}`}>
                    <span className="icon">
                      <i className="ri-mail-line" aria-hidden="true" />
                    </span>
                    <span className="contact-value">
                      <span className="label">Email</span>
                      {contactEmail}
                    </span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                    <span className="icon">
                      <i className="ri-phone-line" aria-hidden="true" />
                    </span>
                    <span className="contact-value">
                      <span className="label">Phone</span>
                      +91 80062 13786
                    </span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Govind516"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="ri-github-fill" aria-hidden="true" />
                    </span>
                    <span className="contact-value">
                      <span className="label">GitHub</span>
                      @Govind516
                    </span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/govindgupta1012/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="ri-linkedin-fill" aria-hidden="true" />
                    </span>
                    <span className="contact-value">
                      <span className="label">LinkedIn</span>
                      /in/govindgupta1012
                    </span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                  <a href={resumePath} download>
                    <span className="icon">
                      <i className="ri-file-download-line" aria-hidden="true" />
                    </span>
                    <span className="contact-value">
                      <span className="label">Resume</span>
                      Download PDF
                    </span>
                    <i className="ri-arrow-right-up-line" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <form
                className="brut-form"
                onSubmit={handleSubmit}
                data-reveal
              >
                <label>
                  <span>01 / Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  <span>02 / Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  <span>03 / Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me what you want to build."
                  />
                </label>
                <button type="submit" className="brut-button brut-submit">
                  Transmit Data <b>→</b>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="brut-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>
              Govind<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>

          <div className="footer-col">
            <h3>Sitemap</h3>
            <ul>
              <li>
                <a href="#about">Home</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#work">Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Socials</h3>
            <div className="footer-socials">
              <a
                href="https://github.com/Govind516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="ri-github-fill" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/govindgupta1012/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill" aria-hidden="true" />
              </a>
              <a
                href="https://leetcode.com/u/govind516/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <i className="ri-code-fill" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/gGupta_516"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Govind Gupta</span>
          <span>Databricks / Spark / Java Spring Boot</span>
          <a href="#about">Back to top ↑</a>
        </div>

        <div className="footer-watermark" aria-hidden="true">
          DATA
        </div>
      </footer>
    </div>
  );
};

export default CinematicPortfolio;
