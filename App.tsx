import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Volume2, VolumeX, ChevronRight, ChevronLeft, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Background Elements Component ---
const BackgroundElements: React.FC = () => {
  const hearts = Array.from({ length: 15 });
  const chocolates = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ 
            opacity: 0, 
            y: "100vh", 
            x: `${Math.random() * 100}vw`,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            y: "-10vh",
            rotate: 360,
            transition: { 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }
          }}
          className="absolute text-pink-300/40"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Chocolate Emoji Icons */}
      {chocolates.map((_, i) => (
        <motion.div
          key={`choc-${i}`}
          initial={{ 
            opacity: 0, 
            y: "-10vh", 
            x: `${Math.random() * 100}vw`,
            rotate: Math.random() * 360
          }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: "110vh",
            rotate: i % 2 === 0 ? 360 : -360,
            transition: { 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }
          }}
          className="absolute text-3xl filter drop-shadow-lg"
        >
          {i % 2 === 0 ? '🍫' : '🍩'}
        </motion.div>
      ))}

      {/* Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/15 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-900/20 blur-[100px] rounded-full" />
    </div>
  );
};

// --- Slide Components ---

const Slide1: React.FC = () => (
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

const Slide2: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden w-full max-w-lg mx-auto">
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

const Slide3: React.FC = () => (
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

const Slide5: React.FC = () => (
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
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const slides = [
    <Slide1 key="s1" />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (currentSlide === 4) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-chocolate-gradient flex flex-col items-center justify-center text-white">
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3" 
      />
      
      <BackgroundElements />

      <div className="absolute top-6 right-6 z-50 flex gap-4">
        <button 
          onClick={toggleMusic}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-pink-200 shadow-xl"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 flex items-center gap-8 z-50">
        <button
          onClick={prevSlide}
          className={`p-4 rounded-full transition-all ${currentSlide === 0 ? 'opacity-0 scale-0 pointer-events-none' : 'bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg cursor-pointer'}`}
        >
          <ChevronLeft className="text-pink-100" />
        </button>

        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-pink-400' : 'w-2 bg-pink-200/30'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={`p-4 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'opacity-0 scale-0 pointer-events-none' : 'bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg cursor-pointer'}`}
        >
          <ChevronRight className="text-pink-100" />
        </button>
      </div>

      {!isPlaying && currentSlide === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-28 text-pink-200/60 text-sm flex items-center gap-2 font-medium"
        >
          <Music size={14} /> Tap the music icon for Smriti 💖
        </motion.div>
      )}
    </div>
  );
};

export default App;