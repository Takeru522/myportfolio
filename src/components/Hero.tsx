import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Thomas Takeru 
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
            Full Stack Developer | Mobile Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional mobile experiences with 6 years of expertise in iOS and Android development. 
            Passionate about clean code, user-centric design, and innovative solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:takeru@example.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-200">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;