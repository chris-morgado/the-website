import React from 'react';
import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';
import NavItem from '../components/nav/navitem';
import { ProjectScrollCard } from './projects/ProjectCards';
import { projects } from './projects/Projects';
import Contact from '../components/common/Contact';

const Home: React.FC = () => {
    return (
        <div className="homepage">
            <MainNavBar />
            <div className="inner-homepage">
                <div className="about-section">
                    <div className="header">
                        <h1>
                            Chris Morgado
                        </h1>
                        <h3>
                            Welcome to my site!
                        </h3>
                        <div className="sub-nav-bar">
                            <NavItem key={`Resume`} navItem={{name: "Resume", link: "/resume"}}></NavItem>   
                            <NavItem key={`Contact`} navItem={{name: "Contact", link: "/contact"}}></NavItem>   
                            <NavItem key={`Terminal`} navItem={{name: "Terminal", link: "/terminal"}}></NavItem>   
                        </div>
                    </div>
                    <div style={{flex: '1'}}></div>
                    <div className="picture">
                        <img src="images/me_in_the_wild2.png" style={{width:'100%', height:'100%'}}></img>
                    </div>
                </div>

                {/* Later on: Professional Experience */}

                <div className="project-scroll">
                    <h1> Featured Projects: </h1>
                    <div className="project-scroll-container">
                        <ProjectScrollCard project={projects[8]}></ProjectScrollCard>
                        <ProjectScrollCard project={projects[4]}></ProjectScrollCard>
                        <ProjectScrollCard project={projects[3]}></ProjectScrollCard>
                    </div>
                </div>  

                <div className="contact-section">
                    <h1> Contacts & Profiles: </h1>
                    <Contact name="Github" link=""></Contact>
                    <Contact name="LinkedIn" link=""></Contact>
                    <Contact name="Instagram" link=""></Contact>
                </div>  
            </div>
        </div>
    );
}

export default Home;

