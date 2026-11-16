import { useEffect, useRef, useState } from 'react';
export function useInView(once = true) {
  const ref = useRef(null); const [inView, set] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); once && io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, [once]);
  return [ref, inView];
}
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, v] = useInView();
  return <div ref={ref} className={`reveal ${v ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
