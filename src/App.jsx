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

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

const portraitPhotos = [
  "/photos/Emre-personal-website-photo-1.jpeg",
  "/photos/Emre-personal-website-photo-2.jpeg",
  "/photos/Emre-personal-website-photo-3.jpeg",
  "/photos/Emre-personal-website-photo-4.jpeg",
  "/photos/Emre-personal-website-photo-5.jpeg",
  "/photos/Emre-personal-website-photo-6.jpeg",
  "/photos/Emre-personal-website-photo-7.jpeg",
  "/photos/Emre-personal-website-photo-8.jpeg",
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
      "For given random variables (X, Y), functional representation lemma states that there exists a random variable Z and a deterministic function g such that Y = g(X, Z), and X is independent of Z. " +
      "In other words, Z captures all the information about Y not contained in X. We refer to Z as a \"perfect functional representation\" if it satisfies I(Y; Z) = H(Y|X). " +
      "We show that the existence of perfect representation depends solely on the conditional distribution p_{Y|X} and define the corresponding conditional distributions as perfectly representable. " +
      "We provide a necessary and sufficient condition for p_{Y|X} to be perfectly representable. " +
      "Finally, we cast the problem of checking perfect representability as a linear program and discuss its computational tractability.",
    bibtex: `@inproceedings{coban2026perfect,
  author = {Serhat Emre {\\c{C}}oban and Yanina Y. Shkel and Emre Telatar},
  title = {On Perfect Functional Representations},
  booktitle = {Proceedings of the 2026 IEEE International Symposium on Information Theory (ISIT)},
  year = {2026},
  address = {Guangzhou, China}
}`,
    links: [{ label: "paper", href: "" }],
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

const projects = [
  {
    title: "Formally Verified PCP Constructions",
    venue: "Lean formalization project (ongoing)",
    authors:
      "Serhat Emre Coban, Davide Mazzali, Khanh Nguyen, Vincent Palma, Yanting Teng, Thomas Vidick, Yuxi Zheng",
    abstract:
      "We present a Lean formalization of an exponential-length PCP for quadratic equation satisfiability, a construction that appears as a component in the original proof of the PCP theorem. " +
      "The development includes Fourier-analytic tools for functions over general finite fields, which we use to formalize the BLR linearity test in this setting. " +
      "Separately, we formalize the Gowers–Hatami theorem and its reduction to BLR linearity tests. " +
      "On the PCP side, we develop a modular verifier interface using ArkLib’s OracleComp framework, allowing PCP verifiers to be represented as probabilistic oracle computations. " +
      "This interface, and the accompanying libraries for finite-field Fourier analysis and linearity testing, may be of independent interest.",
    links: [
      {
        label: "Website",
        href: "https://yuxi-zheng.github.io/blr-pcp-formal-verification/",
      },
      {
        label: "GitHub",
        href: "https://github.com/yuxi-zheng/blr-pcp-formal-verification",
      },
    ],
  },
  {
    title: "LeanInfoTheory",
    venue: "Lean formalization project (ongoing)",
    authors: "Serhat Emre Coban",
    abstract:
      "We present LeanInfoTheory, an early-stage Lean/mathlib project for finite information measures and a planned entropy-inequality certificate pipeline. " +
      "The current development builds a mathlib-based finite-PMF Shannon foundation, including entropy, conditional entropy, mutual information, conditional mutual information, and named marginals. " +
      "The library proves relabeling, coordinate-swap, product-reassociation, upper-bound, and uniform-law sanity theorems, and includes a semantic bridge identifying finite entropy with expected self-information over PMF.toMeasure. " +
      "On the automation side, it develops formal entropy expressions, primitive Shannon inequality soundness theorems, and a proof-carrying checked-certificate layer with exact rational decomposition matching. " +
      "As a first non-toy demo, the project derives entropy submodularity from a validated conditional-mutual-information certificate, with future work aimed at KL/conditional-law bridges, external certificate import, and network-information-theory converse examples.",
    links: [
      {
        label: "Website",
        href: "https://serhatemrecoban.github.io/LeanInfoTheory/",
      },
      {
        label: "GitHub",
        href: "https://github.com/serhatemrecoban/LeanInfoTheory",
      },
    ],
  },
];

const talks = [
  {
    title: "On Perfect Functional Representations",
    venue: "IEEE International Symposium on Information Theory (ISIT)",
    date: "2026",
  },
];

const teaching = [
  {
    course: "COM-202 Signal Processing",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Spring 2025, Spring 2026",
  },
  {
    course: "COM-404 Information Theory and Coding",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Fall 2025",
  },
  {
    course: "COM-406 Foundations of Data Science",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Fall 2024",
  },
  {
    course: "COM-302 Principles of Digital Communications",
    role: "Teaching Assistant",
    institution: "EPFL",
    terms: "Spring 2024",
  },
  {
    course: "ELEC 201 Signals and Systems",
    role: "Teaching Assistant",
    institution: "Koç University",
    terms: "Fall 2022",
  },
  {
    course: "ELEC 303 Digital Signal Processing",
    role: "Teaching Assistant",
    institution: "Koç University",
    terms: "Spring 2022",
  },
  {
    course: "ELEC 301 Systems, Control and Communication",
    role: "Teaching Assistant",
    institution: "Koç University",
    terms: "Fall 2021",
  },
];

function Header() {
  return (
    <header className="site-header">
      <nav>
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#projects">Projects</a>
        <a href="#talks">Talks</a>
        <a href="#teaching">Teaching</a>
        <a href="#misc">Miscellaneous</a>
      </nav>
    </header>
  );
}

function Portrait() {
  const [photoSrc, setPhotoSrc] = useState(() => {
    const index = Math.floor(Math.random() * portraitPhotos.length);
    return portraitPhotos[index];
  });

  return (
    <div className="portrait-shell">
      <div className="portrait">
        <img
          src={photoSrc}
          alt={profile.name}
          className="portrait-image"
          onError={() => setPhotoSrc(portraitPhotos[0])}
        />
      </div>
    </div>
  );
}

function Publication({ paper }) {
  const [open, setOpen] = useState(false);
  const [bibtexOpen, setBibtexOpen] = useState(false);

  return (
    <article className="publication">
      <h3>{paper.title}</h3>
      <p className="venue">{paper.venue}</p>
      <p className="authors">{paper.authors}</p>

      <div className="paper-links">
        {paper.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith("http") ? externalLinkProps : {})}
          >
            {link.label}
          </a>
        ))}
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "hide abstract" : "abstract"}
        </button>
        {paper.bibtex && (
          <button type="button" onClick={() => setBibtexOpen(!bibtexOpen)}>
            {bibtexOpen ? "hide bibtex" : "bibtex"}
          </button>
        )}
      </div>

      {open && <p className="abstract">{paper.abstract}</p>}
      {bibtexOpen && (
        <pre className="bibtex">
          <code>{paper.bibtex}</code>
        </pre>
      )}
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
          <a href={link.href} {...externalLinkProps}>
            {link.label}
          </a>
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
              <a href={profile.yaninaUrl} {...externalLinkProps}>
                Prof. Yanina Y. Shkel
              </a>{" "}
              and co-advised by{" "}
              <a href={profile.emreUrl} {...externalLinkProps}>
                Prof. Emre Telatar
              </a>
              {". "}
              Before joining
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

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="publication-list">
            {projects.map((project) => (
              <Publication key={project.title} paper={project} />
            ))}
          </div>
        </section>

        <section id="talks" className="section">
          <h2>Talks</h2>

          <ul className="detail-list">
            {talks.map((talk) => (
              <li key={`${talk.title}-${talk.date}`}>
                <strong>{talk.title}</strong>
                <span className="detail-meta">{talk.venue}</span>
                <span className="detail-terms">{talk.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>

          <ul className="detail-list">
            {teaching.map((item) => (
              <li key={`${item.course}-${item.terms}`}>
                <strong>{item.course}</strong>
                <span className="detail-meta">
                  {item.role}, {item.institution}
                </span>
                <span className="detail-terms">{item.terms}</span>
              </li>
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
  grid-template-columns: 260px 1fr;
  gap: 38px;
  align-items: start;
}

.portrait-shell {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 6px;
}

.portrait {
  width: 230px;
  height: 310px;
  overflow: hidden;
  background: #f4f4f4;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
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

.bibtex {
  max-width: 78ch;
  margin: 10px 0 0;
  padding: 10px 12px;
  overflow-x: auto;
  border-left: 2px solid var(--line);
  background: #f8f8f8;
  color: var(--text);
  font-size: 0.92rem;
  line-height: 1.45;
}

.bibtex code {
  font-family: "Courier New", Courier, monospace;
}

.detail-list {
  list-style: none;
  padding-left: 0;
}

.detail-list li {
  margin-bottom: 16px;
}

.detail-list strong,
.detail-meta,
.detail-terms {
  display: block;
}

.detail-meta {
  color: var(--muted);
}

.detail-terms {
  margin-top: 2px;
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

  h1 {
    font-size: 2.15rem;
  }
}
`;
