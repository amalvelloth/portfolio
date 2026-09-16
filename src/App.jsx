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

import spaceVideo from './assets/spacetravel.mp4';
import blackSpaceVideo from './assets/black_space.mp4';
import nikeAdidas from './assets/images/nikeAdidas.png';
import appleVisionPro from './assets/images/appleVisionPro.png';
import bmwm from './assets/images/bmwm.png';
import workingImg from './assets/working.jpg';
import midnightMagic from './assets/images/midnightMagic.png';
import zenitsu from './assets/images/zenitsu.png';
import urcristiano from './assets/images/RonaldoSite.png';
import kanbanBoard from './assets/images/kanban_board.png';

const AnimatedContactPage = transition(ContactPage);

const CRITICAL_IMAGES = [
  nikeAdidas,
  appleVisionPro,
  bmwm,
  workingImg,
  midnightMagic,
  zenitsu,
  urcristiano,
  kanbanBoard,
];

const CRITICAL_VIDEOS = [spaceVideo, blackSpaceVideo];

function LoadingScreen({ onComplete }) {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = CRITICAL_IMAGES.length + CRITICAL_VIDEOS.length + 2; // +1 for fonts, +1 for window load
    let targetProgress = 0;
    let isFinished = false;

    const increment = () => {
      loadedCount += 1;
      targetProgress = Math.min(Math.round((loadedCount / totalAssets) * 100), 100);
    };

    // 1. Check window load
    if (document.readyState === 'complete') {
      increment();
    } else {
      window.addEventListener('load', increment, { once: true });
    }

    // 2. Check fonts
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        increment();
      });
    } else {
      increment();
    }

    // 3. Preload all critical images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        increment();
      } else {
        img.onload = increment;
        img.onerror = increment; // Fallback so it doesn't get stuck if an image fails
      }
    });

    // 4. Preload and buffer critical videos
    CRITICAL_VIDEOS.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;

      const handleVideoReady = () => {
        increment();
        video.removeEventListener('canplaythrough', handleVideoReady);
        video.removeEventListener('loadeddata', handleVideoReady);
      };

      if (video.readyState >= 3) {
        increment();
      } else {
        video.addEventListener('canplaythrough', handleVideoReady, { once: true });
        video.addEventListener('loadeddata', handleVideoReady, { once: true });
        video.addEventListener('error', increment, { once: true });
        video.load();
      }
    });

    // Smoothly animate displayProgress towards targetProgress
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < targetProgress) {
          const step = Math.max(1, Math.ceil((targetProgress - prev) / 4));
          return Math.min(prev + step, 100);
        }

        if (prev >= 100 && targetProgress >= 100 && !isFinished) {
          isFinished = true;
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }

        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

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
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex justify-between items-end font-mono">
        <div className="text-xs md:text-sm text-[#777777] hidden sm:block">
          <span>SYSTEM // BUFFERING ASSETS</span>
        </div>

        <div className="text-right ml-auto">
          <span className="text-5xl md:text-7xl font-mono font-bold tracking-tight text-white">
            {displayProgress}
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

        {/* Global Frame Lines (Left, Right, Bottom) */}
        <div className="fixed lg:block hidden left-[1.4rem] top-[1.4rem] bottom-[1.4rem] w-[1px] bg-[#474747] z-30 pointer-events-none"></div>
        <div className="fixed lg:block hidden right-[1.4rem] top-[1.4rem] bottom-[1.4rem] w-[1px] bg-[#474747] z-30 pointer-events-none"></div>
        <div className="fixed lg:block hidden left-[1.4rem] right-[1.4rem] bottom-[1.4rem] h-[1px] bg-[#474747] z-30 pointer-events-none"></div>

        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;

