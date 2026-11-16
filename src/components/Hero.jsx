import { useEffect, useRef, useState } from 'react';
import ParticleBg from './ParticleBg.jsx';
const WORDS = ['responsive websites', 'React interfaces', 'PHP & MySQL back ends', 'WordPress themes'];
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function Typed({ words }) {
  const [t, setT] = useState('');
  useEffect(() => {
    if (reduce()) { setT(words[0]); return; }
    let i = 0, j = 0, del = false, id;
    const tick = () => {
      const w = words[i]; j += del ? -1 : 1; setT(w.slice(0, j)); let d = del ? 35 : 70;
      if (!del && j === w.length) { del = true; d = 1400; } else if (del && j === 0) { del = false; i = (i + 1) % words.length; d = 300; }
      id = setTimeout(tick, d);
    };
    id = setTimeout(tick, 500); return () => clearTimeout(id);
  }, [words]);
  return <span className="typed">{t}</span>;
}
const Split = ({ text, base = 0 }) => text.split('').map((ch, i) => <span key={i} className="ch" style={{ animationDelay: `${base + i * 55}ms` }}>{ch}</span>);

function Scene3D() {
  const ref = useRef(null);
  useEffect(() => {
    if (reduce()) return;
    const el = ref.current; let tx = 0, ty = 0, x = 0, y = 0, raf, on = true;
    const mv = (e) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };
    const loop = () => {
      raf = requestAnimationFrame(loop); if (!on) return;
      x += (tx - x) * 0.07; y += (ty - y) * 0.07;
      el.style.setProperty('--mx', x.toFixed(3)); el.style.setProperty('--my', y.toFixed(3));
    };
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; }); io.observe(el);
    window.addEventListener('mousemove', mv); loop();
    return () => { window.removeEventListener('mousemove', mv); cancelAnimationFrame(raf); io.disconnect(); };
  }, []);
  return (
    <div className="s3" ref={ref} aria-hidden="true">
      <div className="rig">
        <div className="orbit o-a" /><div className="orbit o-b" />
        <div className="glow" />
        <div className="lap">
          <div className="lid">
            <div className="screen">
              <div className="dots"><i /><i /><i /></div>
              <code className="ln" style={{ animationDelay: '0s' }}><s>const</s> dev = &#123;</code>
              <code className="ln" style={{ animationDelay: '.5s' }}>&nbsp;&nbsp;name: <u>"Priyanka"</u>,</code>
              <code className="ln" style={{ animationDelay: '1s' }}>&nbsp;&nbsp;stack: [<u>"React"</u>, <u>"PHP"</u>],</code>
              <code className="ln" style={{ animationDelay: '1.5s' }}>&nbsp;&nbsp;years: <b>4</b>,</code>
              <code className="ln" style={{ animationDelay: '2s' }}>&#125;;</code>
              <code className="ln" style={{ animationDelay: '2.5s' }}>dev.<em>build</em>(<u>"something great"</u>);</code>
            </div>
          </div>
          <div className="deck" />
        </div>
        <div className="fl f1" style={{ '--d': 30, '--z': '120px' }}><b>{'<Hero />'}</b><i /><i /></div>
        <div className="fl f2" style={{ '--d': 48, '--z': '150px' }}><strong>4+</strong><span>years experience</span></div>
        <div className="fl f3" style={{ '--d': 22, '--z': '90px' }}>React · PHP · WordPress</div>
        <div className="fl f4" style={{ '--d': 40, '--z': '130px' }}>✔ Responsive<i /><i /></div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <ParticleBg /><div className="orb o1" /><div className="orb o2" />
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 pt-5">
            {/* <span className="status"><i />Available for freelance projects</span> */}
            <p className="eyebrow mt-3">HELLO, I'M</p>
            <h1 className="display-name" aria-label="Priyanka Yadav"><span aria-hidden="true"><Split text="Priyanka" /> <span className="grad"></span></span></h1>
            <p className="role">Web Developer | Frontend &amp; Backend Developer</p>
            <p className="typed-line">I build <Typed words={WORDS} /></p>
            <p className="lead-text">Transforming ideas into interactive, modern and meaningful digital experiences.</p>
            <p className="muted">I build responsive, user-friendly and visually engaging websites using modern web technologies, combining creative design with functional development.</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn-x primary magnetic">Explore My Work</a>
              <a href="#contact" className="btn-x ghost magnetic">Let's Work Together</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-10 mx-auto"><Scene3D /></div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}
