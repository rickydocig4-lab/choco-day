
import React from 'react';
import { motion } from 'framer-motion';

const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="text-8xl mb-4 filter drop-shadow-lg">🍫</div>
        <motion.div 
          className="absolute inset-0 bg-pink-400/20 blur-2xl rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <div className="space-y-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-serif font-bold text-pink-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy Chocolate Day, <br />
          <span className="font-cursive text-pink-400 inline-block heartbeat mt-2">Smriti 💖</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-pink-100/80 max-w-md mx-auto leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          “Just like chocolate, you make my life <br /> 
          <span className="italic font-semibold text-pink-300">sweeter every single day 🥰✨</span>”
        </motion.p>
      </div>

      <motion.div
        className="mt-8 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-pink-400" />
        <span className="w-2 h-2 rounded-full bg-pink-300" />
        <span className="w-2 h-2 rounded-full bg-pink-200" />
      </motion.div>
    </div>
  );
};

export default Slide1;
