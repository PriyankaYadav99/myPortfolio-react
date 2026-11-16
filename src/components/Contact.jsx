import { useState } from 'react';
import { Reveal } from '../hooks/useReveal.jsx';
const empty = { name: '', email: '', subject: '', message: '' };
export default function Contact() {
  const [f, setF] = useState(empty); const [err, setErr] = useState({}); const [status, setStatus] = useState('');
  const validate = () => {
    const e = {};
    if (f.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.';
    if (f.subject.trim().length < 3) e.subject = 'Please add a subject.';
    if (f.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  };
  const submit = async (ev) => {
    ev.preventDefault(); const e = validate(); setErr(e);
    if (Object.keys(e).length) return setStatus('error');
    try {
      // Backend hook: replace with fetch('/api/contact', { method: 'POST', body: JSON.stringify(f) })
      await new Promise(r => setTimeout(r, 600));
      setStatus('success'); setF(empty);
    } catch { setStatus('error'); }
  };
  const field = (id, label, type = 'text') => (
    <div className="form-floating mb-3">
      {type === 'textarea'
        ? <textarea id={id} className={`form-control ${err[id] ? 'is-invalid' : ''}`} placeholder={label} style={{ height: 140 }} value={f[id]} onChange={e => setF({ ...f, [id]: e.target.value })} />
        : <input id={id} type={type} className={`form-control ${err[id] ? 'is-invalid' : ''}`} placeholder={label} value={f[id]} onChange={e => setF({ ...f, [id]: e.target.value })} />}
      <label htmlFor={id}>{label}</label>
      {err[id] && <div className="invalid-feedback">{err[id]}</div>}
    </div>
  );
  return (
    <section id="contact" className="section alt">
      <div className="container"><div className="row g-5">
        <div className="col-lg-5"><Reveal>
          <p className="eyebrow">Contact</p><h2>Let's Create Something Amazing Together</h2>
          <p>Have a project in mind, looking for a developer, or interested in collaborating? Let's connect and turn your ideas into reality.</p>
          <ul className="contact-list">
            <li><a href="mailto:hello@example.com">✉️ hello@example.com</a></li>
            <li><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">💼 LinkedIn</a></li>
            <li><a href="https://github.com/your-username" target="_blank" rel="noreferrer">💻 GitHub</a></li>
            <li><a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">💬 WhatsApp</a></li>
          </ul>
        </Reveal></div>
        <div className="col-lg-7"><Reveal>
          <form className="glass pad" onSubmit={submit} noValidate>
            <div className="row"><div className="col-md-6">{field('name', 'Name')}</div><div className="col-md-6">{field('email', 'Email', 'email')}</div></div>
            {field('subject', 'Subject')}{field('message', 'Message', 'textarea')}
            <button className="btn-x primary" type="submit">Send Message</button>
            <div role="status" className="mt-3">
              {status === 'success' && <div className="alert alert-success mb-0">Thanks! Your message is ready to send once a backend is connected.</div>}
              {status === 'error' && <div className="alert alert-danger mb-0">Please fix the highlighted fields and try again.</div>}
            </div>
          </form>
        </Reveal></div>
      </div></div>
    </section>
  );
}
