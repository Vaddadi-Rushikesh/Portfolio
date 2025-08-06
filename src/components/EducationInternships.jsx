import React from 'react';

// Education Section Component
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Data Analytics and Machine Learning",
      institution: "Indian Institute of Technology (IIT)",
      duration: "2021 - 2025",
      grade: "CGPA: 8.5/10",
      description: "Specialized in machine learning algorithms, data visualization, and statistical analysis. Relevant coursework: Data Structures, Database Management, AI/ML, Statistics."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Delhi Public School",
      duration: "2019 - 2021",
      grade: "92.5%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science. Achieved distinction in Mathematics and Computer Science."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "St. Xavier's High School",
      duration: "2017 - 2019",
      grade: "95.2%",
      description: "All-rounder with excellence in academics and extracurricular activities. School topper in Mathematics and Science subjects."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
        <p className="text-gray-400 mb-12">
          My academic journey and qualifications that shaped my technical foundation.
        </p>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-blue-400 mb-2">{edu.institution}</h4>
                  <p className="text-gray-300 mb-3">{edu.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm bg-gray-700 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                  <p className="text-green-400 font-semibold mt-2">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internship Section Component
const Internships = () => {
  const internshipData = [
    {
      role: "Full Stack Developer Intern",
      company: "TechCorp Solutions Pvt Ltd",
      duration: "Jun 2024 - Aug 2024",
      location: "Bangalore, India",
      type: "Remote",
      description: "Developed responsive web applications using React.js and Node.js. Implemented RESTful APIs and optimized database queries, resulting in 40% improved performance.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      achievements: [
        "Built 3 full-stack web applications",
        "Reduced API response time by 40%",
        "Collaborated with 5-member development team"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "DataInsights Analytics",
      duration: "Dec 2023 - Feb 2024",
      location: "Mumbai, India",
      type: "Hybrid",
      description: "Analyzed large datasets using Python and SQL to derive business insights. Created interactive dashboards and automated reporting processes for stakeholders.",
      technologies: ["Python", "SQL", "Tableau", "Pandas", "NumPy"],
      achievements: [
        "Processed 1M+ data records daily",
        "Created 15+ interactive dashboards",
        "Automated 80% of manual reporting tasks"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "StartupXYZ",
      duration: "Jun 2023 - Aug 2023",
      location: "Delhi, India",
      type: "On-site",
      description: "Designed and developed user interfaces for mobile and web applications. Worked closely with UX team to implement pixel-perfect designs and ensure optimal user experience.",
      technologies: ["React", "JavaScript", "CSS3", "Figma", "Git"],
      achievements: [
        "Improved UI loading speed by 35%",
        "Developed 20+ reusable components",
        "Maintained 99% design accuracy"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Internship Experience</h2>
        <p className="text-gray-400 mb-12">
          Professional experiences that enhanced my practical skills and industry knowledge.
        </p>
        
        <div className="space-y-8">
          {internshipData.map((internship, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{internship.role}</h3>
                    <span className="text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {internship.type}
                    </span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-2">{internship.company}</h4>
                  <p className="text-gray-300 mb-4">{internship.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-right mt-4 lg:mt-0 lg:ml-6">
                  <span className="text-gray-400 text-sm bg-gray-800 px-3 py-1 rounded-full block mb-2">
                    {internship.duration}
                  </span>
                  <p className="text-gray-500 text-sm">{internship.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export both components
export { Education, Internships };
