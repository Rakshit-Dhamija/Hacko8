import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DevfolioButton from './DevfolioButton';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(2025, 3, 19, 0, 0, 0);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const numberVariants = {
    initial: { scale: 1 },
    update: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.3
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="mt-5`-- mb-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.h2 
        className="text-white text-center text-2xl mb-6 relative"
        variants={itemVariants}
      >
        HackO Starts In
      </motion.h2>
      <div className="grid grid-cols-4 gap-4 text-white relative max-w-4xl mx-auto px-4">
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HOURS' },
          { value: timeLeft.minutes, label: 'MINUTES' },
          { value: timeLeft.seconds, label: 'SECONDS' }
        ].map((item) => (
          <motion.div 
            key={item.label}
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="text-xl md:text-3xl lg:text-5xl text-center font-bold bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-2 w-full shadow-lg border border-white/10"
              initial="initial"
              animate="update"
              variants={numberVariants}
              key={item.value}
            >
              <motion.span
                initial={{ y: 20, opacity: 0  }}
                animate={{ y: 0, opacity: 1 }}
                key={item.value}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
            </motion.div>
            <motion.div 
              className="text-sm text-center mt-2 text-gray-300 font-semibold"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="flex justify-center gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
      </motion.div>
    </motion.div>
  );
}