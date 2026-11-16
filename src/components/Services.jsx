import { Reveal } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
import { services } from '../data.js';
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal><p className="eyebrow">Services</p><h2>What I Can Do For You</h2></Reveal>
        <div className="row g-4 mt-2">
          {services.map(([icon, title, desc], i) => (
            <div className="col-sm-6 col-lg-3" key={title}><Reveal delay={(i % 4) * 90}>
              <Tilt className="glass pad service" max={8}>
                <div className="ico" aria-hidden="true">{icon}</div>
                <h3 className="h6">{title}</h3><p className="muted small">{desc}</p>
                <a href="#contact" className="link">Get in touch →</a>
              </Tilt>
            </Reveal></div>
          ))}
        </div>
      </div>
    </section>
  );
}
