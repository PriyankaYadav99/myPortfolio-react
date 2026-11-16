import { Reveal } from '../hooks/useReveal.jsx';

// Add your real contact details here before publishing.
const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
const LINKEDIN_URL = 'YOUR_LINKEDIN_URL';
const GITHUB_URL = 'YOUR_GITHUB_URL';
const isConfigured = value => !value.startsWith('YOUR_') && !value.includes('example.com');

export default function Contact() {
  const emailReady = isConfigured(CONTACT_EMAIL);
  return (
    <section id="contact" className="section alt">
      <div className="container"><div className="row g-5 align-items-center">
        <div className="col-lg-7"><Reveal>
          <p className="eyebrow">Get in touch</p><h2>Let's Talk About Your Next Website Project</h2>
          <p className="muted">I'm open to conversations about web development opportunities, website improvements and collaborative projects.</p>
          <div className="contact-actions">
            {emailReady ? <a className="btn-x primary" href={`mailto:${CONTACT_EMAIL}`}>Email Me ↗</a> : <span className="btn-x primary" aria-disabled="true">Add your email to enable contact</span>}
            <a className="btn-x ghost" href="#projects">Explore my work</a>
          </div>
        </Reveal></div>
        <div className="col-lg-5"><Reveal>
          <div className="glass pad contact-card"><span className="contact-orb"/><p className="eyebrow">Connect</p><h3 className="h4">Find me online</h3>
            <ul className="contact-list">
              {emailReady && <li><a href={`mailto:${CONTACT_EMAIL}`}>✉️ {CONTACT_EMAIL}</a></li>}
              {isConfigured(LINKEDIN_URL) && <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">💼 LinkedIn profile ↗</a></li>}
              {isConfigured(GITHUB_URL) && <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">💻 GitHub profile ↗</a></li>}
            </ul>
            <p className="small muted mb-0">Update the contact constants in <code>src/components/Contact.jsx</code> with your real links before publishing.</p>
          </div>
        </Reveal></div>
      </div></div>
    </section>
  );
}
