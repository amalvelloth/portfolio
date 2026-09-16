import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import LetsTalk from './components/LetsTalk';
import ContactPage from './page/ContactPage';
import transition from './transition';
import VideoBackground from './components/VideoBackground';

const AnimatedContactPage = transition(ContactPage);

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isWindowLoaded, setIsWindowLoaded] = useState(
    typeof document !== 'undefined' && document.readyState === 'complete'
  );

  useEffect(() => {
    const handleLoad = () => {
      setIsWindowLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsWindowLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Fonts are loaded
      });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // If window has not loaded yet, cap progress at 88%
        if (!isWindowLoaded && prev >= 88) {
          return prev;
        }

        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        // Fast ramp-up once fully loaded, otherwise steady increments
        const step = isWindowLoaded
          ? Math.floor(Math.random() * 8) + 6
          : Math.floor(Math.random() * 6) + 2;

        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isWindowLoaded, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-black text-white p-6 md:p-10 select-none overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-xs md:text-sm font-mono tracking-widest text-[#888888] uppercase">
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
          PORTFOLIO &copy; 2024
        </span>
        <span>INITIALIZING EXPERIENCE</span>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-Dimentions text-6xl md:text-9xl text-center tracking-wider text-white"
        >
          AMAL V
        </motion.h1>

        <p className="font-mono text-xs md:text-sm text-[#CECECE] tracking-[0.3em] uppercase mt-2 text-center">
          CREATIVE FULL STACK DEVELOPER
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-48 md:w-80 h-[2px] bg-[#222222] mt-10 relative overflow-hidden rounded-full border border-[#333333]">
          <motion.div
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex justify-between items-end font-mono">
        <div className="text-xs md:text-sm text-[#777777] hidden sm:block">
          <span>SYSTEM // READY</span>
        </div>

        <div className="text-right ml-auto">
          <span className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-white">
            {progress}
          </span>
          <span className="text-lg md:text-2xl text-[#888888] ml-1 font-mono">%</span>
        </div>
      </div>

      {/* Corner borders for brutalist aesthetic */}
      <div className="pointer-events-none absolute top-4 left-4 w-4 h-4 border-t border-l border-[#474747]"></div>
      <div className="pointer-events-none absolute top-4 right-4 w-4 h-4 border-t border-r border-[#474747]"></div>
      <div className="pointer-events-none absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#474747]"></div>
      <div className="pointer-events-none absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#474747]"></div>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Project />
              <Contact />
              <LetsTalk />
            </main>
          }
        />
        <Route path="/contactpage" element={<AnimatedContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      gestureSupport: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Router>
        <VideoBackground />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;

