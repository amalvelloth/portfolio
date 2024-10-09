import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Header />        {/* Navigation */}
      <main>
        <Hero />        {/* Hero Section */}
        <About />       {/* About Section */}
        <Project />    {/* Projects Section */}
        <Contact />     {/* Contact Section */}
      </main>
      <Footer />        {/* Footer */}
    </div>
  );
}

export default App;
