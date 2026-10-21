import { useEffect } from "react";
import hemaProfile from "./assets/hema-profile.png";
import "./App.css";

const email = "pasupathyhemalatha@gmail.com";
const linkedin = "https://www.linkedin.com/in/hemapasu/";
const github = "https://github.com/pasupathyhemalatha-oss";

const technologies = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "AWS",
  "REST APIs",
  "Shopify",
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces, reusable components, and maintainable web applications.",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Connecting web applications with services, APIs, and data sources.",
    skills: [
      "Node.js",
      "Java",
      "Python",
      "SQL",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    number: "03",
    title: "Testing & Quality",
    description:
      "Improving application reliability through debugging, testing, and collaboration.",
    skills: [
      "Jest",
      "React Testing Library",
      "Postman",
      "Swagger",
      "Debugging",
      "Code Reviews",
    ],
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Working with cloud services, version control, and software delivery workflows.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git",
      "GitHub",
    ],
  },
  {
    number: "05",
    title: "Tools & Collaboration",
    description:
      "Collaborating with teams to plan, develop, test, and deliver software.",
    skills: ["VS Code", "Jira", "Confluence", "ServiceNow", "Agile", "Scrum"],
  },
  {
    number: "06",
    title: "Data & Analytics",
    description:
      "Combining software engineering with business intelligence and digital measurement.",
    skills: [
      "Power BI",
      "Looker Studio",
      "MicroStrategy",
      "Tableau",
      "GA4",
      "Google Tag Manager",
      "Shopify Liquid",
    ],
  },
];

const experiences = [
  {
    number: "01",
    company: "OF​​oundation".replace(/\u200b/g, ""),
    role: "Web Developer",
    type: "INTERNSHIP",
    location: "Utrecht, Netherlands",
    dates: "JUL 2025 — JAN 2026",
    summary:
      "Contributed to web development, e-commerce customization, responsive interfaces, analytics, and reporting automation.",
    responsibilities: [
      "Developed and customized Shopify-based web experiences using HTML, CSS, JavaScript, and Liquid.",
      "Created responsive landing pages and reusable interface components.",
      "Worked with APIs and Google services to support website functionality and measurement.",
      "Used Google Analytics and Google Tag Manager to understand website performance.",
      "Created reporting and KPI visualizations using Looker Studio.",
    ],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Shopify Liquid",
      "GA4",
      "Looker Studio",
    ],
  },
  {
    number: "02",
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    type: "FULL-TIME",
    location: "Insurance Domain",
    dates: "VERIFY EMPLOYMENT DATES",
    summary:
      "Worked on enterprise software development, React applications, reusable components, API integration, and application performance.",
    responsibilities: [
      "Developed and maintained enterprise web application components and user interfaces.",
      "Worked with JavaScript, React, SQL, and application integration workflows.",
      "Built reusable components to improve consistency and development efficiency.",
      "Integrated REST APIs and supported asynchronous data flows.",
      "Collaborated with cross-functional teams on debugging, testing, and software delivery.",
    ],
    technologies: ["React.js", "JavaScript", "SQL", "REST APIs", "Git", "AWS"],
  },
];

const education = [
  {
    number: "01",
    degree: "Master's Degree",
    title: "Business Intelligence and Analytics",
    institution: "ESC Clermont School of Business",
    location: "France",
    dates: "2024 — 2025",
    description:
      "Postgraduate studies connecting business intelligence, analytics, and data-informed decision-making.",
    subjects: ["Business Intelligence", "Data Analytics", "SQL", "Reporting"],
  },
  {
    number: "02",
    degree: "Bachelor's Degree",
    title: "Electrical and Electronics Engineering",
    institution: "Sri Ramakrishna Engineering College",
    location: "India",
    dates: "2016 — 2020",
    description:
      "Engineering education developing analytical thinking, technical understanding, and structured problem-solving.",
    subjects: ["Engineering", "Technical Systems", "Problem-solving"],
  },
];

