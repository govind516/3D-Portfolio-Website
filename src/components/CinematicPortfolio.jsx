import React, { useMemo, useState } from "react";

import {
  experiences,
  projects,
  services,
  testimonials,
} from "../constants";

const contactEmail = "guptagovind516@gmail.com";
const phoneNumber = "+91 8006213786";
const resumePath = "/GovindGupta_SoftwareEngineer.pdf";

const navItems = [
  { id: "signal", label: "Signal" },
  { id: "work", label: "Work" },
  { id: "system", label: "System" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "Databricks", label: "Spark SQL pipelines and governed datamarts" },
  { value: "PySpark", label: "joins, matching rules and data validation checks" },
  { value: "Azure", label: "cloud data workflows with Kafka and Redis layers" },
  { value: "Free", label: "initial project review and consultation" },
];

const practice = [
  {
    title: "ETL pipelines",
    body: "Databricks, Spark SQL, and PySpark pipelines translated from business rules into clean datamarts and catalog blocks.",
  },
  {
    title: "Data reliability",
    body: "Automated checks for nulls, duplicates, constraint violations, joins, aliases, and matching logic before data reaches users.",
  },
  {
    title: "Cloud data systems",
    body: "Azure-first engineering with Kafka event streams, Redis caching, Linux workflows, and reusable asset bundles.",
  },
  {
    title: "Backend foundation",
    body: "Java Spring Boot, REST APIs, MongoDB, OAuth, JWT, Docker, CI/CD, and testing practices behind dependable data products.",
  },
];

const projectTypes = [
  "AI backend service",
  "Event-driven backend",
  "Quiz API platform",
  "ML data product",
  "Predictive data model",
  "Open Library search app",
];

const projectArchitectures = [
  ["Transcript", "Spring API", "Action items"],
  ["MongoDB", "Kafka", "Redis"],
  ["REST API", "PostgreSQL", "Score engine"],
  ["Pandas", "Scikit-Learn", "Streamlit"],
  ["Market data", "KNN + LSTM", "Forecast"],
  ["Open Library", "React search", "Book cards"],
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
  "Python",
  "Linux",
  "Docker",
];

const CinematicPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const featuredProjects = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        type: projectTypes[index] || "Software system",
      })),
    []
  );

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
    <div className="cinema-site">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="cinema-nav">
        <a
          href="#signal"
          className="cinema-brand"
          aria-label="Govind Gupta portfolio home"
        >
          <span className="brand-mark" aria-hidden="true">GG</span>
          <span>Govind Gupta</span>
        </a>

        <nav aria-label="Primary navigation" className="cinema-nav-links">
          {navItems.map((item, index) => (
            <a key={item.id} href={`#${item.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="resume-chip" href={resumePath} download>
          Resume
        </a>

        <button
          type="button"
          className="cinema-menu-button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>

        <div
          id="mobile-menu"
          className={`cinema-mobile-menu ${menuOpen ? "is-open" : ""}`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
          <a href={resumePath} download onClick={() => setMenuOpen(false)}>
            <span>06</span>
            Resume
          </a>
        </div>
      </header>

      <main id="main-content">
        <section id="signal" className="cinema-hero section-frame">
          <div className="cinema-kicker">01 / Signal direction</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Data pipelines,{" "}
                <span>Databricks and Spark </span>
                shaped into reliable systems.
              </h1>
              <p>
                I am Govind Gupta, a Data Engineer building ETL pipelines,
                Spark SQL datamarts, PySpark validation flows, and Azure data
                systems, backed by strong Java Spring Boot experience in APIs,
                security, event streaming, and production reliability.
              </p>
          <div className="hero-actions">
                <a href="#work" className="primary-link">
                  <span>View selected work</span>
                  <b aria-hidden="true">-&gt;</b>
                </a>
                <a href={`mailto:${contactEmail}`} className="secondary-link">
                  <span>Let's talk</span>
                  <b aria-hidden="true">-&gt;</b>
                </a>
                <a href={resumePath} download className="secondary-link">
                  <span>Download resume</span>
                  <b aria-hidden="true">-&gt;</b>
                </a>
              </div>
            </div>

            <div className="hero-stage data-stage" aria-label="Data engineering pipeline preview">
              <article className="data-card source-card">
                <span>01 / Sources</span>
                <strong>Kafka events + client requirements</strong>
                <small>raw ingestion</small>
              </article>
              <article className="data-card transform-card">
                <span>02 / Transform</span>
                <strong>PySpark joins, aliases and match rules</strong>
                <small>ETL logic</small>
              </article>
              <article className="data-card mart-card">
                <span>03 / Serve</span>
                <strong>Spark SQL datamarts and catalog blocks</strong>
                <small>governed output</small>
              </article>
              <div className="data-orbit" aria-hidden="true">
                <span>bronze</span>
                <span>silver</span>
                <span>gold</span>
              </div>
              <div className="terminal-panel" aria-hidden="true">
                <span>pipeline.status</span>
                <strong>Available for data engineering, ETL and Spring Boot work</strong>
              </div>
            </div>
          </div>

          <div className="stat-strip" aria-label="Portfolio highlights">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section-frame split-section">
          <div>
            <div className="cinema-kicker">02 / Selected work</div>
            <h2>Data systems and Spring Boot services with logic, checks and proof.</h2>
          </div>
          <p>
            A portfolio of practical engineering work: Databricks pipelines,
            Spark logic, Java Spring Boot APIs, machine learning workflows, and
            reliability checks that keep data products understandable and dependable.
          </p>
        </section>

        <section className="project-reel" aria-label="Selected projects">
          {featuredProjects.map((project, index) => (
            <article className="project-row" key={project.name}>
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} source code`}
                className="project-visual"
              >
                <img src={project.image} alt={`${project.name} visual`} loading="lazy" />
              </a>
              <div className="project-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{project.type}</small>
              </div>
              <div className="project-copy">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={`${project.name}-${tag.name}`}>{tag.name}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                {project.live_demo_link ? (
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section id="system" className="section-frame system-section">
          <div className="section-heading">
            <div className="cinema-kicker">03 / Practice system</div>
            <h2>Clean data is what users trust. System design is what keeps it true.</h2>
          </div>

          <div className="practice-grid">
            {practice.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="service-band" aria-label="Specializations">
            {services.map((service) => (
              <div key={service.title}>
                <img src={service.icon} alt="" loading="lazy" />
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-frame experience-section">
          <div className="section-heading">
            <div className="cinema-kicker">04 / About line</div>
            <h2>Now focused on Databricks, ETL and Spark, with strong Java Spring Boot depth.</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article
                className={experience.image ? "has-visual" : ""}
                key={experience.company_name}
              >
                <div className="experience-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <img src={experience.icon} alt="" loading="lazy" />
                </div>
                {experience.image && (
                  <div className="experience-visual" aria-hidden="true">
                    <img src={experience.image} alt={experience.company_name} loading="lazy" />
                  </div>
                )}
                <div>
                  <span>{experience.date}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.company_name}</p>
                </div>
                <ul>
                  {experience.points.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-marquee" aria-label="Technology stack">
          <div>
            {[...dataStack, ...dataStack].map((technology, index) => (
              <span key={`${technology}-${index}`}>
                <em aria-hidden="true">{technology.slice(0, 2)}</em>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="section-frame trust-section">
          <div className="cinema-kicker">05 / Trust proof</div>
          <blockquote>
            "{testimonials[0].testimonial}"
          </blockquote>
          <div>
            <img src={testimonials[0].image} alt={testimonials[0].name} loading="lazy" />
            <p>
              <strong>{testimonials[0].name}</strong>
              <span>
                {testimonials[0].designation}, {testimonials[0].company}
              </span>
            </p>
          </div>
        </section>

        <section id="contact" className="section-frame contact-section">
          <div className="contact-copy">
            <div className="cinema-kicker">06 / Contact action</div>
            <h2>Have a data pipeline, ETL workflow or Spring Boot service that needs form?</h2>
            <p>
              Send the data problem, source systems and expected output. I will
              respond directly, and the first project review is free.
            </p>
            <div className="contact-links">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href="tel:+918006213786">{phoneNumber}</a>
              <a href="https://github.com/Govind516" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/govindgupta1012/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={resumePath} download>
                Resume
              </a>
            </div>
          </div>

          <form className="cinema-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
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
              <span>Email</span>
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
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me what you want to build."
              />
            </label>
            <button type="submit">
              <span>Start a conversation</span>
              <b aria-hidden="true">-&gt;</b>
            </button>
          </form>
        </section>
      </main>

      <footer className="cinema-footer">
        <span>Govind Gupta</span>
        <span>Data engineering / Databricks / Spark / Java Spring Boot</span>
        <a href="#signal">Back to top</a>
      </footer>
    </div>
  );
};

export default CinematicPortfolio;
