import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Volume2, VolumeX, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Background Elements Component ---
const BackgroundElements: React.FC = () => {
  const hearts = useMemo(() => Array.from({ length: 15 }), []);
  const chocolates = useMemo(() => Array.from({ length: 10 }), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03]" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-amber-900/20 blur-[150px] rounded-full" />

      {/* Floating Hearts */}
      {hearts.map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ 
            opacity: 0, 
            y: "110vh", 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.4 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: "-10vh",
            rotate: Math.random() > 0.5 ? 360 : -360,
            transition: { 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }
          }}
          className="absolute text-pink-400/60"
        >
          <Heart fill="currentColor" size={24} />
        </motion.div>
      ))}

      {/* Floating Chocolate Bits */}
      {chocolates.map((_, i) => (
        <motion.div
          key={`choc-${i}`}
          initial={{ 
            opacity: 0, 
            y: "-10vh", 
            x: `${Math.random() * 100}vw`,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.7
          }}
          animate={{ 
            opacity: [0, 0.3, 0], 
            y: "110vh",
            rotate: i % 2 === 0 ? 180 : -180,
            transition: { 
              duration: Math.random() * 15 + 20, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }
          }}
          className="absolute text-2xl filter drop-shadow-md grayscale-[10%]"
        >
          {i % 3 === 0 ? '🍫' : i % 3 === 1 ? '🍩' : '🍬'}
        </motion.div>
      ))}
    </div>
  );
};

// --- Slide 1: Hero ---
const Slide1: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-10 px-6 max-w-2xl">
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.2 }}
      className="relative"
    >
      <div className="text-[100px] md:text-[140px] leading-none filter drop-shadow-[0_0_40px_rgba(244,143,177,0.6)]">💝</div>
      <motion.div 
        className="absolute inset-0 bg-pink-400/30 blur-3xl rounded-full -z-10"
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
        className="h-[2px] w-40 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto"
      />

      <motion.p 
        className="text-2xl md:text-3xl text-pink-100 font-cursive italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        To my favorite person, <span className="font-bold text-pink-400 not-italic">Smriti</span>.
      </motion.p>
    </div>
  </div>
);

// --- Slide 2: Comparison ---
const Slide2: React.FC = () => {
  const chocolates = [
    { label: 'Dark', emoji: '🍫', color: 'bg-[#3E2723]' },
    { label: 'Milk', emoji: '🥛', color: 'bg-[#5D4037]' },
    { label: 'White', emoji: '🍦', color: 'bg-[#D7CCC8]' },
    { label: 'Smriti', emoji: '💖', color: 'bg-[#F06292]' }
  ];

  return (
    <div className="glass-card p-8 md:p-16 rounded-[3rem] w-full max-w-xl text-center space-y-10">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {chocolates.map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
            className={`${item.color} p-4 md:p-6 rounded-3xl shadow-xl border border-white/10 flex flex-col items-center gap-2 group transition-all hover:scale-105`}
          >
            <span className="text-4xl group-hover:scale-110 transition-transform">{item.emoji}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 font-bold">{item.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-serif text-pink-50">Many treats in the world...</h2>
        <p className="text-3xl md:text-4xl font-cursive text-pink-400 leading-tight">
          “But you are my <span className="underline decoration-pink-300/30">absolute favorite</span> forever”
        </p>
      </div>
    </div>
  );
};

// --- Slide 3: Heart Melting ---
const Slide3: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-xl">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-9xl filter drop-shadow-[0_0_30px_rgba(244,143,177,0.4)]"
    >
      🫠
    </motion.div>
    <div className="space-y-8">
      <h2 className="text-5xl md:text-7xl font-cursive text-pink-200 text-glow">My heart melts...</h2>
      <p className="text-2xl md:text-3xl text-pink-50 font-light leading-relaxed">
        Every time you smile, <br /> 
        it's like <span className="text-pink-400 font-cursive text-4xl">pure chocolate</span> <br /> 
        warming my soul 🤎
      </p>
      <p className="text-lg text-pink-300/80 font-serif italic italic">
        Smriti, you are the warmth I always crave.
      </p>
    </div>
  </div>
);

