import React from 'react';
import { motion } from 'framer-motion';

const Slide3: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center relative w-full px-4">
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px]" />
      </motion.div>

      <div className="z-10 space-y-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-8xl"
        >
          🫠
        </motion.div>

        <div className="relative py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-5xl md:text-7xl font-cursive text-pink-200 text-glow"
          >
            My heart melts...
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl text-pink-50 font-light leading-relaxed">
            Every time you smile, <br /> 
            it's like <span className="text-pink-400 font-cursive text-4xl">pure chocolate</span> <br /> 
            warming my soul 🤎
          </p>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent mx-auto" />
          
          <p className="text-lg text-pink-300 font-serif italic tracking-wide">
            Smriti, you are the warmth I always crave.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;