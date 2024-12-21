// frontend/senseiFolio/src/pages/AdminProjects.jsx
import React, { useEffect, useState } from 'react';
import AdminProjectForm from '../components/AdminProjectForm';

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleCreate = (project) => {
        fetch('http://localhost:8000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(response => response.json())
            .then(data => setProjects([...projects, data]))
            .catch(error => console.error('Error creating project:', error));
    };

    const handleUpdate = (project) => {
        fetch(`http://localhost:8000/projects/${editingProject.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(response => response.json())
            .then(data => setProjects(projects.map(p => (p.id === data.id ? data : p))))
            .catch(error => console.error('Error updating project:', error));
        setEditingProject(null);
    };

    const handleDelete = (projectId) => {
        fetch(`http://localhost:8000/projects/${projectId}`, {
            method: 'DELETE',
        })
            .then(() => setProjects(projects.filter(p => p.id !== projectId)))
            .catch(error => console.error('Error deleting project:', error));
    };

    return (
        <div>
            <h1>Admin Projects</h1>
            <AdminProjectForm onSubmit={handleCreate} />
            <div>
                {projects.map(project => (
                    <div key={project.id}>
                        {editingProject && editingProject.id === project.id ? (
                            <AdminProjectForm project={project} onSubmit={handleUpdate} />
                        ) : (
                            <div>
                                <h2>{project.title}</h2>
                                <button onClick={() => setEditingProject(project)}>Edit</button>
                                <button onClick={() => handleDelete(project.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProjects;
