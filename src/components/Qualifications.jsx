import React from 'react';

const Qualifications = () => {
  const experienceData = [
    {
      company: "HearingZen",
      role: "Frontend Developer",
      description: "(In collaboration with React, Bootstrap, Node.js and RestAPI)",
      duration: "Sept 2025 - Nov 2025"
    },
    {
      company: "Web Developer Intern, Teachnook ",
      role: "Web Developer",
      description: "(In collaboration with React, Node.js, MongoDB)",
      duration: "June 2024 - July 2024"
    },
    {
      company: " Prodigy Infotech",
      role: "Web Developer",
      description: "",
      duration: "May 2024"
    },
    {
      company: " Codsoft",
      role: "Web Developer",
      description: "",
      duration: "May 2024"
    },
    // {
    //   company: "StartupXYZ (Delhi, India)",
    //   role: "Frontend Developer",
    //   description: "",
    //   duration: "June 2023 - August 2023"
    // },
    // {
    //   company: "WebTech Solutions (Pune, Maharashtra)",
    //   role: "Web Developer Intern",
    //   description: "",
    //   duration: "March 2023 - May 2023"
    // },
    // {
    //   company: "DevCorp Technologies (Chennai, Tamil Nadu)",
    //   role: "Software Developer Intern",
    //   description: "",
    //   duration: "January 2023 - March 2023"
    // }
  ];

  const educationData = [
    {
      institution: "Centurion University of Technology and Management, Parlakhemundi",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - Present",
      marks: "CGPA - 9.37 Contd."
    },
    {
      institution: "SKCG Higher Secondary School, Paralakhemundi ",
      degree: "+2 Science",
      duration: "2020 - 2022",
      marks: "Achieved - 81%"
    },
    {
      institution: "Sri Jagannath High School, Sidhamadanga",
      degree: "10th",
      duration: "2020",
      marks: "Achieved - 68% "
    }
  ];

  return (
    <section id="qualifications" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">My Odyssey</p> */}
          <h1 className="headline-2">Qualifications</h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-sky-400 rounded mr-3 flex items-center justify-center">
                <span className="material-symbols-rounded text-zinc-900 text-[14px]">
                  work
                </span>
              </div>
              <h2 className="headline-2">Experience</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
              
              {experienceData.map((exp, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-6 h-6 bg-sky-400 rounded-full border-4 border-zinc-900 z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-12">
                    <h3 className="text-lg font-semibold text-zinc-50 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-zinc-300 mb-1">
                      {exp.role} {exp.description}
                    </p>
                    <div className="flex items-center text-sky-400 text-sm">
                      <span className="material-symbols-rounded text-[16px] mr-1">
                        calendar_month
                      </span>
                      {exp.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-sky-400 rounded mr-3 flex items-center justify-center">
                <span className="material-symbols-rounded text-zinc-900 text-[14px]">
                  school
                </span>
              </div>
              <h2 className="headline-2">Education</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
              
              {educationData.map((edu, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 w-6 h-6 bg-sky-400 rounded-full border-4 border-zinc-900 z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-12">
                    <h3 className="text-lg font-semibold text-zinc-50 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-zinc-300 mb-1">
                      {edu.degree}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-sky-400 text-sm">
                        <span className="material-symbols-rounded text-[16px] mr-1">
                          calendar_month
                        </span>
                        {edu.duration}
                      </div>
                      <div className="text-emerald-400 font-semibold text-sm">
                        {edu.marks}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;