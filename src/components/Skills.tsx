
import { Progress } from "@/components/ui/progress";

const skillsData = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "HTML/CSS", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Data Analysis", level: 90 },
  { name: "Tableau/Power BI", level: 85 },
  { name: "Excel", level: 90 },
  { name: "Problem Solving", level: 85 }
];

const toolsData = [
  { name: "MySQL", category: "Database" },
  { name: "Tableau", category: "Data Visualization" },
  { name: "Power BI", category: "Data Visualization" },
  { name: "Excel", category: "Data Analysis" },
  { name: "Android Studio", category: "Development" },
  { name: "VMware", category: "Virtualization" },
  { name: "Ubuntu", category: "Operating System" },
  { name: "Jupyter", category: "Data Science" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-padding">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I specialize in data analysis with a strong foundation in programming and visualization tools.
            Here's a breakdown of my technical skills and tools I use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {toolsData.map((tool, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-medium">{tool.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
