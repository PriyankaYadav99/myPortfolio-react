import { useEffect, useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
import { projects } from '../data.js';
const FILTERS = { All: () => true, WordPress: (p) => p.tech.includes('WordPress'), React: (p) => p.tech.includes('React'), PHP: (p) => p.tech.includes('PHP'), 'HTML/CSS': (p) => p.tech.includes('HTML5') };
export default function Projects() {
  const [f, setF] = useState('All'); const [sel, setSel] = useState(null);
  useEffect(() => {
    if (!sel) return;
    const key = (e) => e.key === 'Escape' && setSel(null);
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key); };
  }, [sel]);
  const list = projects.filter(FILTERS[f]);
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal><p className="eyebrow">Work</p><h2>Selected Projects</h2><p className="muted">Sample projects with placeholder screenshots – swap in real images anytime.</p></Reveal>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {Object.keys(FILTERS).map((k) => <button key={k} role="tab" aria-selected={f === k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{k}</button>)}
        </div>
        <div className="row g-4 mt-1">
          {list.map((p, i) => (
            <div className="col-md-6 col-xl-4" key={p.title}><Reveal delay={(i % 3) * 100}>
              <Tilt className="project" max={12}>
                <div className="shot">
                  <img src={p.img} alt={`${p.title} preview`} loading="lazy" width="800" height="500" />
                  <span className="shine" /><span className="float-badge">{p.tech[0]}</span>
                </div>
                <div className="info">
                  <h3 className="h5">{p.title}</h3>
                  <p className="muted">{p.desc}</p>
                  <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <button type="button" className="btn-x primary sm" onClick={() => setSel(p)}>View Project</button>
                    <a href="#" className="btn-x ghost sm">Live Demo</a>
                    {p.gh && <a href="#" className="btn-x ghost sm">GitHub</a>}
                  </div>
                </div>
              </Tilt>
            </Reveal></div>
          ))}
        </div>
      </div>
      {sel && (
        <div className="modal-x" onClick={() => setSel(null)}>
          <div className="modal-card" role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()}>
            <button className="close" autoFocus onClick={() => setSel(null)} aria-label="Close project details">✕</button>
            <img src={sel.img} alt={`${sel.title} preview`} width="800" height="500" />
            <div className="p-4">
              <h3>{sel.title}</h3><p className="muted">{sel.desc}</p>
              <div className="chips mb-3">{sel.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="d-flex gap-2 flex-wrap"><a href="#" className="btn-x primary sm">Live Demo</a>{sel.gh && <a href="#" className="btn-x ghost sm">GitHub</a>}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
