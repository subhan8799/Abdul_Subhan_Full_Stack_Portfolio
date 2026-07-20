import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  socialMediaLinks,
  skills,
  experience,
  degrees,
  projectsHeader,
  contactPageData,
  seo,
} from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "./HomeComponent.css";

const socialLinks = socialMediaLinks.filter(
  (item) => item.link && item.fontAwesomeIcon
);

const projectCards = ProjectsData.data.slice(0, 4);

function HomeComponent() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const heroStyle = useMemo(
    () => ({
      transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    }),
    [tilt]
  );

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setTilt({ x: (-y / rect.height) * 18, y: (x / rect.width) * 18 });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="portfolio-shell">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:type" content={seo.og.type} />
        <meta property="og:url" content={seo.og.url} />
      </Helmet>

      <header className="page-header">
        <div className="brand">
          <span className="brand-mark">AS</span>
          <div>
            <p className="brand-label">Abdul Subhan</p>
            <p className="brand-subtitle">Senior Front-End Developer</p>
          </div>
        </div>
        <nav className="page-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Premium digital experiences</span>
            <h1>
              Crafting elegant <span>interfaces</span> with refined code.
            </h1>
            <p>{greeting.subTitle}</p>
            <div className="hero-actions">
              <a href={greeting.resumeLink} className="button button-primary" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a href="#projects" className="button button-secondary">
                Explore Projects
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <i className={`fab ${item.fontAwesomeIcon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div
            className="hero-visual"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div className="hero-visual-card" style={heroStyle}>
              <div className="hero-glow-ring" />
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-spark hero-spark-1" />
              <div className="hero-spark hero-spark-2" />
              <div className="hero-core">
                <p>Build · Design · Launch</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-overview">
          <div className="section-intro">
            <p className="eyebrow">About</p>
            <h2>Design systems, product strategy, and performance-first development.</h2>
          </div>
          <div className="section-grid about-grid">
            <article className="feature-card">
              <h3>Developer-first focus</h3>
              <p>
                I create responsive React applications with crisp interactions and reliable architecture.
              </p>
            </article>
            <article className="feature-card">
              <h3>Collaborative execution</h3>
              <p>
                I work closely with teams to translate product goals into polished digital experiences.
              </p>
            </article>
            <article className="feature-card">
              <h3>Performance & accessibility</h3>
              <p>
                High-performance pages, accessible structure, and intuitive animations are at the heart of every project.
              </p>
            </article>
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="section-head">
            <span className="eyebrow">What I do</span>
            <h2>Capabilities that transform ideas into products.</h2>
          </div>
          <div className="skills-grid">
            {skills.data.map((item) => (
              <article key={item.title} className="skill-card">
                <h3>{item.title}</h3>
                <ul>
                  {item.skills.map((statement) => (
                    <li key={statement}>{statement}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {item.softwareSkills.map((skill) => (
                    <span key={skill.skillName} className="skill-tag">
                      {skill.skillName}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2>Impactful roles across product and platform teams.</h2>
          </div>
          <div className="timeline-grid">
            {experience.sections.flatMap((section) =>
              section.experiences.map((item) => (
                <article key={item.title} className="timeline-card">
                  <div className="timeline-badge">{item.duration}</div>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">
                    {item.company} · <span>{item.location}</span>
                  </p>
                  <p>{item.description}</p>
                </article>
              ))
            )}
          </div>
        </section>

        <section className="section-block" id="education">
          <div className="section-head">
            <span className="eyebrow">Education</span>
            <h2>Continuous learning with a foundation in software engineering.</h2>
          </div>
          <div className="education-grid">
            {degrees.degrees.map((item) => (
              <article key={item.title} className="education-card">
                <h3>{item.title}</h3>
                <p className="education-subtitle">{item.subtitle}</p>
                <p className="education-duration">{item.duration}</p>
                <ul>
                  {item.descriptions.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
                <a className="link" href={item.website_link} target="_blank" rel="noreferrer">
                  Visit university
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-head">
            <span className="eyebrow">Projects</span>
            <h2>{projectsHeader.description}</h2>
          </div>
          <div className="project-grid">
            {projectCards.map((project) => (
              <article key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  {project.languages.map((language) => (
                    <span key={language.name} className="project-pill">
                      <span className="iconify" data-icon={language.iconifyClass}></span>
                      {language.name}
                    </span>
                  ))}
                </div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </article>
            ))}
          </div>
          <a className="button button-secondary project-cta" href={greeting.githubProfile} target="_blank" rel="noreferrer">
            View More on GitHub
          </a>
        </section>

        <section className="section-block section-contact" id="contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">Let’s connect</span>
              <h2>Fast responses, clear collaboration, and modern engineering.</h2>
              <p>{contactPageData.contactSection.description}</p>
              <div className="contact-details">
                <div>
                  <strong>Office</strong>
                  <p>{contactPageData.addressSection.subtitle}</p>
                </div>
                <div>
                  <strong>Location</strong>
                  <p>{contactPageData.addressSection.locality}, {contactPageData.addressSection.region}</p>
                </div>
              </div>
              <div className="hero-socials contact-row">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.link} target="_blank" rel="noreferrer" aria-label={item.name} style={{ backgroundColor: item.backgroundColor }}>
                    <i className={`fab ${item.fontAwesomeIcon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-card">
              <p>Ready to start something together?</p>
              <a href={greeting.resumeLink} target="_blank" rel="noreferrer" className="button button-primary">
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <p>Designed and built by <strong>{greeting.title}</strong> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default HomeComponent;
