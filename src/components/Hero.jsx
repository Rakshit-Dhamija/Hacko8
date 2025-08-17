import React from 'react';
import { Countdown } from './Countdown';


// React.useEffect(() => {
//   const script = document.createElement('script');
//   script.src = 'https://apply.devfolio.co/v2/sdk.js';
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
  
// //   return () => {
// //     document.body.removeChild(script);
// //   };
// // }, []);


export function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          HACKOWASP 8.0
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join us for 24 hours of innovation, coding, and breakthrough solutions
        </p>
        <a
          href="#register"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Register Now
        </a>
        {/* <div 
          className="apply-button" 
          data-hackathon-slug={'hackowasp7'} 
          data-button-theme={'light'}
          style={{ height: '44px', width: '312px' }}
        ></div> */}
        <Countdown />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}