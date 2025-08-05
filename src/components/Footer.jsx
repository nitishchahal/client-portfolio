import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-teal">Nitish Choudhary</a>
            <p className="mt-2 text-gray-300">Creating digital experiences that inspire.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#home" className="hover:text-teal transition">Home</a>
              <a href="#about" className="hover:text-teal transition">About</a>
              <a href="#portfolio" className="hover:text-teal transition">Portfolio</a>
              <a href="#contact" className="hover:text-teal transition">Contact</a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2022 Nitish Choudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;