import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const StarshipAnimation = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [xValues, setXValues] = useState(Array(101).fill('0%'));
  const [yValues, setYValues] = useState(Array(101).fill('0%'));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Change the offset for the scroll range
  });

  // Exponential acceleration of scroll progress for even faster perceived motion
  const acceleratedProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1], // Input range
    [0, 0.4, 0.7, 0.9, 1]  // Output range - accelerates in the middle
  );

  // Add smooth spring motion with higher stiffness for more responsive movement
  const smoothProgress = useSpring(acceleratedProgress, { 
    stiffness: 120, 
    damping: 25
  });

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const steps = 100;
      const xVals = [];
      const yVals = [];
      
      const pathBounds = pathRef.current.getBBox();
      
      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        const point = pathRef.current.getPointAtLength(progress * length);
        
        const x = ((point.x - pathBounds.x) / pathBounds.width) * 100 + '%';
        const y = ((point.y - pathBounds.y) / pathBounds.height) * 100 + '%';
        
        xVals.push(x);
        yVals.push(y);
      }
      setXValues(xVals);
      setYValues(yVals);
    }
  }, []);

  const progressSteps = Array.from({ length: 101 }, (_, i) => i / 100);

  // Path animation with correct progress
  const xPosition = useTransform(smoothProgress, progressSteps, xValues);
  const yPosition = useTransform(smoothProgress, progressSteps, yValues);
  
  // More dramatic rotation for faster perceived motion
  const rotation = useTransform(
    smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [0, 45, -25, 60, -15, 20]
  );

  // Trail elements with improved fire effect and shorter delay for tighter trail
  const trailElements = Array.from({ length: 25 }).map((_, i) => {
    const trailDelay = i * 0.015; // Reduced delay for tighter trail during fast movement
    const trailProgress = useTransform(
      smoothProgress, 
      value => Math.max(0, value - trailDelay)
    );
    
    const trailX = useTransform(trailProgress, progressSteps, xValues);
    const trailY = useTransform(trailProgress, progressSteps, yValues);
    
    const sizeVariation = Math.sin(i * 0.5) * 2;
    const coreSize = Math.max(3, (12 - i * 0.35) + sizeVariation);
    const coreOpacity = Math.min(1, 0.9 - i * 0.03);
    const glowSize = Math.max(5, (20 - i * 0.3) + sizeVariation * 1.5);
    const glowOpacity = Math.min(0.8, 0.7 - i * 0.025);
    const coreColor = i < 5 ? 
      `rgba(255, 255, 255, ${coreOpacity})` : 
      `rgba(255, ${165 + Math.min(90, i * 4)}, 0, ${coreOpacity})`;
    
    return (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: trailX,
          top: trailY,
          transform: 'translate(-50%, -50%)',
          zIndex: 15 - i,
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: coreSize,
            height: coreSize,
            background: `radial-gradient(circle, ${coreColor} 0%, rgba(255, 165, 0, ${coreOpacity * 0.8}) 50%, transparent 80%)`,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${1 + i * 0.1}px)`,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: glowSize,
            height: glowSize,
            background: `radial-gradient(circle, rgba(255, 69, 0, ${glowOpacity}) 0%, rgba(255, 0, 0, ${glowOpacity * 0.6}) 60%, transparent 80%)`,
            transform: 'translate(-50%, -50%)',
            filter: `blur(${2 + i * 0.15}px)`,
          }}
        />
        {i < 12 && Array.from({ length: Math.max(1, 3 - Math.floor(i/4)) }).map((_, j) => (
          <div
            key={j}
            className="absolute rounded-full"
            style={{
              width: 1 + Math.random() * 3,
              height: 1 + Math.random() * 3,
              backgroundColor: j % 2 === 0 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 200, 0, 0.8)',
              left: (Math.random() * 14 - 7) + (Math.sin(i + j) * 3),
              top: (Math.random() * 14 - 7) + (Math.cos(i + j) * 3),
              filter: 'blur(0.5px)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </motion.div>
    );
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] bg-slate-900 flex items-center justify-center overflow-hidden" // Reduced height to 100vh for faster effect
      id="starship-test"
    >
      <h2 className="text-center text-3xl font-bold text-white absolute top-5 w-full z-30">
        Starship Animation Test
      </h2>

      {/* Updated path to match the image */}
      <svg className="absolute opacity-0 pointer-events-none" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M10,10 C100,150 300,100 250,250 C200,400 100,350 300,450 C500,550 700,450 900,800"
          fill="none"
          stroke="rgba(255,255,255,0.01)"
          strokeWidth="1"
        />
      </svg>

      {trailElements}

      <motion.img
        src="/spaceship.png"
        alt="Spacecraft"
        className="absolute h-32 w-auto object-contain"
        style={{
          left: xPosition,
          top: yPosition,
          rotate: rotation,
          scale: useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1.6, 0.9]), // More dramatic scaling
          filter: "drop-shadow(0 0 15px rgba(255,165,0,0.7))",
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
        }}
      />

      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
      }}></div>
    </section>
  );
};

export default StarshipAnimation;
