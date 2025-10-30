import React from 'react';
import MainNavBar from '../components/nav/navbars';
import { ProjectScrollCard } from '../components/experience/ProjectCard';
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline';
import { ClearPill } from '../components/ui/ClearPill';
import { link } from 'fs';

const experienceItems = [
    {
    date: "Aug. 2025 - Current",
    title: "Supplemental Instruction Program Assistant",
    team: "",
    company: "Academic Success Center, RIT",
    location: "Rochester, NY",
    blurb:
      "Currently continuing my role as a Program Assistant during a period of rapid growth, supporting coordination and training for an expanded group of 50+ SI Leaders.\nRevamping data organization to make processes more efficient and support program growth.",
    accent: "text-emerald-400",
    tags: ["Python", "Google Apps Script"]    
  },
  {
    date: "May 2025 - Aug. 2025",
    title: "Software Engineering Intern",
    team: "In-Vehicle Infotainment (IVI) Design Group",
    company: "American Honda Motor Company",
    location: "Marysville, OH",
    blurb:
      "Spearheaded the design and development of a multi-tool Android app from the ground up to facilitate structured data collection, now currently being used across multiple departments and is currently in the process of being patented. \nInvolved in the modernization of data storage by migrating from Excel to a PostgreSQL backend integrated with Jira, reducing manual data input by 90%. \nOptimized data acquisition methods for 3 test procedures, increasing test coverage and improving data reliability",
    accent: "text-emerald-400",
    tags: ["C++", "Kotlin", "Android Development", "PostgreSQL", "Jira", "Excel"]
  },
  {
    date: "Dec. 2024 - May 2025",
    title: "Supplemental Instruction Program Assistant",
    team: "",
    company: "Academic Success Center, RIT",
    location: "Rochester, NY",
    blurb:
      "Coordinated administrative operations such as schedules, logistics, and training for 20+ SI Leaders in the SI program.\nLed weekly training, reviewed SI session plans, and acted as a mentor figure for current SI Leaders.",
    accent: "text-emerald-400",
  },
  {
    date: "Aug. 2024 - Dec. 2024",
    title: "Software Engineering Intern",
    team: "In-Vehicle Infotainment (IVI) Testing Group",
    company: "American Honda Motor Company",
    location: "Marysville, OH",
    blurb:
      "Implemented a video stitching program using OpenCV-Python and a PyQt frontend to combine multiple test drive recordings into a single video with customizable layouts, eliminating costly third-party solutions.\nBuilt a Wi-Fi-based protocol layer to interface the app with in-house tools (e.g., CAN loggers, dark current monitors), enabling remote setup and data acquisition, significantly reducing test time for multiple procedures.",
    accent: "text-emerald-400",
    tags: ["C++", "Kotlin", "Android Development", "Python", "PyQt", "OpenCV"]
  },
  {
    date: "Dec. 2022 - May 2024",
    title: "Supplemental Instruction Leader",
    team: "",
    company: "Academic Success Center, RIT",
    location: "Rochester, NY",
    blurb:
      "Facilitated 2 weekly study sessions for a two-course Python & Java programming sequence that delves into computational problem solving, covering data structures and algorithms.\nEffectively coordinated additional monthly bonus sessions that garnered 3x the attendance compared to standard sessions.",
    accent: "text-emerald-400",
    tags: ["Python", "Java"]
  },
]

const projectItems = [
  {
    title: "DegreeMap",
    blurb: "Blah blah blah",
    image: "/images/DegreeMap.png",
    tags: ["React", "TypeScript", "Next.js"],
    links: [{ label: "GitHub", href: "https://github.com/DegreeMap/DegreeMap"}, { label: "Inspiration", href: "https://www.rit.edu/computing/sites/rit.edu.computing/files/docs/RIT%20SWEN%20Curriculum%20Flowchart%20v12.3_2221.pdf" }],
    accent: "text-emerald-400",
  },
  {
    title: "Irrig (Smart Irrigation System)",
    blurb: "Blah blah blah",
    image: "/images/IrrigScreen.png",
    tags: ["C++", "ESP32", "Arduino Language", "PlatformIO"],
    links: [{ label: "GitHub", href: "https://github.com/fkhan224/Irrig"}],
    accent: "text-emerald-400",
  },
  {
    title: "SSE Website Rebuild",
    blurb: "Blah blah blah",
    image: "/images/SseRebuild.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    links: [{ label: "sse.rit.edu", href: "https://sse.rit.edu" }],
    accent: "text-emerald-400",
  },
]

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <MainNavBar />
      <div id="home" className="inner-homepage">
        <div className="about-section fade-on-load px-50 max-[700px]:px-4">
          <div className="header">
            {/* CLAMP (smoothly changes font size): clamp(min, preferred, max) */}
            <h1 className="
                font-bold
                text-[clamp(2.75rem,6vw,4.5rem)]
                leading-tight">
              Chris Morgado
            </h1>
            <h3 className="
                mt-2
                text-[clamp(.7rem,2.0vw,1.2rem)]
                leading-snug
                ">
              Hi! I’m Chris Morgado — a programmer, rock climber, and pretty decent Minecraft builder! I'm currently studying Software Engineering at the Rochester Institute of Technology, with minors in Computer Engineering and Quantum Information Science & Technology. I have a strong passion for learning and exploring new technologies, with interests spanning embedded development, wireless communication, and full-stack programming.
            </h3>
            <div className="sub-nav-bar gap-3 flex mt-4 flex-wrap">
              <ClearPill
                href="https://github.com/chris-morgado"
                icon={
                  <svg aria-label="GitHub logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                }
              >
                GitHub
              </ClearPill>

              <ClearPill
                href="https://www.linkedin.com/in/chris-morgado/"
                icon={
                  <svg aria-label="LinkedIn logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd"></path></svg>
                }
              >
                LinkedIn
              </ClearPill>

              <ClearPill
                href="/images/ChrisMorgadoResume.pdf"
              >
                View Resume
              </ClearPill>
            </div>
          </div>
          <div style={{ flex: '1' }}></div>
          <div className="picture max-[1400px]:hidden">
            <img src="images/me_in_the_wild2.png" style={{ width: '100%', height: '100%' }}></img>
          </div>
        </div>
        <h1 id="experience" className="font-bold text-[clamp(1.95rem,6vw,3.5rem)] leading-tight">
          Experience
        </h1>
        <ExperienceTimeline items={experienceItems} />

        {/* Projects */}
        <div className="project-scroll fade-on-load">
          <h1 id="projects" className="font-bold text-[clamp(1.95rem,6vw,3.5rem)] leading-tight">
            Projects
          </h1>

          <div className="mt-4 mx-4 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-4">
            <ProjectScrollCard project={projectItems[0]} ></ProjectScrollCard>
            <ProjectScrollCard project={projectItems[1]} ></ProjectScrollCard>
            <ProjectScrollCard project={projectItems[2]} ></ProjectScrollCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;