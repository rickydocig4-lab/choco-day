
import React from 'react';
import { motion } from 'framer-motion';

const Slide2: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="grid grid-cols-2 gap-4 mb-8">
        {['🍫', '🍩', '🍪', '🍨'].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 * i, type: 'spring' }}
            className="text-5xl bg-brown-900/20 p-4 rounded-2xl"
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-serif text-pink-100">
          There are many chocolates in this world...
        </h2>
        <div className="h-px w-24 bg-pink-300/30 mx-auto" />
        <p className="text-2xl font-cursive text-pink-400">
          “But you, <span className="font-bold underline decoration-pink-300/50">Smriti</span>, are my favorite flavor forever 😘🍩”
        </p>
        <p className="text-lg text-pink-100/70 tracking-widest uppercase">
          Sweet • Soft • Irresistible 💕
        </p>
      </motion.div>

      <motion.div 
        className="mt-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-4xl">🍫😍</div>
      </motion.div>
    </div>
  );
};

export default Slide2;
