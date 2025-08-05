import React from 'react';

const BackToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-teal text-white rounded-full shadow-lg transition-all ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;