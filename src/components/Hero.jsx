import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    // Check if particlesJS is available before calling it
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        // Your particles.js configuration from the uploaded file
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#6BBAA7"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6BBAA7",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

    // Typing effect logic from your original main.js
    const text = "Nitish Choudhary";
    let i = 0;
    
    function typeWriter() {
      if (!typingTextRef.current) return;
      
      if (i < text.length) {
        typingTextRef.current.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    const timeoutId = setTimeout(typeWriter, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-navy dark:text-white">
          <span ref={typingTextRef}></span><span className="text-teal cursor-blink">|</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Creative Web Developer | Visual Storyteller
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#portfolio" className="px-8 py-3 bg-teal hover:bg-teal-600 text-white rounded-lg font-medium transition-all transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-medium transition-all transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-2xl text-gray-500 hover:text-teal"></i>
      </a>
    </section>
  );
};

export default Hero;
