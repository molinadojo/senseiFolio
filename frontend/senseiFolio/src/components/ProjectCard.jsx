// frontend/senseiFolio/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectCard;
