import { Reveal } from '../hooks/useReveal.jsx';
import { steps } from '../data.js';
export default function Process() {
  return (
    <section id="process" className="section alt">
      <div className="container">
        <Reveal><p className="eyebrow">Process</p><h2>How I Work</h2></Reveal>
        <div className="row g-4 mt-2 process">
          {steps.map(([t, d], i) => (
            <div className="col-md-6 col-lg" key={t}><Reveal delay={i * 120}>
              <div className="glass pad h-100"><span className="num">0{i + 1}</span><h3 className="h6 mt-2">{t}</h3><p className="muted small mb-0">{d}</p></div>
            </Reveal></div>
          ))}
        </div>
      </div>
    </section>
  );
}
