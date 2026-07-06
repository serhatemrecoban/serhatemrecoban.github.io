import { useState } from "react";

const profile = {
  name: "Serhat Emre Çoban",
  subtitle: "Ph.D. Student in Information Theory",
  affiliation: "EPFL",
  location: "Lausanne, Switzerland",
  email: "serhat.coban@epfl.ch",
  scholarUrl: "https://scholar.google.com/citations?user=1AlofT0AAAAJ&hl=en&oi=ao",
  githubUrl: "https://github.com/serhatemrecoban",
  yaninaUrl: "https://theory.epfl.ch/yanina/",
  emreUrl: "https://people.epfl.ch/emre.telatar",
};

const links = [
  { label: "Google Scholar", href: profile.scholarUrl },
  { label: "GitHub", href: profile.githubUrl },
];

const researchInterests = [
  "Information theory",
  "Communication Theory",
  "Functional representation",
  "Coding Theory",
  "Privacy and utility tradeoffs",
  "Channel synthesis",
  "Graph entropy",
];

const publications = [
  {
    title: "On Perfect Functional Representations",
    venue: "IEEE International Symposium on Information Theory (ISIT), 2026",
    authors: "Serhat Emre Çoban, Yanina Y. Shkel, Emre Telatar",
    abstract:
      "We study perfect functional representations and related structural questions in information theory. A short abstract can be added here later.",
    links: [
      { label: "paper", href: "#" },
      { label: "bibtex", href: "#" },
    ],
  },
  {
    title: "Machine Learning and Kalman Filtering for Nanomechanical Mass Spectrometry",
    venue: "IEEE Sensors Journal, 2024",
    authors: "Mete Erdogan, Nuri Berke Baytekin, Serhat Emre Çoban, Alper Demir",
    abstract:
      "Nanomechanical resonant sensors are used in mass spectrometry via detection of resonance frequency jumps. " +
      "There is a fundamental trade-off between detection speed and accuracy. Temporal and size resolution are limited by the resonator characteristics and noise. " +
      "A Kalman filtering technique, augmented with maximum-likelihood estimation, was recently proposed as a Pareto optimal solution. " +
      "We present enhancements and robust realizations for this technique, including a confidence boosted thresholding approach as well as machine learning for event detection. " +
      "We describe learning techniques that are based on neural networks and boosted decision trees for temporal location and event size estimation. " +
      "In the pure learning based approach that discards the Kalman filter, the raw data from the sensor are used in training a model for both location and size prediction. " +
      "In the alternative approach that augments a Kalman filter, the event likelihood history is used in a binary classifier for event occurrence. " +
      "Locations and sizes are predicted using maximum-likelihood, followed by a Kalman filter that continually improves the size estimate. " +
      "We present detailed comparisons of the learning based schemes and the confidence boosted thresholding approach, and demonstrate robust performance for a practical realization.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2306.00563" },
      { label: "doi", href: "https://doi.org/10.1109/JSEN.2024.3350730" },
    ],
  },
];

const teaching = [
  "Spring 2026 · EPFL · Teaching Assistant · COM-202 Signal Processing",
  "2026 · EPFL · Course project · Formal Verification / Lean",
  "Add another course, review session, or mentoring activity here.",
];

function Header() {
  return (
    <header className="site-header">
      <nav>
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#misc">Miscellaneous</a>
      </nav>
    </header>
  );
}

function Portrait() {
  return (
    <div className="portrait">
      <span>SÇ</span>
    </div>
  );
}

function Publication({ paper }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="publication">
      <h3>{paper.title}</h3>
      <p className="venue">{paper.venue}</p>
      <p className="authors">{paper.authors}</p>

      <div className="paper-links">
        {paper.links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "hide abstract" : "abstract"}
        </button>
      </div>

      {open && <p className="abstract">{paper.abstract}</p>}
    </article>
  );
}

function ContactLinks() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <p className="contact">
      {showEmail ? (
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      ) : (
        <button
          type="button"
          className="link-button"
          onClick={() => setShowEmail(true)}
        >
          show email
        </button>
      )}

      {links.map((link) => (
        <span key={link.label}>
          <span className="dot">{" \u00b7 "}</span>
          <a href={link.href}>{link.label}</a>
        </span>
      ))}
    </p>
  );
}

