import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import BuilderContact from "./pages/BuilderContact";
import BuilderPersonalInfo from "./pages/BuilderPersonalInfo";
import BuilderProjects from "./pages/BuilderProjects";
import BuilderSkills from "./pages/BuilderSkills";
import ExportPublish from "./pages/ExportPublish";
import GithubConnection from "./pages/GithubConnection";
import LandingPage from "./pages/LandingPage";
import LivePreview from "./pages/LivePreview";
import { ProjectsDashboard } from "./pages/ProjectsDashboard";

function AppRoutes() {
  const navigate = useNavigate();
  const [selectedProjectIds, setSelectedProjectIds] = useState<string[]>([]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/connect" element={<GithubConnection />} />
      <Route
        path="/dashboard"
        element={
          <ProjectsDashboard
            onContinue={(selectedProjects) => {
              setSelectedProjectIds(
                selectedProjects.map((project) => project.id),
              );
              navigate("/builder-personal-info");
            }}
          />
        }
      />
      <Route
        path="/builder-personal-info"
        element={
          <BuilderPersonalInfo
            onBack={() => navigate("/dashboard")}
            onContinue={() => navigate("/builder-projects")}
          />
        }
      />
      <Route
        path="/builder-projects"
        element={
          <BuilderProjects
            initialSelectedIds={selectedProjectIds}
            onBack={() => navigate("/builder-personal-info")}
            onContinue={(projectIds) => {
              setSelectedProjectIds(projectIds);
              navigate("/builder-skills");
            }}
          />
        }
      />
      <Route
        path="/projects"
        element={<Navigate to="/builder-projects" replace />}
      />
      <Route path="/builder-skills" element={<BuilderSkills />} />
      <Route path="/builder-contact" element={<BuilderContact />} />
      <Route path="/preview" element={<LivePreview />} />
      <Route path="/publish" element={<ExportPublish />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
