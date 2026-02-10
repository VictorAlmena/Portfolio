import './ProjectCard.css'

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
}

export default function ProjectCard({ title, description, techStack }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="project-card-content">
                <h3 className="project-card-title">
                    {title}
                </h3>
                <p className="project-card-description">
                    {description}
                </p>

                <div className="project-card-tech-stack">
                    {techStack.map((tech) => (
                        <span 
                            key={tech} 
                            className="project-card-tech-badge"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}