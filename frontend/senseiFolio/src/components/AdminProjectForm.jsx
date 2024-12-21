// frontend/senseiFolio/src/components/AdminProjectForm.jsx
import React, { useState, useEffect } from 'react';

const AdminProjectForm = ({ project, onSubmit }) => {
    const [title, setTitle] = useState(project ? project.title : '');
    const [description, setDescription] = useState(project ? project.description : '');
    const [technologies, setTechnologies] = useState(project ? project.technologies : '');
    const [link, setLink] = useState(project ? project.link : '');

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description);
            setTechnologies(project.technologies);
            setLink(project.link);
        }
    }, [project]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, technologies, link });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Technologies:</label>
                <input type="text" value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
            </div>
            <div>
                <label>Link:</label>
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
            <button type="submit">{project ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default AdminProjectForm;