// --- Slide 4: Interactive Gift ---
const Slide4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 max-w-lg">
      <motion.div
        className="mb-12 cursor-pointer relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              className="glass-card p-12 rounded-[2.5rem] border-pink-300/40 relative"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
            >
              <div className="text-8xl mb-4">🎁</div>
              <p className="text-pink-300 text-xs uppercase tracking-[0.3em] font-black">Tap to open, Smriti</p>
              <motion.div 
                className="absolute inset-0 bg-pink-400/20 blur-xl rounded-full -z-10"
                animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-[120px] filter drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">💍</div>
              <p className="text-pink-100 font-cursive text-3xl">A piece of my heart...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="space-y-4">
        <h3 className="text-2xl font-serif text-pink-50 font-bold">Sweet Promises</h3>
        <p className="text-xl text-pink-100/90 italic font-cursive">
          “I promise to give you <span className="text-pink-400 font-bold not-italic">all my love</span> forever.”
        </p>
      </div>
    </div>
  );
};

// --- Slide 5: Finale ---
const Slide5: React.FC = () => (
  <div className="glass-card p-10 md:p-20 rounded-[4rem] text-center space-y-12 max-w-2xl w-full">
    <div className="text-8xl">🍫❤️</div>
    <div className="space-y-6">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-pink-50">
        Happy <span className="font-cursive text-pink-400">Chocolate Day</span>
      </h1>
      <p className="text-2xl md:text-4xl font-cursive text-pink-300 font-bold">I love you, Smriti!</p>
      <p className="text-pink-100/60 font-serif italic text-lg">“To the girl who is the sweet to my heart.”</p>
    </div>
    <div className="pt-8 border-t border-white/10 flex justify-center gap-8">
      <span className="text-3xl">🌹</span>
      <span className="text-3xl">🍷</span>
      <span className="text-3xl">🍬</span>
    </div>
  </div>
);

// --- Main App Component ---
const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const slides = useMemo(() => [
    <Slide1 key="s1" />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />
  ], []);

  const nextSlide = () => currentSlide < slides.length - 1 && setCurrentSlide(prev => prev + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide(prev => prev - 1);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(console.error);
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (currentSlide === 4) {
      const end = Date.now() + 3000;
      const interval = setInterval(() => {
        if (Date.now() > end) return clearInterval(interval);
        confetti({ particleCount: 30, spread: 70, origin: { y: 0.6 }, colors: ['#F48FB1', '#FFEB3B', '#795548'] });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-chocolate-gradient flex flex-col items-center justify-center selection:bg-pink-500/30">
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3" />
      
      <BackgroundElements />

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="absolute top-6 right-6 z-[60] p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-pink-300 hover:bg-white/20 transition-all shadow-2xl"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Main Content Area */}
      <main className="relative w-full h-[75vh] md:h-[80vh] flex items-center justify-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 flex items-center gap-12 z-[60]">
        <button
          onClick={prevSlide}
          className={`p-5 rounded-full bg-white/5 border border-white/10 text-pink-200 transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-white/15'}`}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="flex gap-4">
          {slides.map((_, idx) => (
            <motion.div 
              key={idx}
              animate={{ 
                scale: currentSlide === idx ? 1.5 : 1,
                backgroundColor: currentSlide === idx ? '#F48FB1' : 'rgba(255,255,255,0.2)' 
              }}
              className="w-2.5 h-2.5 rounded-full"
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={`p-5 rounded-full bg-white/5 border border-white/10 text-pink-200 transition-all ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-white/15'}`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {!isPlaying && currentSlide === 0 && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} className="absolute bottom-28 text-pink-200 text-xs tracking-widest uppercase flex items-center gap-2">
          <Music size={12} /> Tap the icon for music, Smriti
        </motion.p>
      )}
    </div>
  );
};

export default App;