import React from 'react';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  return (
    <div className="glass-card p-12 md:p-20 rounded-[4rem] text-center space-y-12 max-w-2xl w-full relative overflow-hidden">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="text-8xl filter drop-shadow-xl"
      >
        🍫❤️
      </motion.div>

      <div className="space-y-8 relative z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-serif font-bold text-pink-50"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy <br /> 
          <span className="font-cursive text-pink-400 text-glow">Chocolate Day</span>
        </motion.h1>

        <motion.div 
          className="space-y-4 text-2xl md:text-3xl text-pink-200/90 font-cursive italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>“To the girl who is the sweet to my heart and the joy to my life.”</p>
          <p className="text-pink-300 font-bold not-italic mt-4 text-4xl">I love you, Smriti!</p>
        </motion.div>
      </div>

      <motion.div
        className="pt-10 border-t border-white/10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm font-serif tracking-[0.2em] uppercase text-pink-200/60">
          Happy Celebrations • <span className="text-white font-bold ml-1">Always Yours 💌</span>
        </p>
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>🥂</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>🌹</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>🍫</motion.span>
        </div>
      </motion.div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0" />
    </div>
  );
};

export default Slide5;