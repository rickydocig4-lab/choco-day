
import React from 'react';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-12 bg-brown-900/40 p-10 rounded-[4rem] border border-white/5 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100,
          delay: 0.2
        }}
        className="text-7xl"
      >
        🍫❤️
      </motion.div>

      <div className="space-y-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-serif font-bold text-pink-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy Chocolate Day, <br />
          <span className="text-pink-400 italic">my love</span>
        </motion.h1>

        <motion.div 
          className="space-y-2 text-xl md:text-2xl text-pink-200/80 font-cursive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>“Stay sweet, stay mine, stay forever 💕🥹”</p>
        </motion.div>
      </div>

      <motion.div
        className="pt-8 border-t border-white/10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-lg font-serif italic text-pink-300">
          With all my heart — <span className="text-white font-bold ml-1">Yours 💌</span>
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <span className="animate-bounce">🎉</span>
          <span className="animate-bounce delay-100">💝</span>
          <span className="animate-bounce delay-200">🎉</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 right-10 text-pink-400 opacity-20 rotate-12"
        animate={{ rotate: [12, 15, 12] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Slide5;
