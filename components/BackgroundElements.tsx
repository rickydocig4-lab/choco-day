import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  const hearts = Array.from({ length: 15 });
  const chocolates = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ 
            opacity: 0, 
            y: "100vh", 
            x: `${Math.random() * 100}vw`,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: "-10vh",
            rotate: 360,
            transition: { 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }
          }}
          className="absolute text-pink-300/40"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Chocolate Emoji Icons */}
      {chocolates.map((_, i) => (
        <motion.div
          key={`choc-${i}`}
          initial={{ 
            opacity: 0, 
            y: "-10vh", 
            x: `${Math.random() * 100}vw`,
            rotate: Math.random() * 360
          }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: "110vh",
            rotate: i % 2 === 0 ? 360 : -360,
            transition: { 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }
          }}
          className="absolute text-3xl filter drop-shadow-lg"
        >
          {i % 2 === 0 ? '🍫' : '🍩'}
        </motion.div>
      ))}

      {/* Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/15 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-900/20 blur-[100px] rounded-full" />
    </div>
  );
};

export default BackgroundElements;