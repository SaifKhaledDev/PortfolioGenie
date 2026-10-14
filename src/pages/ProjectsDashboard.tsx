import { useState, type Dispatch, type SetStateAction } from "react";
import { IoArrowForward } from "react-icons/io5";
import projectsDashboardLogo from "../assets/LogoPartFarg.svg";
import projectsDashboardAvatar from "../assets/Avatarpartfarg.svg";

type Repository = {
  id: string;
  name: string;
  language: string;
  languageColorClass: string;
  description: string;
  stars: number;
  updatedDaysAgo: number;
};

type SortOption = "recent" | "stars" | "name" | "language";

const repositories: Repository[] = [
  {
    id: "taskflow-api",
    name: "taskflow-api",
    language: "TypeScript",
    languageColorClass: "bg-[#3178C6]",
    description: "REST API for task management with auth and team boards.",
    stars: 18,
    updatedDaysAgo: 3,
  },
  {
    id: "weather-lens",
    name: "weather-lens",
    language: "JavaScript",
    languageColorClass: "bg-[#F1E05A]",
    description: "Weather dashboard with a 7-day forecast and saved cities.",
    stars: 9,
    updatedDaysAgo: 5,
  },
  {
    id: "pybudget",
    name: "pybudget",
    language: "Python",
    languageColorClass: "bg-[#3572A5]",
    description: "Command-line budgeting tool that reads bank CSV exports.",
    stars: 7,
    updatedDaysAgo: 7,
  },
  {
    id: "shelfshare",
    name: "shelfshare",
    language: "TypeScript",
    languageColorClass: "bg-[#3178C6]",
    description: "Community library app for lending and borrowing books.",
    stars: 26,
    updatedDaysAgo: 11,
  },
  {
    id: "chess-engine-js",
    name: "chess-engine-js",
    language: "JavaScript",
    languageColorClass: "bg-[#F1E05A]",
    description: "A small chess engine with alpha-beta pruning.",
    stars: 41,
    updatedDaysAgo: 14,
  },
  {
    id: "notes-sync",
    name: "notes-sync",
    language: "Go",
    languageColorClass: "bg-[#00ADD8]",
    description: "Markdown notes that sync across devices.",
    stars: 7,
    updatedDaysAgo: 20,
  },
];

const languageSegments = [
  { width: "w-[34%]", color: "bg-[#3572A5]" },
  { width: "w-[25%]", color: "bg-[#F1E05A]" },
  { width: "w-[16%]", color: "bg-[#00ADD8]" },
  { width: "w-[15%]", color: "bg-[#E34C26]" },
  { width: "w-[10%]", color: "bg-[#89E051]" },
];

const activityBars = [
  "h-[8px]",
  "h-[11px]",
  "h-[15px]",
  "h-[25px]",
  "h-[12px]",
  "h-[30px]",
  "h-[10px]",
  "h-[25px]",
  "h-[15px]",
  "h-[20px]",
  "h-[30px]",
  "h-[35px]",
];

type TopNavbarPage3Props = {
  selectedCount: number;
  onContinue?: () => void;
};

export function TopNavbarPage3({
  selectedCount,
  onContinue,
}: TopNavbarPage3Props) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30 flex h-[55px] items-center justify-between border-b border-[#E5E7EB] bg-white px-8 max-[767px]:hidden">
        <p className="text-[14px] text-[var(--color-slate-900-darkest)]">
          {selectedCount} selected
        </p>
        <button
          type="button"
          onClick={onContinue}
          className="my-2 inline-flex items-center gap-2 rounded-[9px] bg-linear-to-r from-[#6366F1] to-[#7C3AED] px-[14px] py-[7px] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:shadow-[0_5px_12px_rgba(99,102,241,0.24)] motion-reduce:transition-none"
        >
          Continue
          <IoArrowForward />
        </button>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between border-t border-[#E2E8F0] bg-white px-4 py-3 shadow-[0_-4px_14px_rgba(15,23,42,0.06)] min-[768px]:hidden">
        <span className="text-[13px] font-medium text-[#475569]">
          {selectedCount} selected
        </span>
        <button
          type="button"
          onClick={onContinue}
          className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#6366F1] to-[#7C3AED] px-4 py-[9px] text-[13px] font-semibold text-white"
        >
          Continue
          <IoArrowForward />
        </button>
      </div>
    </>
  );
}

