import { Reveal } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
import { skills } from '../data.js';
export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <Reveal><p className="eyebrow">Skills</p><h2>Technical Skills</h2></Reveal>
        <div className="row g-4 mt-2">
          {Object.entries(skills).map(([group, items], gi) => (
            <div className="col-lg-4" key={group}><Reveal delay={gi * 120}>
              <Tilt className="glass pad" max={5}>
                <h3 className="h5 mb-3">{group === 'Other' ? 'Other Skills' : group}</h3>
                <ul className="skill-list">
                  {items.map(([name, level]) => <li key={name}><span>{name}</span><em>{level}</em></li>)}
                </ul>
              </Tilt>
            </Reveal></div>
          ))}
        </div>
      </div>
    </section>
  );
}
