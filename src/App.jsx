import { useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
// import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => { // magnetic buttons
    const mq = (q) => window.matchMedia(q).matches;
    if (!mq('(hover:hover)') || mq('(prefers-reduced-motion: reduce)')) return;
    const offs = [...document.querySelectorAll('.magnetic')].map((el) => {
      const mv = (e) => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; };
      const lv = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', mv); el.addEventListener('mouseleave', lv);
      return () => { el.removeEventListener('mousemove', mv); el.removeEventListener('mouseleave', lv); };
    });
    return () => offs.forEach((f) => f());
  }, []);
  return (
    <>
      <Loader /><Cursor /><ScrollProgress />
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