export function SideBar({
  activeItem = "dashboard",
}: {
  activeItem?: "dashboard" | "projects";
}) {
  return (
    <aside className="fixed left-0 top-[55px] z-20 h-[calc(100vh-55px)] w-[240px] overflow-y-auto border-r border-[#E5E7EB] bg-white px-[18px] py-6 max-[1023px]:w-[210px] max-[767px]:inset-x-0 max-[767px]:top-0 max-[767px]:h-auto max-[767px]:w-full max-[767px]:border-x-0 max-[767px]:border-b max-[767px]:px-4 max-[767px]:py-3 max-[767px]:shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
      <img
        className="mb-7 block w-[140px] max-[767px]:mb-[10px] max-[767px]:w-[132px]"
        src={projectsDashboardLogo}
        alt="PortfolioGenie"
      />
      <ul className="m-0 list-none p-0 max-[767px]:flex max-[767px]:flex-wrap max-[767px]:gap-x-[7px] max-[767px]:gap-y-[3px]">
        <li
          className={`my-[3px] rounded-[9px] px-[10px] py-[7px] text-[13px] max-[767px]:m-0 max-[767px]:px-[8px] max-[767px]:py-[6px] max-[767px]:text-[12px] ${activeItem === "dashboard" ? "bg-[#F5F3FF] font-semibold text-[#6D28D9]" : "font-medium text-[#475569] transition-colors duration-200 hover:bg-[#F5F3FF] hover:font-semibold hover:text-[#6D28D9] motion-reduce:transition-none"}`}
        >
          <a className="text-inherit no-underline" href="">
            DashBoard
          </a>
        </li>
        <li
          className={`my-[3px] rounded-[9px] px-[10px] py-[7px] text-[13px] max-[767px]:m-0 max-[767px]:px-[8px] max-[767px]:py-[6px] max-[767px]:text-[12px] ${activeItem === "projects" ? "bg-[#F5F3FF] font-semibold text-[#6D28D9]" : "font-medium text-[#475569] transition-colors duration-200 hover:bg-[#F5F3FF] hover:font-semibold hover:text-[#6D28D9] motion-reduce:transition-none"}`}
        >
          <a className="text-inherit no-underline" href="">
            Projects
          </a>
        </li>
        <li className="my-[3px] rounded-[9px] px-[10px] py-[7px] text-[13px] font-medium text-[#475569] transition-colors duration-200 hover:bg-[#F5F3FF] hover:font-semibold hover:text-[#6D28D9] max-[767px]:m-0 max-[767px]:px-[8px] max-[767px]:py-[6px] max-[767px]:text-[12px] motion-reduce:transition-none">
          <a className="text-inherit no-underline" href="">
            Portfolio Builder
          </a>
        </li>
        <li className="my-[3px] rounded-[9px] px-[10px] py-[7px] text-[13px] font-medium text-[#475569] transition-colors duration-200 hover:bg-[#F5F3FF] hover:font-semibold hover:text-[#6D28D9] max-[767px]:m-0 max-[767px]:px-[8px] max-[767px]:py-[6px] max-[767px]:text-[12px] motion-reduce:transition-none">
          <a className="text-inherit no-underline" href="">
            Live preview
          </a>
        </li>
        <li className="my-[3px] rounded-[9px] px-[10px] py-[7px] text-[13px] font-medium text-[#475569] transition-colors duration-200 hover:bg-[#F5F3FF] hover:font-semibold hover:text-[#6D28D9] max-[767px]:m-0 max-[767px]:px-[8px] max-[767px]:py-[6px] max-[767px]:text-[12px] motion-reduce:transition-none">
          <a className="text-inherit no-underline" href="">
            Publish
          </a>
        </li>
      </ul>
    </aside>
  );
}

type ProjectsDashboardContentProps = {
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
};

