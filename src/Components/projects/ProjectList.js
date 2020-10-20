import React from "react";
import ProjectSummery from "./ProjectSummery";

function ProjectList({ projects }) {
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <ProjectSummery key={project.id} project={project} />
        ))}
    </div>
  );
}

export default ProjectList;
