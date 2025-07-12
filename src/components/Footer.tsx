import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400">
              Built with{' '}
              <Heart className="w-4 h-4 text-red-400 inline mx-1" />
            </span>
          </div>
          
          <div className="text-gray-400">
            © 2025 koketso lepulana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;