import React from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Study Abroad in Spain',
      description: 'SpainStudy.jp is a study abroad agency specializing in Spanish-speaking countries.',
      tech: ['PHP', 'wordpress', 'Firebase', 'Tailwind CSS'],
      image: "../dist/assets/journey-web.png",
      playStore: 'https://spainryugaku.jp/',
      github: '#'
    },
    {
      title: 'FitTracker Pro',
      description: 'A comprehensive fitness tracking app with social features, workout planning, and progress analytics.',
      tech: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
     
      playStore: '#',
      github: '#'
    },
    {
      title: 'Placed dashboard',
      description: 'Juggling between google forms, drive links and excel sheets, our university placement department was getting drowned with unnecessary decentralized document work. ',
      tech: ['Flutter', 'ARCore', 'Node.js', 'MongoDB'],
      image: "../dist/assets/dashbord-app.png",
      
      playStore: 'https://prithvirajkapil.framer.website/',
      github: '#'
    },
    {
      title: 'Healthcare App',
      description: 'Saiseikai Kumamoto Hospital Preventive Medicine Center offers cutting-edge preventive medicine tailored to each individual, including comprehensive medical checkups, specialized medical checkups, and optional testing.',
      tech: ['React.js', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      image: "../dist/assets/healthcare-app.png",
      playStore: 'https://sk-kenshin.jp/',
      github: '#'
    },
    {
      title: 'MindfulMoments',
      description: 'Meditation and mindfulness app with guided sessions, habit tracking, and mood analytics.',
      tech: ['Swift', 'Core Data', 'HealthKit', 'CloudKit'],
      image: 'https://images.pexels.com/photos/3820295/pexels-photo-3820295.jpeg?auto=compress&cs=tinysrgb&w=600',
      playStore: '#',
      github: '#'
    },
    {
      title: 'TaskFlow',
      description: 'Project management app for teams with real-time collaboration and intuitive task organization.',
      tech: ['Kotlin', 'Room', 'Retrofit', 'Material Design'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      playStore: '#',
      github: '#'
    },
    {
      title: 'Katada Electric Co., Ltd. | A global EMS company',
      description: 'Katada Electric is an EMS company that can provide one-stop contract manufacturing of electronic devices, from development, design, to mass production. ',
      tech: ['Next.js', 'Django', 'Tailwind CSS', 'TypeScript', 'Firebase'],
      image: "../dist/assets/techService_web.png",
      
      playStore: 'https://www.katata.co.jp/',
      github: '#'
    },
    {
      title: 'FoodieFinds',
      description: 'Restaurant discovery app with AR menu scanning, reviews, and personalized recommendations.',
      tech: ['Flutter', 'ARCore', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
 
      playStore: '#',
      github: '#'
    },
   
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Various applications I've built that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* {project.appStore && (
                    <a
                      href={project.appStore}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    >
                      <Smartphone size={16} />
                      <span className="text-sm">App Store</span>
                    </a>
                  )} */}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
                    >
                      <Smartphone size={16} />
                      <span className="text-sm">Play Store</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;