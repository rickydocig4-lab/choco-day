
import React, { useState } from 'react';
// Fix: Added AnimatePresence to imports
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const Slide4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <motion.div
        className="mb-12 cursor-pointer relative"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-white/10 p-10 rounded-3xl border-2 border-dashed border-pink-300/50 relative overflow-hidden group"
            >
              <Gift size={80} className="text-pink-300 group-hover:text-pink-100 transition-colors" />
              <div className="mt-4 text-pink-200 text-sm uppercase tracking-tighter">Tap to open Smriti's gift</div>
              <motion.div 
                className="absolute inset-0 bg-pink-400/5"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="flex flex-col items-center"
            >
              <div className="text-8xl mb-4">💍💖</div>
              <div className="absolute -top-10 -right-10 text-4xl">🌹</div>
              <div className="absolute -bottom-10 -left-10 text-4xl">🌹</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="space-y-6">
        <motion.h3 
          className="text-3xl font-serif text-pink-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          A Promise Wrapped in Chocolate
        </motion.h3>

        <motion.p 
          className="text-lg md:text-xl text-pink-200/90 leading-relaxed italic"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          “I may not give you chocolates every day… <br />
          but I promise to give you <span className="text-white font-bold">love, care & loyalty</span> forever 💍💖”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-cursive text-pink-400"
        >
          You are my always, Smriti 🌸
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;
