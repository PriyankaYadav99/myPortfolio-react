import { useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
import { projects } from '../data.js';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...new Set(projects.map(p => p.category))];
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal><p className="eyebrow">Selected work</p><h2>Websites I've Worked On</h2><p className="muted project-intro">A selection of live websites across agency, non-profit, healthcare and digital-platform work. Open each website to explore it.</p></Reveal>
        <div className="filters" aria-label="Filter projects">
          {filters.map(item => <button key={item} type="button" aria-pressed={filter === item} className={filter === item ? 'on' : ''} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="row g-4 mt-1">
          {visible.map((p, i) => (
            <div className="col-md-6 col-xl-4" key={p.url}><Reveal delay={(i % 3) * 90}>
              <Tilt className="project live-project" max={8}>
                <div className="shot live-shot" style={{'--project-accent':p.accent}}>
                  <div className="browser-bar"><i/><i/><i/><span>{new URL(p.url).hostname}</span></div>
                  <div className="project-art"><span className="art-kicker">{p.category}</span><strong>{p.title}</strong><span className="art-line"/><span className="art-line short"/><span className="art-pill">Live website ↗</span></div>
                  <span className="float-badge">{String(i + 1).padStart(2,'0')}</span>
                </div>
                <div className="info">
                  <p className="eyebrow project-category">{p.category}</p>
                  <h3 className="h5">{p.title}</h3><p className="muted">{p.desc}</p>
                  <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="mt-3"><a className="btn-x primary sm" href={p.url} target="_blank" rel="noopener noreferrer">Visit Live Website ↗</a></div>
                </div>
              </Tilt>
            </Reveal></div>
          ))}
        </div>
      </div>
    </section>
  );
}
