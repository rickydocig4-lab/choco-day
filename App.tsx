
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Volume2, VolumeX, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

// Components for the slides
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import BackgroundElements from './components/BackgroundElements';

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
    // Auto trigger confetti on last slide
    if (currentSlide === 4) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-chocolate-gradient flex flex-col items-center justify-center text-white">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" // Romantic placeholder
      />
      
      {/* Background Decor */}
      <BackgroundElements />

      {/* Controls Overlay */}
      <div className="absolute top-6 right-6 z-50 flex gap-4">
        <button 
          onClick={toggleMusic}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-pink-200"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </div>

      {/* Slides Container */}
      <div className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 flex items-center gap-8 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full transition-all ${currentSlide === 0 ? 'opacity-0 scale-0' : 'bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg'}`}
        >
          <ChevronLeft className="text-pink-100" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-pink-400' : 'w-2 bg-pink-200/30'}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-4 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'opacity-0 scale-0' : 'bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg'}`}
        >
          <ChevronRight className="text-pink-100" />
        </button>
      </div>

      {/* Instructions on start */}
      {!isPlaying && currentSlide === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-28 text-pink-200/60 text-sm flex items-center gap-2"
        >
          <Music size={14} /> Tap the music icon for the best experience
        </motion.div>
      )}
    </div>
  );
};

export default App;
