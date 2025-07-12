import React from 'react';
import { ChevronDown, Zap, Brain, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-8">
          <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30 animate-bounce delay-0">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 animate-bounce delay-300">
            <Database className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-3 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 animate-bounce delay-700">
            <Zap className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-300">
          & AI Engineer
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting intelligent solutions that bridge the gap between cutting-edge AI technology 
          and seamless user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
            View My Work
          </button>
          <a 
            href="/public/Koketso-Lepulana-FlowCV-Resume-20250626 (1).pdf" 
            download="koketso.pdf"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 inline-block text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;