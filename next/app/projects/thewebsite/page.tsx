import React from 'react';
import '../../../styles/globals.css';
import MainNavBar from "../../../components/nav/navbars";

const TheWebsite: React.FC = () => {
    return (
        <div className="page">
            <MainNavBar />
            <div className="inner-page">
                <div className="project-page-container">
                    <h1>THE WEBSITE.</h1>

                    <h2>Overview:</h2>
                    <p>Welcome to my personal website! Here, you'll find a showcase of some of the projects that I'm most proud of. Whether you're here to explore potential collaborations, to gain insights into specific technologies, or just to see what I've been up to, I hope you find something that inspires you.</p>
                    <p>Feel free to browse through my projects, and let's connect if you see any common ground or opportunities to create something amazing together!</p>
                </div>
            </div>
        </div>
    );
}

export default TheWebsite;