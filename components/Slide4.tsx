import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slide4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 max-w-lg mx-auto">
      <motion.div
        className="mb-14 cursor-pointer relative z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
              className="glass-card p-12 rounded-[2.5rem] border-pink-300/30 group"
            >
              <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
              <p className="text-pink-300 text-xs uppercase tracking-[0.3em] font-bold">Tap to open, Smriti</p>
              <motion.div 
                className="absolute inset-0 bg-pink-400/10 blur-xl rounded-full -z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 10 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-[120px] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">💍</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-pink-100 font-cursive text-3xl"
              >
                A piece of my heart...
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="space-y-6">
        <motion.h3 
          className="text-3xl font-serif font-bold text-pink-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sweet Promises
        </motion.h3>

        <motion.p 
          className="text-xl text-pink-100/80 leading-relaxed font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          “I may not be able to buy all the <br /> 
          chocolates in the world for you... <br />
          but I promise to give you <span className="text-pink-400 font-bold underline decoration-pink-300/50">all my love</span> forever.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-cursive text-pink-300 italic"
        >
          Yours, always 🌸
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;