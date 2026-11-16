import { Reveal } from '../hooks/useReveal.jsx';
import Tilt from '../hooks/Tilt.jsx';
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container"><div className="row align-items-center g-5">
        <div className="col-lg-5"><Reveal>
          <Tilt className="frame"><img src="/images/profile.jpg" alt="Priyanka Yadav, web developer" loading="lazy" width="720" height="1080"/><span className="pbadge b1">Web Developer</span><span className="pbadge b2">Frontend · PHP · WordPress · QA</span></Tilt>
        </Reveal></div>
        <div className="col-lg-7"><Reveal>
          <p className="eyebrow">About</p><h2>Developer with an Eye for Detail</h2>
          <p>I'm Priyanka Yadav, a Mumbai-based Web Developer with 4+ years of experience creating, maintaining and improving websites.</p>
          <p>My work spans agency, non-profit and e-commerce websites. I work across responsive UI development, website customization, content integration and manual testing, with a focus on making websites useful and easy to navigate.</p>
          <p>I'm also strengthening my React.js skills and bringing a practical, user-focused approach to every project.</p>
          <div className="about-facts"><div className="glass stat"><strong>4+</strong><span>Years in web development</span></div><div className="glass stat"><strong>6</strong><span>Live websites featured</span></div></div>
          <div className="chips mt-3">{['HTML','CSS','JavaScript','Bootstrap','PHP','MySQL','WordPress','React.js'].map(t => <span key={t}>{t}</span>)}</div>
        </Reveal></div>
      </div></div>
    </section>
  );
}
