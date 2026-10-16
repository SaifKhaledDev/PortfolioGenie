import { ProjectSelection } from "./ProjectSelection";

type BuilderProjectsProps = {
  initialSelectedIds: string[];
  onBack: () => void;
  onContinue: (projectIds: string[]) => void;
};

export default function BuilderProjects(props: BuilderProjectsProps) {
  return <ProjectSelection {...props} />;
}
