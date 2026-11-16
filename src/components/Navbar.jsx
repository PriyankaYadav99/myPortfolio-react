import { useEffect, useState } from 'react';
import { links } from '../data.js';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [light, setLight] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark'; }, [light]);
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav-wrap">
      <nav className="container d-flex align-items-center justify-content-between" aria-label="Main">
        <a href="#home" className="brand">PriyankaDev<span>.</span></a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <div className="d-flex align-items-center gap-2">
          <button className="icon-btn" onClick={() => setLight(!light)} aria-label="Toggle light or dark theme">{light ? '🌙' : '☀️'}</button>
          <button className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><i /><i /><i /></button>
        </div>
      </nav>
    </header>
  );
}
