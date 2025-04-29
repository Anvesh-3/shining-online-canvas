
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const projectData = [
  {
    id: 1,
    title: "Electric Vehicle Data Analysis",
    description: "Conducted an in-depth analysis of EV adoption trends across the US using Python libraries. Examined key metrics including vehicle types, electric range, CAFV eligibility, and pricing variations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "#"
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description: "Developed a system that analyzes user preferences and provides tailored movie suggestions using collaborative and content-based filtering techniques with machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Python", "ML", "Predictive Analysis"],
    link: "#"
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-padding">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and challenges I've tackled.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={project.id} 
              className="fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProjectCard 
                project={project} 
                isActive={activeProject === project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

type ProjectCardProps = {
  project: ProjectType;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const ProjectCard = ({ project, isActive, onMouseEnter, onMouseLeave }: ProjectCardProps) => {
  return (
    <Card 
      className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="h-48 overflow-hidden"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.3s ease',
          transform: isActive ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="text-primary font-medium inline-flex items-center"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </CardContent>
    </Card>
  );
};

export default Projects;
