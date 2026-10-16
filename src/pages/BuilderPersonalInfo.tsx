import { useState } from "react";

type BuilderPersonalInfoProps = {
  onBack: () => void;
  onContinue: () => void;
};

export default function BuilderPersonalInfo({
  onBack,
  onContinue,
}: BuilderPersonalInfoProps) {
  const [name, setName] = useState("Maya Chen");
  const [role, setRole] = useState("Frontend Developer");
  const [bio, setBio] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <a
            className="font-bold text-slate-900 no-underline"
            href="/dashboard"
          >
            PortfolioGenie
          </a>
          <span className="text-sm font-medium text-slate-500">
            Step 1 of 4 · Personal info
          </span>
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-10 sm:px-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Introduce yourself
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Add the details visitors will see at the top of your portfolio.
        </p>
        <form
          className="mt-8 grid gap-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-7"
          onSubmit={(event) => {
            event.preventDefault();
            onContinue();
          }}
        >
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Name
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-indigo-500"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Professional title
            <input
              required
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-indigo-500"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Short introduction
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={4}
              placeholder="A few sentences about your work and what you enjoy building."
              className="resize-y rounded-lg border border-slate-300 px-3 py-2.5 font-normal outline-none focus:border-indigo-500"
            />
          </label>
        </form>
      </main>
      <footer className="flex justify-between border-t border-slate-200 bg-white px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
        >
          Back to dashboard
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Continue to projects
        </button>
      </footer>
    </div>
  );
}
