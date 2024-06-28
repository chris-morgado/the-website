import React from 'react';
import '../../../styles/globals.css';
import MainNavBar from "../../../components/nav/navbars";

const CoffeeMod: React.FC = () => {
    return (
        <div className="page">
            <MainNavBar />
            <div className="inner-page">
                <div className="project-page-container">
                    <h1>Minecraft Coffee Mod</h1>

                    <p>🚧UNDER CONSTRUCTION!🚧</p>
                </div>
            </div>
        </div>
    );
}

export default CoffeeMod;