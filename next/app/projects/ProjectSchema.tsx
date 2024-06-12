type Project = {
    id: number;
    slug: string;
    title: string;
    text: string;
    start_date: Date;
    end_date: Date | null;
    post_date: Date;
    completed: boolean;
    // tags?: string[]; 
};

const exampleProject: Project = {
    id: 1,
    slug: "/example",
    title: "Sample Project",
    text: "<p>This is a <strong>sample</strong> project with HTML content.</p>",
    start_date: new Date("2023-01-16"), // Jan 16, 2023, Will be shown as Jan. 2023
    end_date: new Date("2023-02-06"),   // Feb 16, 2023, Will be shown as Feb. 2023
    post_date: new Date("2024-06-12"),
    completed: true
};