type IconName = "github" | "sparkles" | "lock" | "eye" | "rocket" | "arrow";

function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const shared = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  if (name === "github") {
    return (
      <svg {...shared} fill="currentColor" stroke="none">
        <path d="M12 .9a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.75 2.2 3.98 1.57.1-.72.4-1.22.72-1.5-2.5-.29-5.14-1.25-5.14-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.1-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.6 1.55.22 2.7.11 2.98.72.79 1.15 1.79 1.15 3.02 0 4.33-2.64 5.28-5.15 5.56.41.36.77 1.04.77 2.1v3.13c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...shared}>
        <rect x="4.5" y="10" width="15" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg {...shared}>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (name === "rocket") {
    return (
      <svg {...shared}>
        <path d="M5 14.5c-1.8 1.5-2.2 4.5-2.2 4.5s3-.4 4.5-2.2M9 15l-2-2a17 17 0 0 1 3-6c2-2.5 5.5-3.5 10-3-0.5 4.5-2 8-4.5 10a17 17 0 0 1-6.5 3l-2-2Z" />
        <circle cx="14.5" cy="9.5" r="1.5" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...shared}>
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </svg>
  );
}

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "sparkles",
    title: "AI-powered descriptions",
    description:
      "Turn terse README lines into clear project write-ups. Review every suggestion before it reaches your site.",
  },
  {
    icon: "github",
    title: "GitHub integration",
    description:
      "Bring in repositories, languages, and recent activity with read-only access.",
  },
  {
    icon: "eye",
    title: "Live preview",
    description:
      "Edit on one side and watch your portfolio update across desktop, tablet, and mobile.",
  },
  {
    icon: "rocket",
    title: "Easy publishing",
    description:
      "Download the source as a ZIP or publish to a public link in one step.",
  },
];

const steps = [
  {
    title: "Connect GitHub",
    description: "Sign in read-only and we list your public repositories.",
  },
  {
    title: "Choose and refine",
    description:
      "Pick your best projects, then edit or improve each description.",
  },
  {
    title: "Preview and publish",
    description: "Check every screen size, then export the code or publish.",
  },
];

function PortfolioPreview() {
  return (
    <section className="pg-preview-wrap" aria-label="Portfolio preview">
      <div className="pg-browser">
        <div className="pg-browser-bar">
          <span />
          <span />
          <span />
          <div className="pg-address">mayachen.portfoliogenie.app</div>
        </div>
        <div className="pg-preview-content">
          <div className="pg-profile">
            <div className="pg-avatar">MC</div>
            <div>
              <p className="pg-profile-name">Maya Chen</p>
              <p className="pg-profile-role">
                Full-Stack Developer <span aria-hidden="true">·</span> Lisbon
              </p>
            </div>
          </div>
          <div className="pg-tags">
            {["TypeScript", "React", "PostgreSQL", "Python"].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="pg-project-grid">
            <article className="pg-project-card">
              <div className="pg-project-art pg-art-violet">
                <i />
                <i />
                <i />
              </div>
              <div className="pg-project-copy">
                <strong>TaskFlow API</strong>
                <span>TypeScript</span>
              </div>
            </article>
            <article className="pg-project-card">
              <div className="pg-project-art pg-art-cyan">
                <i />
                <i />
                <i />
              </div>
              <div className="pg-project-copy">
                <strong>Weather Lens</strong>
                <span>JavaScript</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <aside className="pg-draft">
        <strong>
          <Icon name="sparkles" /> AI draft <span>· not approved yet</span>
        </strong>
        <p>TaskFlow API lets small teams create, assign, and track tasks...</p>
        <a href="#features">
          Review suggestion <Icon name="arrow" />
        </a>
      </aside>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="pg-header">
        <nav className="pg-nav" aria-label="Main navigation">
          <a className="pg-brand" href="#top" aria-label="PortfolioGenie home">
            <span className="pg-brand-mark">
              <Icon name="sparkles" />
            </span>
            <span>
              Portfolio<span className="pg-brand-light">Genie</span>
            </span>
          </a>
          <div className="pg-nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
          </div>
          <a className="pg-button pg-button-dark pg-nav-cta" href="/connect">
            <Icon name="github" /> <span>Connect GitHub</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="pg-hero">
          <div className="pg-hero-copy">
            <h1>Your Code Deserves a Better Portfolio.</h1>
            <p className="pg-hero-description">
              PortfolioGenie reads your GitHub repositories and helps you turn
              them into a polished developer portfolio. Review every word,
              preview it live, then export or publish.
            </p>
            <div className="pg-hero-actions">
              <a className="pg-button pg-button-primary" href="/connect">
                <Icon name="github" /> Connect GitHub <Icon name="arrow" />
              </a>
              <a className="pg-button pg-button-outline" href="#how">
                See how it works
              </a>
            </div>
            <p className="pg-readonly">
              <Icon name="lock" /> Read-only access. We never change your code.
            </p>
          </div>
          <PortfolioPreview />
        </section>

        <section className="pg-features" id="features">
          <div className="pg-section-inner pg-feature-layout">
            <div className="pg-section-heading">
              <h2>Everything between your repositories and a live site.</h2>
            </div>
            <div className="pg-feature-list">
              {features.map((feature, index) => (
                <article
                  className="pg-feature"
                  key={feature.title}
                  style={{ "--item-index": index } as React.CSSProperties}
                >
                  <span className="pg-feature-icon">
                    <Icon name={feature.icon} />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pg-how" id="how">
          <div className="pg-section-inner">
            <h2>From GitHub to published in three steps</h2>
            <ol className="pg-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="pg-step-number">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="pg-cta">
              <div>
                <h3>Ready to show your work?</h3>
                <p>About ten minutes from repositories to a live portfolio.</p>
              </div>
              <a className="pg-button pg-button-light" href="/connect">
                <Icon name="github" /> Connect GitHub <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pg-footer">
        © 2026 PortfolioGenie. Prototype with sample data.
      </footer>
    </div>
  );
}
