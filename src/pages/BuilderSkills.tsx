import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faCircleInfo,
  faPlus,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function BuilderSkills() {
  const navigate = useNavigate();
  // State for selected skills categorized by type
  const [languages, setLanguages] = useState<string[]>([
    "TypeScript",
    "Python",
    "JavaScript",
  ]);
  const [frameworks, setFrameworks] = useState<string[]>(["React", "Node.js"]);
  const [tools, setTools] = useState<string[]>(["Git"]);

  // State for custom input values
  const [newLanguage, setNewLanguage] = useState("");
  const [newFramework, setNewFramework] = useState("");
  const [newTool, setNewTool] = useState("");

  // Handlers for adding custom skills
  const handleAddLanguage = () => {
    if (newLanguage.trim() && !languages.includes(newLanguage.trim())) {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage("");
    }
  };

  const handleAddFramework = () => {
    if (newFramework.trim() && !frameworks.includes(newFramework.trim())) {
      setFrameworks([...frameworks, newFramework.trim()]);
      setNewFramework("");
    }
  };

  const handleAddTool = () => {
    if (newTool.trim() && !tools.includes(newTool.trim())) {
      setTools([...tools, newTool.trim()]);
      setNewTool("");
    }
  };

  // Handlers for adding suggested skills
  const handleAddSuggested = (
    skill: string,
    type: "languages" | "frameworks" | "tools",
  ) => {
    if (type === "languages" && !languages.includes(skill)) {
      setLanguages([...languages, skill]);
    } else if (type === "frameworks" && !frameworks.includes(skill)) {
      setFrameworks([...frameworks, skill]);
    } else if (type === "tools" && !tools.includes(skill)) {
      setTools([...tools, skill]);
    }
  };

  // Handlers for removing selected skills
  const handleRemoveSkill = (
    skillToRemove: string,
    type: "languages" | "frameworks" | "tools",
  ) => {
    if (type === "languages") {
      setLanguages(languages.filter((s) => s !== skillToRemove));
    } else if (type === "frameworks") {
      setFrameworks(frameworks.filter((s) => s !== skillToRemove));
    } else if (type === "tools") {
      setTools(tools.filter((s) => s !== skillToRemove));
    }
  };

  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-app)]">
      {/* Header Section */}
      <header className="w-full bg-[var(--color-white-pure)] border-b border-[var(--color-border)] py-4 px-4 sm:px-8 md:px-12 flex flex-col gap-3">
        {/* Top Row: Logo & Exit Button */}
        <div className="w-full flex justify-between items-center">
          <div>
            <img src="/Logo.svg" alt="PortfolioGenie" />
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-violet-hover)] transition-colors cursor-pointer text-sm font-medium"
          >
            <FontAwesomeIcon icon={faTimes} />
            <span>Exit builder</span>
          </button>
        </div>

        {/* 1. Mobile Simplified Header */}
        <div className="flex md:hidden flex-col gap-2 pt-1">
          <div className="text-xs font-semibold text-[var(--color-text-main)]">
            <span>Step 3 of 4 · Skills</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[var(--color-violet-primary)] rounded-full"></div>
          </div>
        </div>

        {/* 2. Desktop/Tablet Stepper Header */}
        <div className="w-full hidden md:flex justify-center items-center mt-1">
          <nav className="flex items-center gap-3 lg:gap-5">
            {/* Step 1: Personal info */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-violet-primary)] text-white flex items-center justify-center text-[11px]">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">
                Personal info
              </span>
            </div>

            <div className="w-10 lg:w-16 h-[2px] bg-[var(--color-violet-primary)]"></div>

            {/* Step 2: Projects */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-violet-primary)] text-white flex items-center justify-center text-[11px]">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">
                Projects
              </span>
            </div>

            <div className="w-10 lg:w-16 h-[2px] bg-[var(--color-violet-primary)]"></div>

            {/* Step 3: Skills (Active) */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-text-main)] text-white flex items-center justify-center text-[11px] font-bold">
                3
              </div>
              <span className="text-xs text-[var(--color-text-main)] font-bold">
                Skills
              </span>
            </div>

            <div className="w-10 lg:w-16 h-[2px] bg-[var(--color-border)]"></div>

            {/* Step 4: Contact */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[var(--color-slate-50-bg)] border border-[var(--color-border)] text-[var(--color-slate-500-light)] flex items-center justify-center text-[11px] font-bold">
                4
              </div>
              <span className="text-xs text-[var(--color-slate-500-light)] font-medium">
                Contact
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-10 px-4 sm:px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-3xl flex flex-col items-start gap-8">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-main)] tracking-tight">
              Choose your skills
            </h1>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] font-normal">
              Add the skills you want visitors to see. Remove anything that
              doesn't fit.
            </p>
          </div>

          {/* Info Box */}
          <div className="w-full bg-[var(--color-slate-50-bg)] border border-[var(--color-border)] rounded-2xl p-4 md:p-5 flex items-start gap-3.5">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-[var(--color-violet-primary)] text-lg mt-0.5 shrink-0"
            />
            <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
              GitHub shows what you've used, not how well you know it. Only add
              skills you're comfortable discussing in an interview.
            </p>
          </div>

          {/* Programming Languages Card */}
          <div className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs">
            <h2 className="text-xl font-bold text-[var(--color-text-main)]">
              Programming languages
            </h2>

            {/* Selected Badges */}
            <div className="flex flex-wrap gap-2.5">
              {languages.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-violet-primary)] text-white text-sm font-medium"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill, "languages")}
                    className="hover:opacity-80 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </button>
                </span>
              ))}
            </div>

            {/* Suggested Section */}
            <div className="flex flex-col gap-3">
              <p className="text-xs md:text-sm text-[var(--color-slate-500-light)]">
                Detected from your repositories. Tap to add.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Go", info: "8% of your code" },
                  { name: "HTML/CSS", info: "8% of your code" },
                  { name: "Shell", info: "4% of your code" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleAddSuggested(item.name, "languages")}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-slate-50-bg)] border border-dashed border-[var(--color-border)] text-[var(--color-text-main)] text-xs md:text-sm font-medium hover:bg-[var(--color-border)] transition-colors cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-xs text-[var(--color-slate-500-light)]"
                    />
                    {item.name} · {item.info}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddLanguage()}
                placeholder="Add another"
                className="flex-1 px-4 py-2.5 border border-[var(--color-border)] rounded-xl text-sm placeholder-[var(--color-slate-500-light)] text-[var(--color-text-main)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-[var(--color-bg-card)]"
              />
              <button
                onClick={handleAddLanguage}
                className="flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-text-main)] hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
                Add
              </button>
            </div>
          </div>

          {/* Frameworks and Libraries Card */}
          <div className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs">
            <h2 className="text-xl font-bold text-[var(--color-text-main)]">
              Frameworks and libraries
            </h2>

            {/* Selected Badges */}
            <div className="flex flex-wrap gap-2.5">
              {frameworks.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-violet-primary)] text-white text-sm font-medium"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill, "frameworks")}
                    className="hover:opacity-80 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </button>
                </span>
              ))}
            </div>

            {/* Suggested Section */}
            <div className="flex flex-col gap-3">
              <p className="text-xs md:text-sm text-[var(--color-slate-500-light)]">
                Found in your project tags. Tap to add.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Next.js", "Express", "Tailwind CSS", "Prisma"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => handleAddSuggested(item, "frameworks")}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-slate-50-bg)] border border-dashed border-[var(--color-border)] text-[var(--color-text-main)] text-xs md:text-sm font-medium hover:bg-[var(--color-border)] transition-colors cursor-pointer"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-xs text-[var(--color-slate-500-light)]"
                      />
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Custom Input */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                value={newFramework}
                onChange={(e) => setNewFramework(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddFramework()}
                placeholder="Add another"
                className="flex-1 px-4 py-2.5 border border-[var(--color-border)] rounded-xl text-sm placeholder-[var(--color-slate-500-light)] text-[var(--color-text-main)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-[var(--color-bg-card)]"
              />
              <button
                onClick={handleAddFramework}
                className="flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-text-main)] hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
                Add
              </button>
            </div>
          </div>

          {/* Tools Card */}
          <div className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs">
            <h2 className="text-xl font-bold text-[var(--color-text-main)]">
              Tools
            </h2>

            {/* Selected Badges */}
            <div className="flex flex-wrap gap-2.5">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-violet-primary)] text-white text-sm font-medium"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(skill, "tools")}
                    className="hover:opacity-80 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </button>
                </span>
              ))}
            </div>

            {/* Suggested Section */}
            <div className="flex flex-col gap-3">
              <p className="text-xs md:text-sm text-[var(--color-slate-500-light)]">
                Detected from your repositories. Tap to add.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Docker", "PostgreSQL", "SQLite", "Vite"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleAddSuggested(item, "tools")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-slate-50-bg)] border border-dashed border-[var(--color-border)] text-[var(--color-text-main)] text-xs md:text-sm font-medium hover:bg-[var(--color-border)] transition-colors cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-xs text-[var(--color-slate-500-light)]"
                    />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                value={newTool}
                onChange={(e) => setNewTool(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTool()}
                placeholder="Add another"
                className="flex-1 px-4 py-2.5 border border-[var(--color-border)] rounded-xl text-sm placeholder-[var(--color-slate-500-light)] text-[var(--color-text-main)] outline-none focus:border-[var(--color-violet-primary)] transition-colors bg-[var(--color-bg-card)]"
              />
              <button
                onClick={handleAddTool}
                className="flex items-center justify-center gap-2 px-5 py-2.5 border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-text-main)] hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
                Add
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <div className="w-full flex justify-between items-center pt-4 border-t border-[var(--color-border)] bg-[var(--color-white-pure)] py-5 px-7">
        <button
          onClick={() => navigate("/builder-projects")}
          className="flex items-center gap-2 px-4 sm:px-7 py-3 border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-main)] rounded-xl font-medium text-sm hover:bg-[var(--color-slate-50-bg)] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>

        <button
          onClick={() => navigate("/builder-contact")}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--color-violet-primary)] text-white rounded-xl font-medium text-sm hover:bg-[var(--color-violet-hover)] transition-colors cursor-pointer shadow-sm"
        >
          Next: Contact
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default BuilderSkills;
