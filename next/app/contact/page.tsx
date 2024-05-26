import React from 'react';
import '../../styles/globals.css';
import MainNavBar from '../../components/nav/navbars';

const Home: React.FC = () => {
    return (
        <div className="homepage">
            <MainNavBar />
            contact page!
        </div>
    );
}

export default Home;