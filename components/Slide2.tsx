import React from 'react';
import { motion } from 'framer-motion';

const Slide2: React.FC = () => {
  const chocolates = [
    { label: 'Dark', emoji: '🍫', color: 'bg-[#3E2723]' },
    { label: 'Milk', emoji: '🥛', color: 'bg-[#5D4037]' },
    { label: 'White', emoji: '🍦', color: 'bg-[#D7CCC8]' },
    { label: 'Smriti', emoji: '💖', color: 'bg-[#F06292]' }
  ];

  return (
    <div className="glass-card p-10 md:p-16 rounded-[3rem] w-full max-w-xl text-center space-y-10">
      <div className="grid grid-cols-2 gap-6">
        {chocolates.map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
            className={`${item.color} p-6 rounded-3xl shadow-xl border border-white/5 flex flex-col items-center gap-2 group transition-all hover:scale-105`}
          >
            <span className="text-4xl group-hover:scale-110 transition-transform">{item.emoji}</span>
            <span className="text-xs uppercase tracking-widest text-white/60 font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-serif text-pink-50 leading-snug">
          The world has many <br />delightful treats...
        </h2>
        <div className="h-px w-20 bg-pink-300/20 mx-auto" />
        <p className="text-3xl md:text-4xl font-cursive text-pink-400">
          “But you are my <span className="font-bold underline decoration-pink-300/30">absolute favorite</span> forever”
        </p>
        <p className="text-[10px] text-pink-100/40 tracking-[0.4em] uppercase font-bold">
          Sweeter than any silk • Smriti
        </p>
      </motion.div>
    </div>
  );
};

export default Slide2;