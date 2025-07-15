import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'FPT Software',
      location: 'Hanoi, Vietnam',
      period: '2023 - Present',
      description: [
        'Spearheaded the development of a real-time analytics dashboard with React and Node.js, increasing reporting efficiency by 18%',
        'Mentored team of 4 junior developers and established code review processes',
        'Implemented CI/CD pipelines using GitHub Actions and Docker, improving deployment speed and reducing bugs in production'
      ]
    },
    {
      title: 'Mobile Developer / Full Stack Developer',
      company: 'LINE Corporation',
      location: 'Tokyo, Japan',
      period: '2020 - 2023',
      description: [
        'Developed multiple cross-platform mobile apps using React Native and Flutter with robust backend support via Firebase and Express',
        'Collaborated with UX/UI team to implement pixel-perfect designs',
        'Worked closely with designers and product managers to prototype and ship features in fast development cycles.',
        'Participated in agile development process and sprint planning'
      ]
    },
    {
      title: 'Junior Mobile Developer',
      company: 'Freelancing / Self-employed',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Maintained and enhanced internal tools built in Vue.js and Python (Flask/Django)',
        'Gained solid experience working in agile teams, participating in sprints, code reviews, and product planning sessions',
        'Contributed to codebase growth from 0 to 50K+ lines of code'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in Full Stack | Mobile development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-blue-400 mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-2 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;