import React from 'react';
import '../../styles/globals.css';
import MainNavBar from '../../components/nav/navbars';

const Home: React.FC = () => {
    return (
        <div className="homepage">
            <MainNavBar />
            projects page!
        </div>
    );
}

export default Home;