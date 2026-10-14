import { SideBar } from "./ProjectsDashboard";
import { IoArrowForward } from "react-icons/io5";
import { useState } from "react";

type Project = {
  id: string;
  name: string;
  language: string;
  dot: string;
  description: string;
  gradient: string;
};

const projects: Project[] = [
  {
    id: "taskflow-api",
    name: "TaskFlow API",
    language: "TypeScript",
    dot: "bg-blue-500",
    description: "REST API for task management with auth and team boards.",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    id: "weather-lens",
    name: "Weather Lens",
    language: "JavaScript",
    dot: "bg-yellow-400",
    description: "Weather dashboard with 7-day forecast and saved cities.",
    gradient: "from-blue-500 to-sky-400",
  },
  {
    id: "pybudget",
    name: "PyBudget",
    language: "Python",
    dot: "bg-blue-600",
    description: "Command-line budgeting tool that reads bank CSV exports.",
    gradient: "from-violet-600 to-purple-400",
  },
  {
    id: "shelfshare",
    name: "ShelfShare",
    language: "TypeScript",
    dot: "bg-blue-500",
    description: "Community library app for lending and borrowing books.",
    gradient: "from-fuchsia-500 to-purple-400",
  },
  {
    id: "chess-engine-js",
    name: "Chess Engine JS",
    language: "JavaScript",
    dot: "bg-yellow-400",
    description: "A small chess engine with alpha-beta pruning.",
    gradient: "from-slate-800 to-slate-600",
  },
  {
    id: "notes-sync",
    name: "Notes Sync",
    language: "Go",
    dot: "bg-cyan-400",
    description: "Markdown notes that sync across devices.",
    gradient: "from-blue-600 to-indigo-400",
  },
];

type ProjectsSelectionContentProps = {
  initialSelectedIds: string[];
  onBack?: () => void;
};

