import { useEffect, useRef } from 'react';
export default function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    const mq = (q) => window.matchMedia(q).matches;
    if (!mq('(hover:hover) and (pointer:fine)') || mq('(prefers-reduced-motion: reduce)')) return;
    document.body.classList.add('has-cursor');
    let x = 0, y = 0, rx = 0, ry = 0, raf;
    const mv = (e) => {
      x = e.clientX; y = e.clientY; dot.current.style.transform = `translate(${x}px,${y}px)`;
      ring.current.classList.toggle('hot', !!e.target.closest('a,button,.tilt'));
    };
    const loop = () => { rx += (x - rx) * .15; ry += (y - ry) * .15; ring.current.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener('mousemove', mv); loop();
    return () => { window.removeEventListener('mousemove', mv); cancelAnimationFrame(raf); document.body.classList.remove('has-cursor'); };
  }, []);
  return (<><div ref={ring} className="cur-ring" aria-hidden="true" /><div ref={dot} className="cur-dot" aria-hidden="true" /></>);
}
