import React, { useEffect, useState } from 'react';

function AboutMe() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:8000/sobre')
            .then(response => response.json())
            .then(data => setAbout(data));
    }, []);

    return (
        <div>
            <h2>Sobre Mim</h2>
            <p>Nome: {about.nome}</p>
            <p>Profissão: {about.profissao}</p>
            <p>Skills: {about.skills && about.skills.join(', ')}</p>
        </div>
    );
}

export default AboutMe;
