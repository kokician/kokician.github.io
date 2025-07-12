import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/kokician" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/koketso-lepulana-053431202/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kokilepulana@gmail.com" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;