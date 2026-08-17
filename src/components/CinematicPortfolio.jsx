import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { avatar } from "../assets";
import { experiences, projects, testimonials } from "../constants";

const contactEmail = "guptagovind516@gmail.com";
const phoneNumber = "+91 8006213786";
const resumePath = "/GovindGupta_SoftwareEngineer.pdf";

// Section order matches page order: About, Experience, Work, Contact
const navItems = [
  { id: "about", method: "GET", path: "/about" },
  { id: "experience", method: "GET", path: "/experience" },
  { id: "work", method: "GET", path: "/work" },
  { id: "contact", method: "GET", path: "/contact" },
];

const bootLines = [
  <>govind.exe --booting</>,
  <>loading databricks.core ....... <em>[OK]</em></>,
  <>loading spark.sql.metrics ..... <em>[OK]</em></>,
  <>loading etl.pipeline .......... <em>[OK]</em></>,
  <>system online — v4.2.0</>,
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
  const [sending, setSending] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState(getInitialTheme);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const [startedAt] = useState(() => Date.now());

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

  // Scroll progress bar + nav scrolled state + status bar visibility
  useEffect(() => {
    const progressBar = document.querySelector(".brut-progress span");
    const nav = document.querySelector(".brut-nav");
    const statusBar = document.querySelector(".system-status");
    if (!progressBar || !nav) return;

    let ticking = false;
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
      progressBar.style.width = `${pct}%`;
      nav.classList.toggle("scrolled", scrollTop > 8);
      if (statusBar) {
        statusBar.classList.toggle(
          "is-hidden",
          scrollTop > window.innerHeight * 0.75
        );
      }
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
    const ring = document.querySelector(".brut-cursor-ring");
    if (!cursor) return;

    document.documentElement.classList.add("has-cursor");

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = null;

    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      cursor.classList.add("is-visible");
      if (ring) ring.classList.add("is-visible");
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    const isButtonLike = (target) =>
      target.closest(
        ".brut-button, .project-arrow, .theme-toggle, .brut-resume, .is-hire, button, input, textarea, select, label"
      );
    const isLink = (target) => target.closest("a");

    const onOver = (event) => {
      if (isButtonLike(event.target)) {
        cursor.classList.add("is-active");
        return;
      }
      if (isLink(event.target)) {
        cursor.classList.add("is-text");
      }
    };

    const onOut = (event) => {
      if (isButtonLike(event.target)) {
        cursor.classList.remove("is-active");
      }
      if (isLink(event.target)) {
        cursor.classList.remove("is-text");
      }
    };

    const onLeave = () => {
      cursor.classList.remove("is-visible", "is-active", "is-text");
      if (ring) ring.classList.remove("is-visible");
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
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

  // Intro preloader
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPreloaderDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setPreloaderDone(true);
      document.body.style.overflow = "";
    }, 1300);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Live clock for the system status bar
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  // Magnetic buttons + card tilt (fine pointers, no reduced motion)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const magneticEls = document.querySelectorAll(
      ".brut-button, .project-arrow, .brut-resume, .theme-toggle"
    );
    const onMagneticMove = (event) => {
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      el.style.translate = `${x * 0.18}px ${y * 0.3}px`;
    };
    const onMagneticLeave = (event) => {
      event.currentTarget.style.translate = "";
    };
    magneticEls.forEach((el) => {
      el.addEventListener("mousemove", onMagneticMove);
      el.addEventListener("mouseleave", onMagneticLeave);
    });

    const tiltEls = document.querySelectorAll(".brut-project");
    const onTiltMove = (event) => {
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(
        2
      )}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-2px)`;
    };
    const onTiltLeave = (event) => {
      event.currentTarget.style.transform = "";
    };
    tiltEls.forEach((el) => {
      el.addEventListener("mousemove", onTiltMove);
      el.addEventListener("mouseleave", onTiltLeave);
    });

    return () => {
      magneticEls.forEach((el) => {
        el.removeEventListener("mousemove", onMagneticMove);
        el.removeEventListener("mouseleave", onMagneticLeave);
      });
      tiltEls.forEach((el) => {
        el.removeEventListener("mousemove", onTiltMove);
        el.removeEventListener("mouseleave", onTiltLeave);
      });
    };
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_7te322b",
        "template_kgqdx6i",
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_name: "Govind Gupta",
          to_email: contactEmail,
          message: form.message,
        },
        "tGpGdhVM1VV82Vdzg"
      )
      .then(
        () => {
          setSending(false);
          toast.success("Message sent successfully!", {
            className: "toast-theme toast-theme--success",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setSending(false);
          console.error(error);
          toast.error("Oops, something went wrong. Please try again.", {
            className: "toast-theme toast-theme--error",
          });
        }
      );
  };

  const istTime = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
  const uptimeSeconds = Math.max(
    0,
    Math.floor((now.getTime() - startedAt) / 1000)
  );
  const uptime = [
    Math.floor(uptimeSeconds / 3600),
    Math.floor((uptimeSeconds % 3600) / 60),
    uptimeSeconds % 60,
  ]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return (
    <div className={`brut-site ${preloaderDone ? "is-loaded" : ""}`}>
      <div
        className={`preloader ${preloaderDone ? "is-done" : ""}`}
        aria-hidden="true"
      >
        <div className="boot-window">
          {bootLines.map((line, index) => (
            <p
              className="boot-line"
              key={index}
              style={{ "--line-delay": `${index * 160}ms` }}
            >
              {line}
            </p>
          ))}
          <span className="boot-cursor" aria-hidden="true">
            ▋
          </span>
        </div>
      </div>

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="brut-cursor" aria-hidden="true" />
      <div className="brut-cursor-ring" aria-hidden="true" />

      <div className="system-status" aria-hidden="true">
        <span>IST {istTime}</span>
        <span>UP {uptime}</span>
        <span>DATA-ONLINE</span>
      </div>

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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              <span className="method">{item.method}</span>
              {item.path}
            </a>
          ))}
          <a className="is-hire" href="#contact" aria-label="Hire Govind Gupta">
            <span className="method">POST</span> /hire
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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === item.id ? "true" : undefined}
            >
              <span className="method">{item.method}</span>
              {item.path}
            </a>
          ))}
          <a href={resumePath} download onClick={() => setMenuOpen(false)}>
            <span className="method">GET</span> /resume
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
              <img
                src={avatar}
                alt="Govind Gupta"
                loading="lazy"
                width="208"
                height="208"
                decoding="async"
              />
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

          <div className="testimonial-card" data-reveal>
            <div className="testimonial-photo">
              <img
                src={testimonials[0].image}
                alt={`${testimonials[0].name}, ${testimonials[0].designation} at ${testimonials[0].company}`}
                width="100"
                height="100"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figure className="testimonial-body">
              <span className="testimonial-mark" aria-hidden="true">
                "
              </span>
              <blockquote>{testimonials[0].testimonial}</blockquote>
              <figcaption>
                <strong>{testimonials[0].name}</strong>
                <span>
                  {testimonials[0].designation} — {testimonials[0].company}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="brut-about">
          <div className="section-label" data-reveal>
            <h2>/ Experience</h2>
            <span>2024 — Present</span>
          </div>

          <div className="brut-timeline">
            {experiences.map((experience, index) => (
              <article
                className="timeline-row"
                key={experience.company_name}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` }}
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
                  {experience.points.slice(0, 2).map((point) => (
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
                style={{ "--reveal-delay": `${index * 70}ms` }}
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
                    decoding="async"
                    width={project.imageWidth}
                    height={project.imageHeight}
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
                  Send the data problem, source systems, and expected output —
                  the first project review is free.
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
                <button
                  type="submit"
                  className="brut-button brut-submit"
                  disabled={sending}
                >
                  {sending ? "Transmitting…" : "Transmit Data"} <b>→</b>
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

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CinematicPortfolio;
