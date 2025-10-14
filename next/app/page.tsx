import React from 'react';
import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';
import NavItem from '../components/nav/navitem';
import { ProjectScrollCard } from './projects/ProjectCards';
import { projects } from './projects/Projects';
import { GitHubLink } from '../components/common/GithubContact';
import { LinkedInLink } from '../components/common/LinkedInContact';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';


const experienceItems = [
    {
      date: "May 2025",
      title: "Intern",
      team: "Team",
      company: "Honda",
      location: "Queens, NY",
      blurb:
        "Blah blah blah",
      accent: "text-emerald-400",
    },
    {
      date: "March 2025",
      title: "SWE Intern",
      team: "Team",
      company: "Honda",
      location: "Brooklyn, NY",
      blurb:
        "Blah blah blah",
      accent: "text-emerald-400",
    },
  ]

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
                            <GitHubLink link="https://github.com/chris-morgado"></GitHubLink>
                            <LinkedInLink link="https://www.linkedin.com/in/chris-morgado/"></LinkedInLink>
                            <NavItem key={`Resume`} navItem={{name: "Resume", link: "/resume"}}></NavItem>   
                        </div>
                    </div>
                    <div style={{flex: '1'}}></div>
                    <div className="picture">
                        <img src="images/me_in_the_wild2.png" style={{width:'100%', height:'100%'}}></img>
                    </div>
                </div>

                <ExperienceTimeline items={experienceItems} />

                <div className="project-scroll">
                    <h1> Featured Projects: </h1>
                    <div className="project-scroll-container">
                        <ProjectScrollCard project={projects[8]}></ProjectScrollCard>
                        <ProjectScrollCard project={projects[4]}></ProjectScrollCard>
                        <ProjectScrollCard project={projects[3]}></ProjectScrollCard>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Home;

