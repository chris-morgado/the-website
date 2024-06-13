import React from 'react';
import '../../styles/globals.css';
import MainNavBar from '../../components/nav/navbars';
import { projects } from './Projects';

const ProjectsPage: React.FC = () => {
    return (
        <div className="homepage">
            <MainNavBar />
            projects page!
        </div>
    );
}

export default ProjectsPage;