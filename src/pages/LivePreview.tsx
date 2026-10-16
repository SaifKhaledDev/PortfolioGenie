import { Link } from "react-router-dom";

export default function LivePreview() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link
            className="font-bold text-slate-900 no-underline"
            to="/dashboard"
          >
            PortfolioGenie
          </Link>
          <nav
            aria-label="Portfolio workflow"
            className="flex flex-wrap gap-4 text-sm font-medium"
          >
            <Link
              className="text-slate-500 hover:text-indigo-700"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-slate-500 hover:text-indigo-700"
              to="/builder-personal-info"
            >
              Builder
            </Link>
            <Link className="text-indigo-700" to="/preview" aria-current="page">
              Preview
            </Link>
            <Link
              className="text-slate-500 hover:text-indigo-700"
              to="/publish"
            >
              Publish
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-indigo-700">
              Live preview
            </p>
            <h1 className="mt-1 text-3xl font-bold">Your portfolio</h1>
          </div>
          <Link
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-indigo-700"
            to="/publish"
          >
            Continue to publish
          </Link>
        </div>
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-medium text-slate-500">
            mayachen.portfoliogenie.app
          </div>
          <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-16">
            <p className="text-sm font-semibold text-indigo-700">
              Developer portfolio
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
              Maya Chen
            </h2>
            <p className="mt-3 text-xl text-slate-600">Frontend Developer</p>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              I build thoughtful web experiences and practical tools for people
              and teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["TypeScript", "React", "Python", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-800"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="mt-12 border-b border-slate-200 pb-3 text-xl font-bold">
              Featured projects
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "TaskFlow API",
                  "A REST API for task management with auth and team boards.",
                ],
                [
                  "Weather Lens",
                  "A weather dashboard with a seven-day forecast and saved cities.",
                ],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-lg border border-slate-200 p-5"
                >
                  <h4 className="font-bold">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-5 flex justify-between gap-3">
          <Link
            className="px-2 py-2 text-sm font-semibold text-slate-600 no-underline hover:text-slate-900"
            to="/builder-contact"
          >
            Back to contact details
          </Link>
          <Link
            className="px-2 py-2 text-sm font-semibold text-indigo-700 no-underline hover:text-indigo-900"
            to="/publish"
          >
            Publish portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
