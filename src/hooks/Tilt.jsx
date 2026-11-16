import { useRef } from 'react';
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export default function Tilt({ children, className = '', max = 10 }) {
  const ref = useRef(null);
  const move = (e) => {
    if (reduce()) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    const s = ref.current.style;
    s.setProperty('--ry', `${x * max * 2}deg`); s.setProperty('--rx', `${-y * max * 2}deg`);
    s.setProperty('--mx', `${(x + 0.5) * 100}%`); s.setProperty('--my', `${(y + 0.5) * 100}%`);
  };
  const leave = () => { const s = ref.current.style; s.setProperty('--ry', '0deg'); s.setProperty('--rx', '0deg'); };
  return <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>{children}</div>;
}
