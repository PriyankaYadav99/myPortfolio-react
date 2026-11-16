import { useEffect, useRef } from 'react';
export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const d = document.documentElement; const max = d.scrollHeight - d.clientHeight;
      bar.current.style.transform = `scaleX(${max > 0 ? d.scrollTop / max : 0})`; }); };
    window.addEventListener('scroll', on, { passive: true }); on();
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={bar} className="progress" aria-hidden="true" />;
}