export function ProjectsDashboardContent({
  selectedIds,
  setSelectedIds,
}: ProjectsDashboardContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("recent");

  const visibleRepositories = repositories
    .filter((repository) => {
      const query = searchTerm.trim().toLowerCase();
      return [repository.name, repository.description, repository.language]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((first, second) => {
      if (sortOption === "stars") return second.stars - first.stars;
      if (sortOption === "name") return first.name.localeCompare(second.name);
      if (sortOption === "language") {
        return first.language.localeCompare(second.language);
      }
      return first.updatedDaysAgo - second.updatedDaysAgo;
    });

  const allVisibleSelected =
    visibleRepositories.length > 0 &&
    visibleRepositories.every((repository) =>
      selectedIds.includes(repository.id),
    );

  function toggleVisibleRepositories() {
    const visibleIds = new Set(
      visibleRepositories.map((repository) => repository.id),
    );
    setSelectedIds((current) =>
      allVisibleSelected
        ? current.filter((id) => !visibleIds.has(id))
        : [...new Set([...current, ...visibleIds])],
    );
  }

  return (
    <main className="col-start-2 min-h-screen min-w-0 bg-[#F1F5F9] px-7 pb-8 pt-[78px] max-[1023px]:px-5 max-[767px]:col-auto max-[767px]:px-4 max-[767px]:pb-6 max-[767px]:pt-[174px]">
      <div className="flex items-center justify-between gap-4 max-[767px]:items-start max-[767px]:flex-col">
        <div>
          <h1 className="m-0 text-[26px] font-bold leading-[1.25] text-[#0F172A]">
            Welcome, Maya
          </h1>
          <p className="mb-0 mt-[5px] text-[13px] text-[#64748B]">
            Choose the repositories you want in your profile
          </p>
        </div>
        <div className="flex w-fit items-center gap-[10px] rounded-xl border border-[#E2E8F0] bg-white px-3 py-[9px] max-[767px]:w-full">
          <img
            className="h-[38px] w-[38px]"
            src={projectsDashboardAvatar}
            alt=""
          />
          <div>
            <h3 className="m-0 text-[12px] font-[650] text-[#0F172A]">
              @mayachen-dev
            </h3>
            <p className="mb-0 mt-[3px] text-[11px] text-[#64748B]">
              Building small tools for busy teams.
            </p>
          </div>
        </div>
      </div>

      <div className="my-[18px] mb-5 grid grid-cols-3 items-stretch gap-[14px] max-[1023px]:grid-cols-2 max-[767px]:my-[14px] max-[767px]:grid-cols-1 max-[767px]:gap-[10px]">
        <div className="min-h-[105px] min-w-0 rounded-[13px] border border-[#E8ECF3] bg-white px-[15px] py-[13px] shadow-[0_2px_8px_rgba(15,23,42,0.025)] max-[767px]:min-h-[94px]">
          <p className="mb-1 mt-0 text-[13px] text-[#64748B]">Repositories</p>
          <h2 className="mb-1 mt-0 text-[23px] font-bold leading-[1.2] text-[#0F172A]">
            8
          </h2>
          <span className="text-[11px] text-[#94A3B8]">
            Public, on GitHub since 2021
          </span>
        </div>
        <div className="min-h-[105px] min-w-0 rounded-[13px] border border-[#E8ECF3] bg-white px-[15px] py-[13px] shadow-[0_2px_8px_rgba(15,23,42,0.025)] max-[767px]:min-h-[94px]">
          <p className="mb-1 mt-0 text-[13px] text-[#64748B]">
            Programming languages
          </p>
          <h2 className="mb-1 mt-0 text-[23px] font-bold leading-[1.2] text-[#0F172A]">
            6
          </h2>
          <div className="mb-[6px] mt-[7px] flex h-[5px] overflow-hidden rounded-full">
            {languageSegments.map((segment) => (
              <span
                key={segment.color}
                className={`block h-full ${segment.width} ${segment.color}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#94A3B8]">
            Most used: TypeScript (34%)
          </span>
        </div>
        <div className="min-h-[105px] min-w-0 rounded-[13px] border border-[#E8ECF3] bg-white px-[15px] py-[13px] shadow-[0_2px_8px_rgba(15,23,42,0.025)] max-[767px]:min-h-[94px]">
          <p className="mb-1 mt-0 text-[13px] text-[#64748B]">
            Public activity
          </p>
          <h2 className="mb-1 mt-0 text-[23px] font-bold leading-[1.2] text-[#0F172A]">
            214 commits
          </h2>
          <div className="mb-1 mt-[2px] grid h-[35px] grid-cols-[repeat(12,minmax(0,1fr))] items-end gap-[5px]">
            {activityBars.map((height, index) => (
              <span
                key={index}
                className={`block min-w-0 rounded-t-[3px] rounded-b-[1px] bg-[#A78BFA] ${height}`}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#94A3B8]">
            Last 90 days, weekly activity
          </span>
        </div>
      </div>

      <section className="overflow-hidden rounded-[15px] border border-[#E2E8F0] bg-white shadow-[0_3px_12px_rgba(15,23,42,0.025)]">
        <div className="flex items-center gap-[10px] border-b border-[#E2E8F0] px-[14px] py-3 max-[520px]:items-stretch max-[520px]:flex-col">
          <div className="min-w-0 flex-1">
            <input
              type="text"
              className="h-9 w-full rounded-lg border border-[#E2E8F0] bg-white px-[11px] text-[12px] text-[#0F172A] outline-none transition-[border-color,box-shadow] placeholder:text-[#94A3B8] focus:border-[#8B5CF6] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] motion-reduce:transition-none"
              placeholder="Search by name, description, or language"
              aria-label="Search repositories"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="flex min-h-9 items-center rounded-lg border border-[#E2E8F0] bg-white px-[10px] max-[520px]:w-full">
            <label htmlFor="projects-filter" className="sr-only">
              Sort repositories
            </label>
            <select
              id="projects-filter"
              className="border-0 bg-transparent text-[12px] text-[#475569] outline-none max-[520px]:min-h-[34px] max-[520px]:w-full"
              value={sortOption}
              onChange={(event) =>
                setSortOption(event.target.value as SortOption)
              }
            >
              <option value="recent">Recently Updated</option>
              <option value="stars">Most Stars</option>
              <option value="name">Name</option>
              <option value="language">Language</option>
            </select>
          </div>
        </div>

        <form
          className="projects-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex min-h-[38px] items-center gap-[9px] border-b border-[#E2E8F0] px-[14px] py-2 text-[11px] text-[#64748B]">
            <input
              className="m-0 mt-[2px] h-[14px] w-[14px] shrink-0 accent-[#7C3AED]"
              type="checkbox"
              aria-label="Select all shown repositories"
              checked={allVisibleSelected}
              onChange={toggleVisibleRepositories}
            />
            <p className="m-0">Select all shown (up to 6)</p>
          </div>
          {visibleRepositories.map((repository, index) => (
            <label
              className={`flex min-h-[62px] cursor-pointer items-start gap-[9px] px-[14px] py-[9px] transition-colors duration-150 hover:bg-[#FAF9FF] has-[:checked]:bg-[#F5F3FF] has-[:checked]:hover:bg-[#F1EDFF] motion-reduce:transition-none ${index > 0 ? "border-t border-[#F1F5F9]" : ""}`}
              key={repository.id}
            >
              <input
                className="m-0 mt-[2px] h-[14px] w-[14px] shrink-0 accent-[#7C3AED]"
                type="checkbox"
                name="projects-checkbox"
                checked={selectedIds.includes(repository.id)}
                onChange={() =>
                  setSelectedIds((current) =>
                    current.includes(repository.id)
                      ? current.filter((id) => id !== repository.id)
                      : [...current, repository.id],
                  )
                }
                aria-label={`Select ${repository.name}`}
              />
              <div className="min-w-0">
                <div className="mb-[2px] flex flex-wrap items-center gap-2">
                  <h2 className="m-0 text-[12px] font-bold text-[#1E293B]">
                    {repository.name}
                  </h2>
                  <div className="flex items-center gap-1 rounded-full bg-[#F1F5F9] px-[6px] py-px">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${repository.languageColorClass}`}
                    />
                    <p className="m-0 text-[10px] text-[#334155]">
                      {repository.language}
                    </p>
                  </div>
                </div>
                <p className="mb-[2px] mt-0 text-[11px] text-[#475569]">
                  {repository.description}
                </p>
                <div className="text-[10px] text-[#64748B]">
                  {repository.stars} stars · Updated {repository.updatedDaysAgo}{" "}
                  {repository.updatedDaysAgo === 1 ? "day" : "days"} ago
                </div>
              </div>
            </label>
          ))}
          {visibleRepositories.length === 0 && (
            <p className="p-5 text-center text-[14px] text-[#64748B]">
              No repositories match your search.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

type ProjectsDashboardProps = {
  onContinue?: (selectedRepositories: Repository[]) => void;
};

export function ProjectsDashboard({ onContinue }: ProjectsDashboardProps) {
  const [selectedIds, setSelectedIds] = useState(
    repositories.slice(0, 4).map((repository) => repository.id),
  );
  const selectedRepositories = repositories.filter((repository) =>
    selectedIds.includes(repository.id),
  );

  return (
    <>
      <TopNavbarPage3
        selectedCount={selectedIds.length}
        onContinue={() => onContinue?.(selectedRepositories)}
      />
      <div className="grid min-h-screen grid-cols-[240px_minmax(0,1fr)] bg-[#F1F5F9] max-[1023px]:grid-cols-[210px_minmax(0,1fr)] max-[767px]:block">
        <SideBar />
        <ProjectsDashboardContent
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      </div>
    </>
  );
}
