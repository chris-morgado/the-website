import React from "react";
import { HeroSection } from "../components/layout/HeroSection";
import { LeftSidebar } from "../components/layout/LeftSidebar";
import { ExperienceEntry } from "../components/experience/ExperienceEntry";
import { ProjectScrollCard } from "../components/experience/ProjectCard";
import type { ExperienceItem } from "../components/experience/ExperienceTimeline";

const experienceItems: ExperienceItem[] = [
  {
    date: "Oct. 2025 - Current",
    title: "Undergraduate Volunteer",
    team: "",
    company: "Wireless and IoT Security & Privacy (WISP) Lab, RIT",
    location: "Rochester, NY",
    blurb:
      "Conducting research on Vehicle-to-Vehicle (V2V) wireless communication and participating in weekly research paper reviews and discussions.\nRecently joined and am excited to contribute to ongoing projects in the lab!",
    accent: "text-emerald-400",
    tags: [],
  },
  {
    date: "Aug. 2025 - Current",
    title: "Supplemental Instruction Program Assistant",
    team: "",
    company: "Academic Success Center, RIT",
    location: "Rochester, NY",
    blurb:
      "Currently continuing my role as a Program Assistant during a period of rapid growth, supporting coordination and training for an expanded group of 50+ SI Leaders.\nRevamping data organization to make processes more efficient and support program growth.",
    accent: "text-emerald-400",
    tags: ["Python", "Google Apps Script"],
  },
  {
    date: "May 2025 - Aug. 2025",
    title: "Software Engineering Intern",
    team: "In-Vehicle Infotainment (IVI) Design Group",
    company: "American Honda Motor Company",
    location: "Marysville, OH",
    blurb:
      "Spearheaded the design and development of a multi-tool Android app from the ground up to facilitate structured data collection, now currently being used across multiple departments and is currently in the process of being patented.\nInvolved in the modernization of data storage by migrating from Excel to a PostgreSQL backend integrated with Jira, reducing manual data input by 90%.\nOptimized data acquisition methods for 3 test procedures, increasing test coverage and improving data reliability",
    accent: "text-emerald-400",
    tags: ["C++", "Kotlin", "Android Development", "PostgreSQL", "Jira", "Excel"],
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
    tags: ["C++", "Kotlin", "Android Development", "Python", "PyQt", "OpenCV"],
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
    tags: ["Python", "Java"],
  },
];

const projectItems = [
  {
    title: "LyricLens",
    blurb:
      "Developing a project that generates a playlist image based on the songs in a given playlist, utilizing various AWS resources for processing and storage. The project also leverages Terraform for automated CI/CD deployment and infrastructure management.",
    image: "/images/LyricLens.png",
    tags: ["Amazon Web Services", "Terraform", "TypeScript", "Next.js"],
    links: [{ label: "GitHub", href: "https://github.com/LyricsLens/2251-swen514-2-Cumulonimbus-Crew" }],
    accent: "text-emerald-400",
  },
  {
    title: "DegreeMap",
    blurb:
      "Created a full-stack web application aimed at helping students organize and track their academic courses.\nImplemented 15+ RESTful APIs built using Spring Boot with JPA to enable dynamic data exchange between the frontend and a MySQL database hosted locally in a Docker container.\nBuilt a Next.js frontend, using dynamic routing and auth context to support user accounts.",
    image: "/images/DegreeMap.png",
    tags: ["React", "TypeScript", "Next.js"],
    links: [
      { label: "GitHub", href: "https://github.com/DegreeMap/DegreeMap" },
      { label: "Inspiration", href: "https://www.rit.edu/computing/sites/rit.edu.computing/files/docs/RIT%20SWEN%20Curriculum%20Flowchart%20v12.3_2221.pdf" },
    ],
    accent: "text-emerald-400",
  },
  {
    title: "Irrig (Smart Irrigation System)",
    blurb:
      "Working on firmware for a portable automated irrigation system to maintain potted plants with minimal user input.\nImplementing a Bluetooth Low Energy protocol layer on an ESP-32 microcontroller to enable connectivity with Android and iOS apps for real-time monitoring and control.",
    image: "/images/IrrigScreen.png",
    tags: ["C++", "ESP32", "Arduino Language", "PlatformIO"],
    links: [{ label: "GitHub", href: "https://github.com/fkhan224/Irrig" }],
    accent: "text-emerald-400",
  },
  {
    title: "SSE Website Rebuild",
    blurb:
      "Directed a team of 7 developers as the Front-end Team Lead to revamp the front-end portion of the SSE website.\nBuilt responsive front-end components with Next.js and TailwindCSS, displaying dynamic data from backend APIs.\nUtilized GitHub Projects to manage Agile sprints, track progress, and maintain structured development workflows.",
    image: "/images/SseRebuild.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    links: [{ label: "sse.rit.edu", href: "https://sse.rit.edu" }],
    accent: "text-emerald-400",
  },
];

export default function Home() {
  return (
    <div className="homepage">
      {/* Full-viewport hero — bio fades on scroll, name stays */}
      <div id="about">
        <HeroSection />
      </div>

      {/* Two-column layout */}
      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 min-w-0 px-16 max-[900px]:px-6 py-24">
          {/* Experience */}
          <section id="experience" className="mb-24">
            <div className="group/list divide-y divide-white/0">
              {experienceItems.map((item, i) => (
                <ExperienceEntry key={i} item={item} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {projectItems.map((project, i) => (
                <ProjectScrollCard key={i} project={project} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
