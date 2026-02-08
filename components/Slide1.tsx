import React from 'react';
import { motion } from 'framer-motion';

const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-10 px-6 max-w-2xl">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.2 }}
        className="relative"
      >
        <div className="text-[120px] leading-none filter drop-shadow-[0_0_30px_rgba(244,143,177,0.5)]">💝</div>
        <motion.div 
          className="absolute inset-0 bg-pink-400/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      <div className="space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold text-pink-50 leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Happy <br />
          <span className="font-cursive text-pink-400 text-glow">Chocolate Day</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-[2px] w-40 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto"
        />

        <motion.p 
          className="text-xl md:text-2xl text-pink-100/90 font-cursive italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          To my favorite person, <span className="font-bold text-pink-300 not-italic">Smriti</span>.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="pt-4 flex items-center justify-center gap-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
        <span className="text-pink-200/40 uppercase tracking-[0.3em] text-[10px] font-semibold">Swipe to explore sweetness</span>
        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
      </motion.div>
    </div>
  );
};

export default Slide1;