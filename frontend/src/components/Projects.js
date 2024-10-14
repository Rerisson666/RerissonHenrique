import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/projetos')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            <h2>Meus Projetos</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <strong>{project.titulo}</strong>: {project.descricao}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;

