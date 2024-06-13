import React from 'react';
import '../../styles/globals.css';
import MainNavBar from '../../components/nav/navbars';

const Projects: React.FC = () => {
    return (
        <div className="page">
            <MainNavBar />
            <div className="inner-page">
                project page! 
            </div>
        </div>
    );
}

export default Projects;