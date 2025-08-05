import React, { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-navy/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-navy dark:text-teal">Nitish Choudhary</a>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link hover:text-teal">Home</a>
          <a href="#about" className="nav-link hover:text-teal">About</a>
          <a href="#portfolio" className="nav-link hover:text-teal">Portfolio</a>
          <a href="#gallery" className="nav-link hover:text-teal">Gallery</a>
          <a href="#contact" className="nav-link hover:text-teal">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button id="theme-toggle" onClick={toggleTheme} type="button"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Theme toggle">
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button id="mobile-menu-button" className="md:hidden p-2" onClick={handleMobileMenuClick}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-navy shadow-lg">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <a href="#home" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Home</a>
            <a href="#about" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>About</a>
            <a href="#portfolio" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Portfolio</a>
            <a href="#gallery" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Gallery</a>
            <a href="#contact" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;