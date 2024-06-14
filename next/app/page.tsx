import React from 'react';
import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';
import NavItem from '../components/nav/navitem';

const Home: React.FC = () => {
    return (
        <div className="homepage">
            <MainNavBar />
            <div className="inner-homepage">
                <div className="about-section">
                    <div className="header">
                        <h1>
                            Hi, I'm Christian -- A Software Engineer from NYC!
                        </h1>
                        <h3>
                            I'm currently a 3rd year Software Engineering student at RIT :) <br></br> My SE interests are in embedded software, web development, both front-end and back-end work and working on fun little side projects! In my spare time I'm usually hiking & taking photos, playing the guitar, skating or playing RPGs.
                        </h3>
                        <div className="sub-nav-bar">
                            <NavItem key={`Resume`} navItem={{name: "Resume", link: "/resume"}}></NavItem>   
                            <NavItem key={`Contact`} navItem={{name: "Contact", link: "/contact"}}></NavItem>   
                            <NavItem key={`Terminal`} navItem={{name: "Terminal", link: "/terminal"}}></NavItem>   
                        </div>
                    </div>
                    <div style={{flex: '1'}}></div>
                    <div className="picture">
                        <img src="images/me_in_the_wild.jpg" style={{width:'100%', height:'100%'}}></img>
                    </div>
                </div>
                <div className="project-scroll">
                    <h1> My Projects: </h1>
                    <div className="project-scroll-container">
                    
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Home;

