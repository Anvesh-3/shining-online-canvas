
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate Data Analyst and Computer Science Engineer with a focus on creating 
                actionable insights through data analysis and visualization.
              </p>
              <p>
                With experience in Python, data analysis, and various visualization tools, I've developed 
                a keen eye for patterns and a deep understanding of what makes data valuable for decision-making.
              </p>
              <p>
                My approach combines analytical problem-solving with technical expertise to 
                deliver solutions that drive business value and inform strategic decisions.
              </p>
              <p>
                When I'm not analyzing data, you'll find me exploring new technologies, working on 
                personal projects, or participating in coding competitions.
              </p>
            </div>
            
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:anveshtiwari3072@gmail.com" className="hover:text-primary">anveshtiwari3072@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91-6393145901</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <a href="https://www.linkedin.com/in/anveshtiwari28/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/anveshtiwari28</a>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <a href="https://github.com/Anvesh-3" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/Anvesh-3</a>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Education</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg">Bachelor of Technology - Computer Science and Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lovely Professional University, Punjab</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CGPA: 6.00 • Since August 2022</p>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg">Intermediate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sir Padampat Singhania Education Centre, Kanpur</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Percentage: 91% • April 2020 - March 2021</p>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg">Matriculation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sir Padampat Singhania Education Centre, Kanpur</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Percentage: 89% • April 2019 - March 2020</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Achievements & Certifications</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>Secured Global Rank 783rd among 21k+ participants in Leetcode Biweekly Contest 96 (Jan 2024)</li>
                <li>Protocol Officer in ONE World ONE INDIA - Coordinated with AIU among 30+ Universities (Mar 2024)</li>
                <li>Coordinator in Youth Vibe - Inter university fest (Apr 2024)</li>
                <li>Complete Interview Preparation - Self-Paced (GFG) by GFG (Jun 2024)</li>
                <li>Databases and SQL for Data Science with Python (Feb 2025)</li>
                <li>Computer Networking (May 2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
