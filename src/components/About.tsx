import React from 'react';
import { Code, Smartphone, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Mindset',
      description: 'Designing experiences that feel native and intuitive'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Leading cross-functional teams to deliver exceptional products'
    },
    {
      icon: <Award size={24} />,
      title: 'Continuous Learning',
      description: 'Staying ahead of the curve with latest technologies and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Full stack by skill. Mobile by passion. Driven by impact. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With 6 years of hands-on experience in full stack and mobile development, I've had the privilege of working 
              on diverse projects ranging from startup MVPs to enterprise-scale applications. My journey 
              began with a curiosity about how we interact with technology in our daily lives.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in creating seamless user experiences across iOS and Android platforms, 
              with expertise in React Native, Swift, Kotlin, and modern development practices. 
              My approach combines technical excellence with user empathy to deliver products that 
              users genuinely love.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring the latest design trends, contributing to 
              open-source projects, or mentoring junior developers in the community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200"
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;