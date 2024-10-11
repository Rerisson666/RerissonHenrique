import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ toggleTheme }) => {
    return (
        <div className="sidebar">
            <h1 className="logo">W</h1>
            <nav>
                <a href="https://linkedin.com"><FaLinkedin /></a>
                <a href="https://github.com"><FaGithub /></a>
                <a href="mailto:email@example.com"><FaEnvelope /></a>
            </nav>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Sidebar;
