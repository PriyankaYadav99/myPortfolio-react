import { useEffect, useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';
import { testimonials } from '../data.js';
export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(x => (x + 1) % testimonials.length), 6000); return () => clearInterval(t);
  }, []);
  const [name, role, text] = testimonials[i];
  return (
    <section id="testimonials" className="section">
      <div className="container text-center">
        <Reveal><p className="eyebrow">Testimonials</p><h2>What People Say</h2>
          <p className="muted">Sample / demo testimonials – placeholders, not real client feedback.</p>
          <div className="glass pad quote" aria-live="polite">
            <div className="avatar-sm" aria-hidden="true">{name.slice(-1)}</div>
            <p className="fs-5">“{text}”</p>
            <strong>{name}</strong><span className="muted d-block">{role}</span>
          </div>
          <div className="dots">{testimonials.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} />)}</div>
        </Reveal>
      </div>
    </section>
  );
}
