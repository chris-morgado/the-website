{/* 
Projects:
- TestTail <-- WIP, page made

- Rush Hour <-- WIP, page made

- CircuitCheatSheet <-- WIP, page made

- Club App <-- WIP, page made

- U-Fund Application <-- WIP, page made

- M.U.D. <-- WIP, page made

- Coffee Minecraft Mod <-- WIP, page made

- DegreeMap <-- WIP, page made

- This Website! <-- WIP, page made
*/}
class Projects{
    private static id: number;
    private projects: Project[]
    
    public constructor(){
        this.projects = [];
        Projects.id = 0;
    }

    public getProjects(){
        return this.projects;
    }

    public addProject(project: Project){
        projects[projects.length] = project;
    }
}


export const projects: Project[] = [
    {
        id: 9,
        slug: "/thewebsite",
        title: "TheWebsite",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2024-06-15"), 
        end_date: null,   
        post_date: new Date("2024-06-12"),
        completed: true
    },
    
    {
        id: 9,
        slug: "/degreemap",
        title: "DegreeMap",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2024-04-15"), 
        end_date: null,   
        post_date: new Date("2024-06-12"),
        completed: true
    },

    {
        id: 8,
        slug: "/coffeemod",
        title: "StretchyCoffee -- Minecraft Mod",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2024-03-15"), 
        end_date: null,   
        post_date: new Date("2024-06-12"),
        completed: true
    },

    {
        id: 7,
        slug: "/mud",
        title: "Multi-User Dungeon -- 2D Roguelike",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2024-01-15"), 
        end_date: new Date("2024-05-15"),   
        post_date: new Date("2024-06-12"),
        completed: true
    },

    {
        id: 6,
        slug: "/clubapp",
        title: "Club Attendance Tracker Full Stack Web App",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2023-10-15"), 
        end_date: new Date("2023-12-15"),   
        post_date: new Date("2024-06-12"),
        completed: true
    },

    {
        id: 5,
        slug: "/ssequel",
        title: "SSE Website Redesign",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2023-08-15"), 
        end_date: null,   
        post_date: new Date("2024-06-12"),
        completed: true
    },
    
    {
        id: 4,
        slug: "/ufund",
        title: "uFund Sam & Friends Full Stack Web App",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2023-08-15"), 
        end_date: new Date("2023-12-15"),   
        post_date: new Date("2024-06-12"),
        completed: true
    },

    {
        id: 3,
        slug: "/circuit1",
        title: "CircuitCheatSheet",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2023-05-15"), 
        end_date: null,   
        post_date: new Date("2024-06-12"),
        completed: false
    },
    
    {
        id: 2,
        slug: "/rushhour",
        title: "Rush Hour Java Applet",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2023-03-15"), 
        end_date: new Date("2023-05-15"),   
        post_date: new Date("2024-06-12"),
        completed: true
    },
    
    {
        id: 1,
        slug: "/testtail",
        title: "TestTail",
        text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
        start_date: new Date("2022-08-15"), 
        end_date: new Date("2022-12-15"),   
        post_date: new Date("2024-06-12"),
        completed: true
    }
]
