type Project = {
    id: number;
    slug: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    completed: boolean;
    tags?: string[]; 
};