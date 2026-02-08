import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements: React.FC = () => {
  const hearts = Array.from({ length: 20 });
  const chocolates = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03]" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-amber-900/20 blur-[150px] rounded-full" />

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ 
            opacity: 0, 
            y: "110vh", 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.4 + 0.3,
            rotate: Math.random() * 360
          }}
          animate={{ 
            opacity: [0, 0.25, 0], 
            y: "-10vh",
            rotate: Math.random() > 0.5 ? 360 : -360,
            transition: { 
              duration: Math.random() * 12 + 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }
          }}
          className="absolute text-pink-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Chocolate Bits */}
      {chocolates.map((_, i) => (
        <motion.div
          key={`choc-${i}`}
          initial={{ 
            opacity: 0, 
            y: "-10vh", 
            x: `${Math.random() * 100}vw`,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.2, 0], 
            y: "110vh",
            rotate: i % 2 === 0 ? 180 : -180,
            transition: { 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }
          }}
          className="absolute text-2xl filter drop-shadow-md grayscale-[20%]"
        >
          {i % 3 === 0 ? '🍫' : i % 3 === 1 ? '🍩' : '🍬'}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundElements;