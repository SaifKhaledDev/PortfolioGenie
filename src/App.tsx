import { useState } from "react";
import { ProjectsDashboard } from "./pages/ProjectsDashboard";
import { ProjectSelection } from "./pages/ProjectSelection";

export default function App() {
const [currentPage, setCurrentPage] = useState<"dashboard" | "selection">(
"dashboard",
);

const [selectedProjectIds, setSelectedProjectIds] = useState<string[]>([]);

return (
<>
<div className={currentPage === "dashboard" ? "" : "hidden"}>
<ProjectsDashboard
onContinue={(selectedProjects) => {
setSelectedProjectIds(selectedProjects.map((project) => project.id));
setCurrentPage("selection");
}}
/> </div>

```
  {currentPage === "selection" && (
    <ProjectSelection
      initialSelectedIds={selectedProjectIds}
      onBack={() => setCurrentPage("dashboard")}
    />
  )}
</>
```

);
}
