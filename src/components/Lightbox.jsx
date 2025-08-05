import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    // Add event listener for keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    // Prevent scrolling on the body when the lightbox is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Re-enable scrolling and remove the event listener when the component unmounts
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const currentImage = images[currentIndex];

  // Handler to close the lightbox if the click is on the backdrop
  const handleBackdropClick = (e) => {
    if (e.target.id === 'lightbox') {
      onClose();
    }
  };

  return (
    <div
      id="lightbox"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick} // Attach the new click handler
    >
      <div className="relative max-w-6xl w-full text-center rounded-lg overflow-hidden">
        {/* Close button with an X icon */}
        <button
          id="close-lightbox"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl hover:text-teal transition"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between absolute inset-y-0 left-0 right-0 px-4">
          <button
            id="prev-btn"
            onClick={onPrev}
            className="text-white text-2xl bg-black/50 rounded-full p-4 hover:bg-teal"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            id="next-btn"
            onClick={onNext}
            className="text-white text-2xl bg-black/50 rounded-full p-4 hover:bg-teal"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* The image and its caption */}
        <img
          id="lightbox-img"
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full max-h-[80vh] object-contain mx-auto"
        />
        <p id="lightbox-caption" className="text-white text-center mt-4">
          {currentImage.alt}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