const projects = [
  {
    number: "01",
    category: "FRONTEND DEVELOPMENT",
    title: "Personal Portfolio Website",
    description:
      "My personal developer portfolio showcasing professional experience, technical skills, education, and selected projects in a responsive, dark-themed interface.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS3",
      "React Hooks",
      "IntersectionObserver",
    ],
    implementation: [
      "Built reusable, data-driven sections for experience, skills, education, projects, and contact details with React and TypeScript.",
      "Used IntersectionObserver through React useEffect to reveal section content as visitors scroll, with a graceful fallback when the API is unavailable.",
      "Created the responsive dark navy-and-cyan design, animated profile elements, sticky navigation, and component styling with custom CSS.",
    ],
    symbol: "</>",
    status: "LIVE WEBSITE",
    demoUrl: "https://pasupathyhemalatha-oss.github.io/hema-portfolio/",
    repoUrl: "https://github.com/pasupathyhemalatha-oss/hema-portfolio",
    demoLabel: "View Live Portfolio",
    sourceLabel: "View GitHub",
  },
  {
    number: "02",
    category: "REACT E-COMMERCE",
    title: "HPMart Marketplace",
    description:
      "An interactive, responsive storefront demo with a product catalogue, category browsing, search, sorting, filters, quick view, cart, and wishlist.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS3",
      "React Hooks",
      "localStorage",
    ],
    implementation: [
      "Used typed product data and React state to drive the catalogue, product quick view, cart drawer, and wishlist.",
      "Used memoized client-side filtering and sorting for search, category, price, rating, deals, and wishlist views.",
      "Persisted cart, wishlist, and recently viewed products in browser localStorage; checkout is a demo and collects no payment.",
    ],
    symbol: "HP",
    status: "INTERACTIVE DEMO",
    demoUrl: "",
    repoUrl: "https://github.com/pasupathyhemalatha-oss/hpmart",
    demoLabel: "Live Demo Soon",
    sourceLabel: "View GitHub",
  },
  {
    number: "03",
    category: "REACT ANALYTICS DASHBOARD",
    title: "Pulseboard Analytics Dashboard",
    description:
      "An analytics workspace demo for exploring KPI trends, channel performance, page engagement, conversion steps, device mix, and marketing campaigns.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS3",
      "SVG Charts",
      "localStorage",
    ],
    implementation: [
      "Built trend charts and sparklines with inline SVG from typed, illustrative data rather than a charting-library dependency.",
      "Added 7-, 30-, and 90-day ranges, metric and channel filters, searchable/sortable page data, campaign filtering, and CSV export.",
      "Added a light/dark theme and browser-persisted annotations; the metrics are sample data and are not connected to GA4 or a live analytics provider.",
    ],
    symbol: "↗",
    status: "INTERACTIVE DEMO",
    demoUrl: "",
    repoUrl: "https://github.com/pasupathyhemalatha-oss/pulseboard-dashboard",
    demoLabel: "Live Demo Soon",
    sourceLabel: "View GitHub",
  },
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="logo" aria-label="Home">
          H<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEER · LYON, FRANCE
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1 className="hero-title">
              Hemalatha
              <br />
              <span>Pasupathy.</span>
            </h1>

            <h2 className="hero-role">
              Software Engineer
              <span className="role-divider"> / </span>
              <span className="role-highlight">Frontend Developer</span>
            </h2>

            <p className="hero-description">
              I build scalable web applications, responsive interfaces, and
              reliable digital experiences. With over five years of software
              engineering experience, I combine frontend development, enterprise
              application experience, and a data-informed mindset.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary">
                Explore my work <span>↘</span>
              </a>

              <a href="#contact" className="button-secondary">
                Let&apos;s connect <span>↗</span>
              </a>
            </div>

            <div className="social-links">
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={`mailto:${email}`}>Email ↗</a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>
                  5<span>+</span>
                </strong>
                <small>YEARS EXPERIENCE</small>
              </div>

              <div className="stat-divider" />

              <div className="stat">
                <strong>React</strong>
                <small>FRONTEND DEVELOPMENT</small>
              </div>

              <div className="stat-divider" />

              <div className="stat">
                <strong>BI</strong>
                <small>DATA & ANALYTICS</small>
              </div>
            </div>
          </div>

          {/* CIRCULAR PORTRAIT */}

          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="profile-circle">
              <div className="profile-glow" />

              <div className="profile-orbit profile-orbit-one" />
              <div className="profile-orbit profile-orbit-two" />

              <div className="profile-image-frame">
                <img
                  src={hemaProfile}
                  alt="Hemalatha Pasupathy"
                  className="profile-image"
                />
              </div>

              <div className="profile-badge">
                <span className="status-dot" />
                SOFTWARE ENGINEER
              </div>

              <span className="profile-star profile-star-one">✳</span>
              <span className="profile-star profile-star-two">✦</span>
            </div>

            <div className="floating-badge badge-top">
              <span className="badge-icon">✳</span>
              <div>
                <strong>Frontend Engineering</strong>
                <small>React · TypeScript</small>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <span className="badge-icon badge-icon-blue">{"{ }"}</span>
              <div>
                <strong>Building for the web</strong>
                <small>Code · Creativity · Impact</small>
              </div>
            </div>

            <div className="visual-caption">
              <span className="caption-line" />
              <span>IDEAS INTO INTERFACES</span>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY STRIP */}

        <div className="tech-strip">
          <span className="tech-strip-label">MY TECHNOLOGY STACK</span>

          <div className="tech-track">
            {technologies.map((technology) => (
              <span className="tech-item" key={technology}>
                {technology}
                <span className="tech-star">✳</span>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}

        <section className="about-section" id="about">
          <div className="about-container">
            <div className="section-eyebrow reveal">01 / ABOUT ME</div>

            <div className="about-heading-row reveal">
              <h2 className="about-heading">
                Engineering with <span>purpose.</span>
              </h2>

              <p className="about-intro">
                Software engineer. Problem solver.
                <span>
                  Passionate about building better digital experiences.
                </span>
              </p>
            </div>

            <div className="about-body">
              <div className="about-story reveal">
                <h3>
                  Good software is more than code. It&apos;s the experience
                  people remember.
                </h3>

                <p>
                  I am Hemalatha Pasupathy, a software engineer with over five
                  years of professional experience. I enjoy turning complex
                  requirements into reliable applications with clean
                  architecture, reusable components, and intuitive interfaces.
                </p>

                <p>
                  At Cognizant Technology Solutions, I worked on enterprise
                  applications in the insurance domain, contributing to
                  application development, frontend components, integrations,
                  and software delivery.
                </p>

                <p>
                  At OFoundation in the Netherlands, I contributed to web
                  development, Shopify customization, responsive experiences,
                  and website analytics.
                </p>

                <p>
                  My background in Business Intelligence and Analytics adds a
                  data-informed perspective to my engineering approach. I care
                  about how applications look, perform, and help people
                  accomplish meaningful tasks.
                </p>

                <a href="#experience" className="text-link">
                  Explore my professional journey <span>↗</span>
                </a>
              </div>

              <div className="about-highlights reveal">
                <article className="highlight-row">
                  <span className="highlight-number">01</span>
                  <div>
                    <h4>Frontend Engineering</h4>
                    <p>
                      Responsive interfaces, reusable components, and
                      maintainable React applications.
                    </p>
                  </div>
                </article>

                <article className="highlight-row">
                  <span className="highlight-number">02</span>
                  <div>
                    <h4>Enterprise Applications</h4>
                    <p>
                      Application development and maintenance in enterprise
                      environments.
                    </p>
                  </div>
                </article>

                <article className="highlight-row">
                  <span className="highlight-number">03</span>
                  <div>
                    <h4>APIs & Integration</h4>
                    <p>
                      Connecting interfaces with APIs, data sources, and
                      external services.
                    </p>
                  </div>
                </article>

                <article className="highlight-row">
                  <span className="highlight-number">04</span>
                  <div>
                    <h4>Data-Informed Thinking</h4>
                    <p>
                      Combining software engineering with analytics and business
                      intelligence.
                    </p>
                  </div>
                </article>

                <div className="about-signoff">
                  <span />
                  <p>
                    Curious by nature. Thoughtful by design.{" "}
                    <span>Always learning.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section
          className="experience-section section-container"
          id="experience"
        >
          <div className="experience-sidebar reveal">
            <span className="section-eyebrow">02 / EXPERIENCE</span>

            <h2 className="section-title">
              Built through <span>experience.</span>
            </h2>

            <p>
              Bringing together enterprise software experience and hands-on web
              development.
            </p>

            <div className="experience-sidebar-note">
              <span className="status-dot" />
              PROFESSIONAL JOURNEY
            </div>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card reveal"
                key={experience.number}
              >
                <div className="experience-index">{experience.number}</div>

                <div className="experience-content">
                  <div className="experience-topline">
                    <span className="experience-label">
                      {experience.type} · {experience.location}
                    </span>
                    <span className="experience-duration">
                      {experience.dates}
                    </span>
                  </div>

                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-description">{experience.summary}</p>

                  <h4 className="responsibilities-title">KEY CONTRIBUTIONS</h4>

                  <ul className="experience-points">
                    {experience.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="technology-list">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="skills-section" id="skills">
          <div className="section section-container">
            <div className="section-topline reveal">
              <span className="section-eyebrow">03 / TECHNICAL TOOLKIT</span>
              <span className="section-note">
                Development · Cloud · Analytics
              </span>
            </div>

            <h2 className="section-title reveal">
              Tools for turning ideas <span>into reality.</span>
            </h2>

            <p className="section-description reveal">
              A combination of frontend engineering, application integration,
              cloud technologies, testing, and analytics.
            </p>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group reveal" key={group.number}>
                  <div className="skill-group-top">
                    <span>{group.number}</span>
                    <span className="skill-group-arrow">↗</span>
                  </div>

                  <h3>{group.title}</h3>
                  <p>{group.description}</p>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}

        <section className="education-section" id="education">
          <div className="section section-container">
            <div className="section-topline reveal">
              <span className="section-eyebrow">04 / EDUCATION</span>
              <span className="section-note">Engineering meets analytics</span>
            </div>

            <h2 className="section-title reveal">
              Learning beyond <span>the code.</span>
            </h2>

            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card reveal" key={item.number}>
                  <div className="education-card-top">
                    <span className="education-number">{item.number}</span>
                    <span className="education-period">{item.dates}</span>
                  </div>

                  <span className="education-qualification">{item.degree}</span>

                  <h3>{item.title}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-location">{item.location}</p>

                  <p className="education-description">{item.description}</p>

                  <div className="technology-list">
                    {item.subjects.map((subject) => (
                      <span key={subject}>{subject}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="projects-section" id="projects">
          <div className="section section-container">
            <div className="section-topline reveal">
              <span className="section-eyebrow">05 / SELECTED PROJECTS</span>
              <span className="section-note">Code · Creativity · Impact</span>
            </div>

            <div className="projects-heading reveal">
              <h2 className="section-title">
                Ideas into <span>applications.</span>
              </h2>

              <p>
                I turn ideas into practical digital experiences through
                responsive frontend development, e-commerce customization,
                reusable components, and thoughtful engineering.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.number}>
                  <div className={`project-art project-art-${project.number}`}>
                    <span className="project-number">{project.number}</span>
                    <span className="project-symbol">{project.symbol}</span>
                    <span className="project-art-caption">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-info">
                    <div className="project-meta">
                      <span className="project-category">
                        {project.category}
                      </span>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-implementation">
                      <span className="project-implementation-label">
                        HOW IT&apos;S IMPLEMENTED
                      </span>
                      <ul>
                        {project.implementation.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="project-actions"
                      aria-label={`${project.title} links`}
                    >
                      {project.demoUrl ? (
                        <a
                          className="project-link project-link-primary"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.demoLabel} for ${project.title}`}
                        >
                          {project.demoLabel} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span
                          className="project-link project-link-disabled"
                          aria-disabled="true"
                          title="This project has not been deployed as a live website yet."
                        >
                          {project.demoLabel}
                        </span>
                      )}

                      {project.repoUrl ? (
                        <a
                          className="project-link project-link-secondary"
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.sourceLabel} for ${project.title}`}
                        >
                          {project.sourceLabel}{" "}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span
                          className="project-link project-link-disabled"
                          aria-disabled="true"
                          title="Source code is not publicly available for this professional project."
                        >
                          {project.sourceLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="project-disclaimer">
              HPMart and Pulseboard are interactive portfolio demos. Their
              commerce and analytics data are illustrative; neither is connected
              to a live commerce backend or analytics provider.
            </p>
          </div>
        </section>

        {/* SECTION 6 — PROFESSIONAL DEVELOPMENT */}

        <section className="credentials-section" id="development">
          <div className="section section-container">
            <span className="section-eyebrow reveal">
              06 / PROFESSIONAL DEVELOPMENT
            </span>

            <h2 className="section-title reveal">
              Always learning. <span>Always growing.</span>
            </h2>

            <p className="section-description reveal">
              Continuously developing my technical skills through practical
              projects, professional experience, and independent learning.
            </p>

            <div className="simple-development-list">
              <div className="simple-development-item reveal">
                <span>01</span>
                <div>
                  <h3>Frontend Development</h3>
                  <p>React.js, JavaScript, TypeScript, HTML and CSS</p>
                </div>
              </div>

              <div className="simple-development-item reveal">
                <span>02</span>
                <div>
                  <h3>Cloud & Software Engineering</h3>
                  <p>AWS, REST APIs, Git and application development</p>
                </div>
              </div>

              <div className="simple-development-item reveal">
                <span>03</span>
                <div>
                  <h3>Data & Analytics</h3>
                  <p>Power BI, Looker Studio, SQL and Google Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — LANGUAGES */}

        <section className="languages-section" id="languages">
          <div className="section section-container">
            <span className="section-eyebrow reveal">07 / LANGUAGES</span>

            <h2 className="section-title reveal">
              Languages <span></span>
            </h2>

            <div className="simple-language-list">
              <div className="simple-language-item reveal">
                <span>EN</span>
                <h3>English</h3>
                <p>Professional communication</p>
              </div>

              <div className="simple-language-item reveal">
                <span>TA</span>
                <h3>Tamil</h3>
                <p>Fluent</p>
              </div>

              <div className="simple-language-item reveal">
                <span>TE</span>
                <h3>Telugu</h3>
                <p>Fluent</p>
              </div>

              <div className="simple-language-item reveal">
                <span>FR</span>
                <h3>French</h3>
                <p>Currently learning</p>
              </div>

              <div className="simple-language-item reveal">
                <span>NL</span>
                <h3>Dutch</h3>
                <p>Currently learning</p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT — SECTION 8 */}

        <section className="contact-section" id="contact">
          <div className="section-container contact-inner">
            <span className="section-eyebrow reveal">
              08 / LET&apos;S CONNECT
            </span>

            <h2 className="contact-title reveal">
              Let&apos;s build <span>something meaningful.</span>
            </h2>

            <div className="contact-bottom">
              <p>
                Interested in frontend engineering, React development,
                application performance, or collaboration? Let&apos;s start a
                conversation.
              </p>

              <a
                className="button-primary contact-button"
                href={`mailto:${email}`}
              >
                Get in touch <span>↗</span>
              </a>
            </div>

            <div className="contact-details">
              <a href={`mailto:${email}`}>{email}</a>

              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>

            <div className="contact-decoration">HP.</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          H<span>.</span>
        </a>

        <p>Designed & built by Hemalatha Pasupathy · Software Engineer</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
