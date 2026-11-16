import { Reveal } from '../hooks/useReveal.jsx';
import { duties } from '../data.js';
export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <Reveal><p className="eyebrow">Experience</p><h2>Professional Journey</h2></Reveal>
        <div className="timeline">
          <Reveal className="t-item">
            <span className="t-dot" />
            <div className="glass pad">
              <h3 className="h5 mb-1">Web Developer</h3>
              <p className="grad mb-3">SkyPath Digital · 4+ Years of Experience</p>
              <ul className="ticks">{duties.map(d => <li key={d}>{d}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
