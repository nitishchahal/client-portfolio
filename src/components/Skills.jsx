import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-navy dark:text-gold">Professional Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <i className="fas fa-code text-3xl text-teal mb-3"></i>
          <h3 className="text-xl font-semibold mb-1">Web Development</h3>
          <p>HTML, CSS, JavaScript, Tailwind CSS, React, Node.js</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <i className="fas fa-video text-3xl text-teal mb-3"></i>
          <h3 className="text-xl font-semibold mb-1">Videography & Editing</h3>
          <p>Adobe Premiere Pro, CapCut, Color Grading, Reels Editing</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <i className="fas fa-camera text-3xl text-teal mb-3"></i>
          <h3 className="text-xl font-semibold mb-1">Photography</h3>
          <p>Event Photography, Portraits, Candid Shots, Album Design</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition">
          <i className="fas fa-database text-3xl text-teal mb-3"></i>
          <h3 className="text-xl font-semibold mb-1">Data Entry & Excel</h3>
          <p>Accurate typing, formatting, spreadsheet formulas, PDF to Excel</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;