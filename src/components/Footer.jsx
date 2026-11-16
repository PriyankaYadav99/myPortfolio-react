import { links } from '../data.js';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a href="#home" className="brand">Priyanka Yadav<span>.</span></a>
        <p className="muted my-2">Building modern, meaningful web experiences.</p>
        <nav aria-label="Footer" className="foot-links">{links.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <small className="muted">© {new Date().getFullYear()} Priyanka Yadav. All rights reserved.</small>
      </div>
      <a href="#home" className="to-top" aria-label="Back to top">↑</a>
    </footer>
  );
}
