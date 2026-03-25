import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Antigravity from './Antigravity';

function App() {
  const [isInteracted, setIsInteracted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isInteracted) {
        setIsInteracted(true);
        window.removeEventListener('mousemove', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
        window.removeEventListener('touchmove', handleFirstInteraction);
      }
    };

    window.addEventListener('mousemove', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('touchmove', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('touchmove', handleFirstInteraction);
    };
  }, [isInteracted]);



  const handleGlobalClick = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    setTimeout(() => {
      setIsRevealed(false);
    }, 5000);
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 selection:bg-neon-blue selection:text-white"
      onClick={handleGlobalClick}
    >

      {/* Glassmorphism Initial State Screen */}
      <div
        className={`fixed inset-0 z-[60] bg-[#1a1a1a]/20 backdrop-blur-[30px] pointer-events-none transition-all duration-1000 ease-in-out ${isInteracted ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* 1. Antigravity Foreground Reveal / Masking System */}
      <div className={`absolute inset-0 z-50 pointer-events-none transition-opacity duration-700 ease-in-out ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        <Antigravity
          count={10000}
          magnetRadius={160}
          ringRadius={175}
          waveSpeed={0.8}
          waveAmplitude={1.5}
          particleSize={2.2}
          lerpSpeed={0.05}
          color="#c9c9c9"
          autoAnimate
          particleVariance={0.4}
          rotationSpeed={0}
          depthFactor={1.5}
          pulseSpeed={1.5}
          particleShape="circle"
          fieldStrength={55}
        />
      </div>

      {/* 2. Base Dark Layer (Ensures completely hidden mask outside cursor) */}
      <div className="fixed inset-0 bg-black z-0 pointer-events-none" />

      <main className="relative w-full max-w-4xl flex flex-col items-center z-10 text-center space-y-12 py-20">

        {/* Header / Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <img
            src="/logo.png"
            alt="ARTIBOTS Logo"
            className="w-[110px] h-[110px] md:w-[130px] md:h-[130px]"
          />
          <div className="flex flex-col items-center">
            <h3 className="text-white font-orbitron tracking-[0.1em] md:tracking-[0.1em] text-4xl md:text-5xl font-bold uppercase mt-2">
              ARTIBOTS
            </h3>
            <h2 className="text-neon-blue font-orbitron tracking-futuristic text-xl md:text-2xl font-semibold uppercase mt-10">
              is
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mt-0"
          >
            About to Awaken
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-white/70 text-sm md:text-base leading-relaxed tracking-wide"
          >
            <span className="font-bold text-white">Artibots</span>, a next-generation platform developed by {" "}
            <span className="text-white font-semibold">
              Artibots Innovation Private Limited
            </span>, is the engine behind the intelligence. We are building an innovative future.
          </motion.p>
        </div>


      </main >

      {/* Footer */}
      < footer className="absolute bottom-8 left-0 w-full text-center z-10 px-4" >
        <p className="text-white/60 text-sm md:text-base tracking-widest uppercase">
          © 2025 Artibots Innovation Private Limited
        </p>
      </footer >

    </div >
  );
}

export default App;
