import { useEffect, useState } from "react";

type ConnectionState = "idle" | "loading" | "success";
type IconName =
  | "github"
  | "sparkles"
  | "lock"
  | "back"
  | "arrow"
  | "check"
  | "spinner"
  | "circle";

function ConnectIcon({
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

  if (name === "back") {
    return (
      <svg {...shared}>
        <path d="m14 18-6-6 6-6M8 12h12" />
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

  if (name === "check") {
    return (
      <svg {...shared}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "circle") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  }

  if (name === "spinner") {
    return (
      <svg {...shared}>
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
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

const connectionSteps = [
  "Opening GitHub…",
  "Reading public profile…",
  "Reading public repositories…",
];

function BrandConnectionMark() {
  return (
    <div className="cg-brand-flow" aria-hidden="true">
      <span className="cg-github-mark">
        <ConnectIcon name="github" />
      </span>
      <span className="cg-flow-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="cg-genie-mark">
        <ConnectIcon name="sparkles" />
      </span>
    </div>
  );
}

export default function GithubConnection() {
  const [state, setState] = useState<ConnectionState>("idle");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (state !== "loading") return;

    const timers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setState("success"), 2200),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [state]);

  const startConnection = () => {
    setStep(0);
    setState("loading");
  };

  const cancelConnection = () => {
    setState("idle");
    setStep(0);
  };

  const progress = state === "success" ? 100 : [8, 38, 72][step];
  const progressLabel =
    state === "success"
      ? "Complete"
      : ["Preparing", "Profile", "Repositories"][step];

  return (
    <div className="cg-page">
      <main className="cg-shell">
        {state === "idle" && (
          <section className="cg-card cg-state-enter" key="idle">
            <BrandConnectionMark />
            <h1>Connect your GitHub account</h1>
            <p className="cg-intro">
              We’ll list your public repositories so you can choose what to
              feature. It takes about 10 seconds.
            </p>
            <ul className="cg-permissions">
              <li>
                <ConnectIcon name="lock" />
                <div>
                  <strong>Read your public profile</strong>
                  <span>Name, avatar, and bio</span>
                </div>
              </li>
              <li>
                <ConnectIcon name="lock" />
                <div>
                  <strong>Read your public repositories</strong>
                  <span>Names, descriptions, languages, and update dates</span>
                </div>
              </li>
              <li>
                <ConnectIcon name="lock" />
                <div>
                  <strong>No write access</strong>
                  <span>We can’t change your code or settings</span>
                </div>
              </li>
            </ul>
            <button
              className="cg-button cg-button-dark"
              onClick={startConnection}
              type="button"
            >
              <ConnectIcon name="github" /> Connect with GitHub
            </button>
            <a className="cg-back-link" href="/">
              <ConnectIcon name="back" /> Back to home
            </a>
          </section>
        )}

        {state === "loading" && (
          <section
            className="cg-card cg-state-enter"
            key="loading"
            role="status"
            aria-live="polite"
          >
            <BrandConnectionMark />
            <h1>Connecting to GitHub</h1>
            <div className="cg-connection-visual" aria-hidden="true">
              <span className="cg-mini-github">
                <ConnectIcon name="github" />
              </span>
              <span className="cg-loader">
                <span />
                <ConnectIcon name="spinner" />
              </span>
              <span className="cg-mini-genie">
                <ConnectIcon name="sparkles" />
              </span>
            </div>
            <div className="cg-step-list">
              {connectionSteps.map((label, index) => (
                <p
                  className={
                    index < step
                      ? "is-complete"
                      : index === step
                        ? "is-active"
                        : ""
                  }
                  key={label}
                >
                  <ConnectIcon
                    name={
                      index < step
                        ? "check"
                        : index === step
                          ? "spinner"
                          : "circle"
                    }
                  />
                  <span>{label}</span>
                </p>
              ))}
            </div>
            <div className="cg-progress-meta">
              <span>Secure connection</span>
              <span>{progressLabel}</span>
            </div>
            <div
              className="cg-progress-track"
              role="progressbar"
              aria-label="Secure connection progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <span
                className="cg-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              className="cg-button cg-button-dark cg-connecting-button"
              onClick={cancelConnection}
              type="button"
            >
              <ConnectIcon name="spinner" /> Connecting…
            </button>
            <button
              className="cg-cancel-link"
              onClick={cancelConnection}
              type="button"
            >
              Cancel
            </button>
          </section>
        )}

        {state === "success" && (
          <section
            className="cg-card cg-state-enter"
            key="success"
            role="status"
            aria-live="polite"
          >
            <BrandConnectionMark />
            <span className="cg-success-mark">
              <ConnectIcon name="check" />
            </span>
            <h1>GitHub connected</h1>
            <div className="cg-profile-card">
              <span className="cg-profile-avatar">MC</span>
              <span>
                <strong>Maya Chen</strong>
                <small>@mayachen-dev · 8 public repositories found</small>
              </span>
            </div>
            <a className="cg-button cg-button-primary" href="/#features">
              Continue to your projects <ConnectIcon name="arrow" />
            </a>
          </section>
        )}
      </main>
      <p className="cg-prototype-note">
        UI preview: GitHub connection is simulated with sample data.
      </p>
    </div>
  );
}
