import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


import Home from './pages/Home';


const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


};

const Footer = () => (
  <footer className="absolute bottom-4 md:bottom-8 left-0 w-full text-center z-10 px-4 space-y-2">
    {/* <p className="text-white/60 text-[10px] md:text-sm tracking-widest uppercase max-w-2xl mx-auto leading-relaxed">
      ARTIBOTS is an Artificial Intelligence and Robotics company that develops intelligent systems, automation platforms, and advanced robotics technologies.
    </p>*/}
    <p className="text-white/30 text-[9px] md:text-xs tracking-widest uppercase">
      © 2025 ARTIBOTS INNOVATION PRIVATE LIMITED
    </p>
  </footer>
);

function AppContent() {
  const [isInteracted, setIsInteracted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const lastTapTime = useRef(0);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isInteracted) {
        setIsInteracted(true);
        window.removeEventListener('mousemove', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('mousemove', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    return () => {
      window.removeEventListener('mousemove', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isInteracted]);

  const handleRevealInitiation = (e) => {
    if (isRevealed) return;

    // Desktop: Single Click to Reveal
    if (e.type === 'click') {
      setIsRevealed(true);
      setTimeout(() => setIsRevealed(false), 5000);
      return;
    }

    // Mobile: Double Tap to Reveal
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (e.type === 'touchend') {
      if (now - lastTapTime.current < DOUBLE_TAP_DELAY) {
        setIsRevealed(true);
        setTimeout(() => setIsRevealed(false), 5000);
      }
      lastTapTime.current = now;
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden selection:bg-neon-blue selection:text-white touch-none">
      <Nav />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <Home
              isInteracted={isInteracted}
              isRevealed={isRevealed}
              handleRevealInitiation={handleRevealInitiation}
            />
          } />

        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
