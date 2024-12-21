// frontend/senseiFolio/src/App.jsx
import React from 'react';
import Projects from './pages/Projects';
import AdminProjects from './pages/AdminProjects';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Projects />
            <AdminProjects />
        </div>
    );
}

export default App;
