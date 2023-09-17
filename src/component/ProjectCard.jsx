import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project__card">
      <img src={project.img} alt={project.name} />
    </div>
  );
};

export default ProjectCard;
