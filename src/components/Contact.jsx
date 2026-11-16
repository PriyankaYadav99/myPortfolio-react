import { useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xljbjaja';

// Add your real contact details here when ready.
const CONTACT_EMAIL = 'priyankaya1726@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/priyanka-yadav-webdev';
const GITHUB_URL = 'https://github.com/PriyankaYadav99';
const isConfigured = value => !value.startsWith('YOUR_') && !value.includes('example.com');

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const updateField = event => {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });
      if (!response.ok) throw new Error('Message could not be sent');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const emailReady = isConfigured(CONTACT_EMAIL);

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2>Let's Talk About Your Next Opportunity</h2>
              <p className="muted">Have a role, project or collaboration in mind? Send me a message. I'd love to hear from you.</p>
              <div className="contact-card glass pad mt-4">
                <span className="contact-orb" />
                <p className="eyebrow">Connect</p>
                <h3 className="h4">Find me online</h3>
                <ul className="contact-list">
                  {emailReady && <li><a href={`mailto:${CONTACT_EMAIL}`}>✉️ {CONTACT_EMAIL}</a></li>}
                  {isConfigured(LINKEDIN_URL) && <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">💼 LinkedIn profile ↗</a></li>}
                  {isConfigured(GITHUB_URL) && <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">💻 GitHub profile ↗</a></li>}
                </ul>
                <p className="small muted mb-0">You can also use the contact form to reach me directly.</p>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal>
              <form className="glass pad contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-name">Your name</label>
                    <input id="contact-name" className="form-control" name="name" value={form.name} onChange={updateField} placeholder="Enter your name" autoComplete="name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-email">Your email</label>
                    <input id="contact-email" className="form-control" type="email" name="email" value={form.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" className="form-control" name="subject" value={form.subject} onChange={updateField} placeholder="Job opportunity / Project enquiry" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-message">Your message</label>
                    <textarea id="contact-message" className="form-control" name="message" rows="5" value={form.message} onChange={updateField} placeholder="Tell me a little about your opportunity or project..." required />
                  </div>
                  <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                    <button className="btn-x primary" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send Message ↗'}
                    </button>
                    <span className="small muted" aria-live="polite">
                      {status === 'success' && 'Thanks! Your message has been sent successfully.'}
                      {status === 'error' && 'Sorry, your message could not be sent. Please try again.'}
                    </span>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
