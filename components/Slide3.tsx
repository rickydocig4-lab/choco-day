
import React from 'react';
import { motion } from 'framer-motion';

const Slide3: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center relative">
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center opacity-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px]" />
      </motion.div>

      <div className="z-10 space-y-12">
        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-pink-400/0 via-pink-400 to-transparent rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-7xl font-cursive text-pink-200"
          >
            My heart melts...
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-pink-100 font-light max-w-lg">
            “When I think of you, it just happens... <br /> 
            just like <span className="text-pink-400 font-semibold italic">chocolate in warm hands</span> 🤎🥹”
          </p>
          <p className="text-lg text-pink-300 font-serif italic">
            Thank you for being my comfort, my smile, my everything 💞
          </p>
        </motion.div>

        <motion.div 
          className="text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🫠✨
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;
