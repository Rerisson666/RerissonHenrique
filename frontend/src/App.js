import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Articles from './components/Articles';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <Sidebar toggleTheme={toggleTheme} />
            <main>
                <AboutMe />
                <Projects />
                <Articles />
            </main>
        </div>
    );
};

export default App;