export default function App() {
  return (
    <>
      <style>{styles}</style>

      <main className="page">
        <Header />

        <section id="about" className="hero section">
          <Portrait />

          <div className="intro">
            <h1>{profile.name}</h1>

            <p className="subtitle">
              {profile.subtitle}, {profile.affiliation}
            </p>

            <p>
              I am a third-year Ph.D. student at EPFL, advised by{" "}
              <a href={profile.yaninaUrl}>Prof. Yanina Y. Shkel</a> and
              co-advised by{" "}
              <a href={profile.emreUrl}>Prof. Emre Telatar</a>. Before joining
              EPFL, I received my B.Sc. in Electrical and Electronics
              Engineering from Koç University, where I also completed a double
              major in Mathematics.
            </p>

            <p>
              My research interests include{" "}
              {researchInterests.slice(0, -1).join(", ")} and{" "}
              {researchInterests[researchInterests.length - 1]}.
            </p>

            <p>
              I am broadly interested in understanding how information can be
              represented, transmitted, compressed, and protected, especially
              through mathematical structures that reveal clean operational
              meaning.
            </p>

            <ContactLinks />
          </div>
        </section>

        <section id="publications" className="section">
          <h2>Publications</h2>

          <div className="publication-list">
            {publications.map((paper) => (
              <Publication key={paper.title} paper={paper} />
            ))}
          </div>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>

          <ul>
            {teaching.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="misc" className="section">
          <h2>Miscellaneous</h2>

          <ul>
            <li>Add a short personal note here.</li>
            <li>This section can later become notes, blog posts, or links.</li>
          </ul>
        </section>

        <footer>
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}

const styles = `
:root {
  --background: #ffffff;
  --text: #222222;
  --muted: #555555;
  --link: #1f5f9f;
  --line: #dddddd;
  --max-width: 900px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.55;
}

a {
  color: var(--link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.page {
  width: min(var(--max-width), calc(100% - 40px));
  margin: 0 auto;
  padding: 28px 0 48px;
}

.site-header {
  margin-bottom: 42px;
}

.site-header nav {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.site-header a {
  font-size: 1rem;
}

.section {
  margin-bottom: 36px;
  scroll-margin-top: 30px;
}

.hero {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 34px;
  align-items: start;
}

.portrait {
  width: 190px;
  height: 225px;
  display: grid;
  place-items: center;
  background: #f2f2f2;
  color: #666666;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.8rem;
}

.portrait span {
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  border: 1px solid #d4d4d4;
  border-radius: 50%;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.45rem;
  line-height: 1.12;
  font-weight: 500;
}

h2 {
  margin-bottom: 14px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  font-weight: 500;
}

h3 {
  margin-bottom: 5px;
  font-size: 1rem;
  line-height: 1.45;
  font-weight: 600;
}

.subtitle {
  margin-bottom: 22px;
  color: var(--muted);
}

.intro p {
  max-width: 68ch;
}

.contact {
  margin-top: 20px;
}

.link-button {
  border: none;
  background: none;
  color: var(--link);
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.link-button:hover {
  text-decoration: underline;
}

.dot {
  color: var(--muted);
}

.publication-list {
  display: grid;
  gap: 22px;
}

.publication {
  margin-bottom: 4px;
}

.venue {
  margin-bottom: 4px;
}

.authors {
  margin-bottom: 6px;
  color: var(--muted);
}

.paper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.paper-links a::before,
.paper-links button::before {
  content: "[";
  color: var(--text);
}

.paper-links a::after,
.paper-links button::after {
  content: "]";
  color: var(--text);
}

.paper-links button {
  border: none;
  background: none;
  color: var(--link);
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.paper-links button:hover {
  text-decoration: underline;
}

.abstract {
  max-width: 78ch;
  margin-top: 10px;
}

ul {
  margin-top: 0;
  padding-left: 1.25rem;
}

li {
  margin-bottom: 6px;
}

footer {
  margin-top: 42px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .page {
    width: min(100% - 28px, var(--max-width));
    padding-top: 22px;
  }

  .site-header {
    margin-bottom: 32px;
  }

  .site-header nav {
    gap: 14px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .portrait {
    width: 190px;
    height: 225px;
  }

  h1 {
    font-size: 2.15rem;
  }
}
`;
