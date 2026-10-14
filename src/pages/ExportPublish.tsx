const features = [
  "Full project source",
  "Runs locally with npm",
  "No account or lock-in",
];

const tabs = ["Dashboard", "Projects", "Portfolio builder", "Live preview"];

export default function ExportPublish() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-slate-50-app-bg)]">
      <header className="border-b border-[var(--color-slate-200-border)] bg-[var(--color-white-pure)] px-4 pb-3 pt-4 md:px-8 md:py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row md:items-center md:gap-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-violet-primary)] to-[var(--color-blue-secondary)] text-[var(--color-white-pure)] md:h-9 md:w-9">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
              </svg>
            </div>
            <span className="text-base font-bold text-[var(--color-slate-900-darkest)] md:text-lg">
              PortfolioGenie
            </span>
          </div>

          <nav className="mt-3 flex flex-wrap gap-x-1 gap-y-1 text-xs font-medium text-[var(--color-slate-600-medium)] md:mt-0 md:text-sm">
            {tabs.map((tab) => (
              <a
                key={tab}
                href="#"
                className="rounded-lg px-3 py-2 hover:text-[var(--color-violet-primary)]"
              >
                {tab}
              </a>
            ))}
            <a
              href="#"
              className="rounded-lg bg-[image:var(--gradient-subtle)] px-3 py-2 font-semibold text-[var(--color-violet-primary)]"
            >
              Publish
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-5 md:px-8 md:py-10">
        <a
          href="#"
          className="text-xs text-[var(--color-slate-600-medium)] hover:text-[var(--color-violet-primary)] md:text-sm"
        >
          Back to preview
        </a>

        <h1 className="mt-5 text-2xl font-bold text-[var(--color-slate-900-darkest)] md:text-4xl">
          Take your portfolio live
        </h1>
        <p className="mt-1 text-sm text-[var(--color-slate-600-medium)] md:mt-2 md:text-base">
          Download the code to host it yourself, or publish it to a public link.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col rounded-3xl border border-[var(--color-slate-200-border)] bg-[var(--color-white-pure)] p-5 md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-slate-50-app-bg)] text-[var(--color-slate-800-dark)] md:h-12 md:w-12">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
            </div>

            <h2 className="mt-4 text-lg font-bold text-[var(--color-slate-900-darkest)] md:mt-6 md:text-2xl">
              Export source code
            </h2>
            <p className="mt-2 text-xs text-[var(--color-slate-600-medium)] md:text-sm">
              Get a ZIP with a React and Tailwind CSS project. Host it anywhere
              and edit it freely.
            </p>

            <ul className="mt-4 flex flex-col gap-2 md:mt-6 md:gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-xs text-[var(--color-slate-800-dark)] md:text-sm"
                >
                  <svg
                    className="text-[var(--color-emerald-success)]"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-slate-900-darkest)] py-3 text-sm font-semibold text-[var(--color-white-pure)] hover:bg-[var(--color-slate-800-dark)] md:mt-auto md:py-3.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              Download ZIP
            </button>
          </div>

          <div className="flex flex-col rounded-3xl bg-gradient-to-br from-[var(--color-violet-primary)] to-[var(--color-blue-secondary)] p-5 text-[var(--color-white-pure)] md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-white-pure)] text-[var(--color-violet-primary)] md:h-12 md:w-12">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a22 22 0 0 1 2-4 12 12 0 0 1 11-5c0 3-1 8-5 11a22 22 0 0 1-4 2zM9 12H4s.5-3 2-4c1.6-1 5 0 5 0M12 15v5s3-.5 4-2c1-1.6 0-5 0-5" />
              </svg>
            </div>

            <h2 className="mt-4 text-lg font-bold md:mt-6 md:text-2xl">
              Publish portfolio
            </h2>
            <p className="mt-2 text-xs opacity-80 md:text-sm">
              Get a public link you can put on your résumé and LinkedIn. Update
              it any time.
            </p>

            <label
              htmlFor="subdomain"
              className="mt-4 block text-xs font-semibold md:mt-6 md:text-sm"
            >
              Choose your address
            </label>
            <div className="mt-2 flex items-stretch overflow-hidden rounded-lg bg-[var(--color-white-pure)]">
              <input
                id="subdomain"
                type="text"
                defaultValue="mayachen"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs text-[var(--color-slate-900-darkest)] outline-none md:px-4 md:py-3 md:text-sm"
              />
              <span className="flex items-center bg-[var(--color-slate-50-app-bg)] px-3 text-xs text-[var(--color-slate-500-light)] md:px-4 md:text-sm">
                .portfoliogenie.app
              </span>
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-white-pure)] py-3 text-sm font-semibold text-[var(--color-violet-primary)] md:mt-auto md:py-3.5"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a22 22 0 0 1 2-4 12 12 0 0 1 11-5c0 3-1 8-5 11a22 22 0 0 1-4 2zM9 12H4s.5-3 2-4c1.6-1 5 0 5 0M12 15v5s3-.5 4-2c1-1.6 0-5 0-5" />
              </svg>
              Publish portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}