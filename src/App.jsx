import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LetsTalk from './components/LetsTalk';
import ContactPage from './page/ContactPage';

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new window.Lenis({
      duration: 1.2, // Scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scroll
      gestureSupport: true, // Enable smooth scroll for touch and trackpad gestures
    });

    // Add scroll event listener
    lenis.on('scroll', (e) => {
      console.log(e); // Log the scroll event
    });

    // RequestAnimationFrame for Lenis
    function raf(time) {
      lenis.raf(time); // Update Lenis
      requestAnimationFrame(raf); // Continue the loop
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy(); // Destroy Lenis instance
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Project />
            <Contact />
            <LetsTalk />
          </main>
        } />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;