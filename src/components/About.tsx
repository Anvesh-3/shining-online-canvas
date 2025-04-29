
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate web developer and designer with a strong focus on creating 
                clean, intuitive, and user-friendly websites and applications.
              </p>
              <p>
                With over X years of experience in the industry, I've developed a keen eye for 
                detail and a deep understanding of what makes a website both functional and 
                aesthetically pleasing.
              </p>
              <p>
                My approach combines creative problem-solving with technical expertise to 
                deliver solutions that not only look great but also perform exceptionally.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-1">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Science</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-1">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">X+ Years in Web Development</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Your City, Country</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-1">Languages</h3>
                <p className="text-gray-600 dark:text-gray-400">English, Other Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
