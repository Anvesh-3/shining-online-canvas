
import { briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-padding">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience that has shaped my career and skills
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow border-none fade-in">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 7h-7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 21V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10"/></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold">Junior Data Analyst Intern</h3>
                    <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                      Jun 2024 - Jul 2024
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Zepto – Fast Commerce Company</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Collected, cleaned, and analyzed large datasets from various sources (SQL, Excel, and internal 
                    dashboards). Built interactive dashboards and visualizations using Tableau / Power BI to monitor KPIs such 
                    as order fulfillment rate, delivery time, and inventory accuracy. Conducted exploratory data analysis (EDA) 
                    using Python (Pandas, NumPy, Seaborn) to identify patterns and business insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">EDA</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">ML Algorithms</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Matplotlib</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Seaborn</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
