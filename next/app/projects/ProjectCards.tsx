import Link from "next/link";

type ProjectCardProps = {
    project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <>
            <div className="project-card">


            </div>
        </>
    );
}

export const ProjectScrollCard: React.FC<ProjectCardProps> = ({project}) => {
    // Function to format dates as 'Month Year'
    const formatDate = (date) => {
       if (!date) return 'Current';
       const monthYearFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
       return monthYearFormat.format(new Date(date));
    };

    const newSlug = "projects/"+project.slug;

    return (
      <Link href={newSlug} className="project-scroll-card">
        <div>
          <h2>{project.title}</h2>
          <p>
            <b>{formatDate(project.start_date)} - {formatDate(project.end_date)}</b>
          </p>
          {project.completed === false && <span className="status-current">Current</span>}
        </div>
      </Link>
    );
}   