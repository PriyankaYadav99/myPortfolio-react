import { useEffect, useState } from 'react';
import { Reveal, useInView } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
function Counter({ to, suffix = '+' }) {
  const [ref, v] = useInView(); const [n, setN] = useState(0);
  useEffect(() => { if (!v) return; let i = 0; const t = setInterval(() => { i++; setN(i); if (i >= to) clearInterval(t); }, 90); return () => clearInterval(t); }, [v, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container"><div className="row align-items-center g-5">
        <div className="col-lg-5"><Reveal>
          <Tilt className="frame"><img src="/images/profile.jpg" alt="Portrait of Priyanka Yadav, web developer" loading="lazy" width="720" height="1080" /><span className="pbadge b1">Web Developer</span><span className="pbadge b2">PHP · MySQL · WordPress · JavaScript · ReactJs</span></Tilt>
        </Reveal></div>
        <div className="col-lg-7"><Reveal>
          <p className="eyebrow">About</p><h2>A Little About Me</h2>
          <p>I'm Priyanka Yadav, a passionate Web Developer with 4+ years of professional experience in building responsive, functional and user-friendly websites.</p>
          <p>I enjoy transforming creative ideas into practical digital solutions. My experience includes frontend development, backend development, website customization, responsive layouts and interactive user experiences.</p>
          <p>I continuously explore new technologies and improve my development skills to create better digital experiences.</p>
          <div className="row g-3 my-3">
            <div className="col-6"><div className="glass stat"><strong><Counter to={4} /></strong><span>Years Experience</span></div></div>
            <div className="col-6"><div className="glass stat"><strong><Counter to={50} /></strong><span>Projects (placeholder)</span></div></div>
          </div>
          <div className="chips">{['React','PHP','MySQL','WordPress','Bootstrap 5'].map(t => <span key={t}>{t}</span>)}</div>
        </Reveal></div>
      </div></div>
    </section>
  );
}
