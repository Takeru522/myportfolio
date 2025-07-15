import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  GitBranch,
  Code,
  Zap,
  Shield,
  Palette,
  Layers,
  Cpu,
  Cloud,
  Rocket,
  Terminal,
  Box,
  GitCommit,
  Activity,
  Settings,
  Monitor,
  Smartphone as Mobile
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: <Cpu className="w-7 h-7" /> },
        { name: 'JavaScript', level: 95, icon: <Code className="w-7 h-7" /> },
        { name: 'TypeScript', level: 92, icon: <Shield className="w-7 h-7" /> },
        { name: 'Dart', level: 88, icon: <Zap className="w-7 h-7" /> }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 95, icon: <Code className="w-7 h-7" /> },
        { name: 'Next.js', level: 90, icon: <Globe className="w-7 h-7" /> },
        { name: 'Vue.js', level: 88, icon: <Palette className="w-7 h-7" /> },
        { name: 'Tailwind CSS', level: 92, icon: <Layers className="w-7 h-7" /> }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 92, icon: <Terminal className="w-7 h-7" /> },
        { name: 'Express.js', level: 90, icon: <Box className="w-7 h-7" /> },
        { name: 'Django', level: 88, icon: <Server className="w-7 h-7" /> },
        { name: 'GraphQL', level: 85, icon: <GitBranch className="w-7 h-7" /> }
      ]
    },
    {
      title: 'Mobile App Development',
      skills: [
        { name: 'React Native', level: 90, icon: <Mobile className="w-7 h-7" /> },
        { name: 'Flutter', level: 88, icon: <Zap className="w-7 h-7" /> },
        { name: 'iOS', level: 85, icon: <Smartphone className="w-7 h-7" /> },
        { name: 'Android', level: 82, icon: <Smartphone className="w-7 h-7" /> }
      ]
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'PostgreSQL', level: 92, icon: <Database className="w-7 h-7" /> },
        { name: 'MySQL', level: 90, icon: <Database className="w-7 h-7" /> },
        { name: 'MongoDB', level: 88, icon: <Database className="w-7 h-7" /> },
        { name: 'Firebase', level: 85, icon: <Cloud className="w-7 h-7" /> }
      ]
    },
    {
      title: 'DevOps/VCS',
      skills: [
        { name: 'GitHub', level: 95, icon: <GitCommit className="w-7 h-7" /> },
        { name: 'Docker', level: 88, icon: <Box className="w-7 h-7" /> },
        { name: 'AWS', level: 85, icon: <Cloud className="w-7 h-7" /> },
        { name: 'CI/CD', level: 82, icon: <Rocket className="w-7 h-7" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-600 rounded-lg p-3 hover:bg-gray-500 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-blue-400 flex-shrink-0">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;