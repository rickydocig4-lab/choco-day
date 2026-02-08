import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Volume2, VolumeX, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

// Importing components with relative paths
import Slide1 from './components/Slide1.tsx';
import Slide2 from './components/Slide2.tsx';
import Slide3 from './components/Slide3.tsx';
import Slide4 from './components/Slide4.tsx';
import Slide5 from './components/Slide5.tsx';
import BackgroundElements from './components/BackgroundElements.tsx';

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
    <div className="relative w-full h-screen overflow-hidden bg-chocolate-gradient flex flex-col items-center justify-center">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3" 
      />
      
      {/* Background Decor */}
      <BackgroundElements />

      {/* Controls */}
      <div className="absolute top-6 right-6 z-[60] flex gap-4">
        <button 
          onClick={toggleMusic}
          className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-pink-300 shadow-xl"
          aria-label="Toggle Music"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </div>

      {/* Slides Container */}
      <main className="relative w-full max-w-4xl h-[85vh] flex items-center justify-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="absolute bottom-8 flex items-center gap-10 z-[60]">
        <button
          onClick={prevSlide}
          className={`p-4 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'opacity-0 scale-0 pointer-events-none' : 'bg-white/5 hover:bg-white/15 border border-white/10 shadow-lg text-pink-200'}`}
        >
          <ChevronLeft size={28} />
        </button>

        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <motion.div 
              key={idx} 
              initial={false}
              animate={{ 
                width: currentSlide === idx ? 32 : 10,
                backgroundColor: currentSlide === idx ? '#F48FB1' : 'rgba(244, 143, 177, 0.2)' 
              }}
              className="h-2 rounded-full transition-all duration-500"
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={`p-4 rounded-full transition-all duration-300 ${currentSlide === slides.length - 1 ? 'opacity-0 scale-0 pointer-events-none' : 'bg-white/5 hover:bg-white/15 border border-white/10 shadow-lg text-pink-200'}`}
        >
          <ChevronRight size={28} />
        </button>
      </nav>

      {/* Music Tip */}
      {!isPlaying && currentSlide === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          className="absolute bottom-24 text-pink-200/80 text-xs flex items-center gap-2 tracking-widest uppercase font-light"
        >
          <Music size={12} /> Sound on for Smriti 💖
        </motion.div>
      )}
    </div>
  );
};

export default App;