export function ProjectsSelectionContent({
  initialSelectedIds,
  onBack,
}: ProjectsSelectionContentProps) {
  // ids of the selected projects, in display order (first clicked = 1)
  const [selected, setSelected] = useState<string[]>(initialSelectedIds);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const selectedProjects = selected.map(
    (id) => projects.find((p) => p.id === id)!
  );

  function toggleProject(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function moveProject(from: number, to: number) {
    setSelected((prev) => {
      if (to < 0 || to >= prev.length || from === to) return prev;
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  }

  function removeProject(id: string) {
    setSelected((prev) => prev.filter((x) => x !== id));
  }

  function resetDrag() {
    setDragIndex(null);
    setOverIndex(null);
  }

  return (
    <>
      <main className="min-h-screen bg-[#F1F5F9] px-4 pb-8 pt-[174px] min-[768px]:ml-[210px] min-[768px]:px-6 min-[768px]:pt-[78px] min-[1024px]:ml-[240px]">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-[13px] font-medium text-[#334155] min-[768px]:hidden"
        >
          Back to projects
        </button>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="left">
            <h1 className="text-3xl font-bold text-slate-900">
              Choose projects to feature
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Three to six projects make the strongest portfolio. Select,
              deselect, and drag to set the order.
            </p>
          </div>
          <span className="w-fit shrink-0 bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
            {selected.length} of {projects.length} selected
          </span>
        </div>

        <div className="selection-body flex flex-col min-[900px]:flex-row min-[900px]:items-start gap-4 min-[900px]:gap-6 mt-8">
          <div className="cards grid grid-cols-1 min-[500px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-3 flex-1 min-w-0">
            {projects.map((project) => {
              const position = selected.indexOf(project.id);
              const isSelected = position !== -1;

              return (
                <div
                  key={project.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onClick={() => toggleProject(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleProject(project.id);
                    }
                  }}
                  className={`card bg-white rounded-xl border-2 hover:border-purple-600 focus-visible:ring-2 focus-visible:ring-purple-300 focus:outline-none overflow-hidden cursor-pointer select-none ${
                    isSelected ? "border-purple-600" : "border-slate-200"
                  }`}
                >
                  <div
                    className={`relative h-24 p-3 bg-linear-to-br ${project.gradient}`}
                  >
                    <div className="w-16 h-1.5 rounded-full bg-white opacity-60"></div>
                    <div className="w-10 h-1.5 rounded-full bg-white opacity-40 mt-1.5"></div>
                    <div className="absolute bottom-0 left-3 w-24 h-9 rounded-t-md bg-white opacity-30"></div>
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-sm font-semibold text-slate-900 truncate">
                        {project.name}
                      </h3>
                      <span
                        className={`w-5 h-5 shrink-0 rounded-full border text-xs font-semibold flex items-center justify-center ${
                          isSelected
                            ? "bg-purple-600 border-purple-600 text-white"
                            : "border-slate-300 text-transparent"
                        }`}
                      >
                        {isSelected ? position + 1 : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 w-fit bg-slate-50 px-2 py-0.5 rounded-full mt-2 text-xs text-slate-600">
                      <span
                        className={`w-2 h-2 rounded-full ${project.dot}`}
                      ></span>
                      <p>{project.language}</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full shrink-0 rounded-xl border border-slate-200 bg-white p-4 min-[900px]:w-60">
            <h2 className="text-sm font-semibold text-slate-900">
              Display order
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Drag, or use the arrows.
            </p>

            {selectedProjects.length === 0 && (
              <p className="text-xs text-slate-400 mt-3">
                Click a project card to add it here.
              </p>
            )}

            <div className="flex flex-col gap-2 mt-3">
              {selectedProjects.map((project, index) => (
                <div
                  key={project.id}
                  draggable
                  onDragStart={(e) => {
                    setDragIndex(index);
                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/plain", String(index));
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setOverIndex(index);
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (dragIndex !== null) moveProject(dragIndex, index);
                    resetDrag();
                  }}
                  onDragEnd={resetDrag}
                  className={`order-row flex items-center gap-2 bg-slate-50 border rounded-lg p-2 ${
                    overIndex === index &&
                    dragIndex !== null &&
                    dragIndex !== index
                      ? "border-purple-600"
                      : "border-slate-200"
                  } ${dragIndex === index ? "opacity-40" : ""}`}
                >
                  <span className="text-slate-400 text-xs cursor-grab select-none">
                    ⋮⋮
                  </span>
                  <span className="w-5 h-5 shrink-0 rounded-full bg-slate-900 text-white text-xs font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="flex-1 min-w-0 truncate text-xs font-medium text-slate-800">
                    {project.name}
                  </p>
                  <button
                    type="button"
                    aria-label="Move up"
                    disabled={index === 0}
                    onClick={() => moveProject(index, index - 1)}
                    className="text-slate-500 text-xs px-0.5 hover:text-slate-900 disabled:text-slate-300 disabled:cursor-not-allowed"
                  >
                    ˄
                  </button>
                  <button
                    type="button"
                    aria-label="Move down"
                    disabled={index === selectedProjects.length - 1}
                    onClick={() => moveProject(index, index + 1)}
                    className="text-slate-500 text-xs px-0.5 hover:text-slate-900 disabled:text-slate-300 disabled:cursor-not-allowed"
                  >
                    ˅
                  </button>
                  <button
                    type="button"
                    aria-label="Remove"
                    onClick={() => removeProject(project.id)}
                    className="text-slate-500 text-xs px-0.5 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


type TopNavbarPage4Props = {
  onBack?: () => void;
};

export function TopNavbarPage4({ onBack }: TopNavbarPage4Props) {
    return(
        <>
            <div className="fixed inset-x-0 top-0 z-30 hidden h-[55px] items-center justify-between border-b border-[#E5E7EB] bg-white px-8 min-[768px]:flex">
                <button type="button" onClick={onBack} className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[13px] text-[#334155] transition-colors hover:bg-[#F8FAFC]">
                 Back
                </button>
                <button type="button" className="my-2 inline-flex items-center gap-2 rounded-[9px] bg-linear-to-r from-[#6366F1] to-[#7C3AED] px-[14px] py-[7px] text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:shadow-[0_5px_12px_rgba(99,102,241,0.24)]">
                  Next : Personal info <IoArrowForward />
                </button>
              </div>
        </>
    )
}

type ProjectSelectionProps = ProjectsSelectionContentProps;

export default ProjectsSelectionContent;
export function ProjectSelection({
  initialSelectedIds,
  onBack,
}: ProjectSelectionProps) {
    return (
        <>

        <TopNavbarPage4 onBack={onBack} />
        <SideBar activeItem="projects" />
        <ProjectsSelectionContent
          initialSelectedIds={initialSelectedIds}
          onBack={onBack}
        />
        </>
    )
}