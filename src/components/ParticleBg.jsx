import { useEffect, useRef } from 'react';
export default function ParticleBg() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = ref.current, ctx = c.getContext('2d'), host = c.parentElement;
    let w, h, pts = [], raf, visible = true; const m = { x: -999, y: -999 };
    const resize = () => {
      const r = host.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height; c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.min(80, Math.floor((w * h) / 18000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 }));
    };
    const draw = () => {
      raf = requestAnimationFrame(draw); if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const dx = p.x - m.x, dy = p.y - m.y, d2 = dx * dx + dy * dy;
        if (d2 < 14000) { p.x += dx * .012; p.y += dy * .012; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.fillStyle = 'rgba(251,191,36,.8)'; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = dx * dx + dy * dy;
        if (d < 14400) { ctx.strokeStyle = `rgba(255,107,53,${(1 - d / 14400) * .35})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
    };
    const mv = (e) => { const r = host.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    const lv = () => { m.x = m.y = -999; };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(host); resize(); draw();
    window.addEventListener('resize', resize); host.addEventListener('mousemove', mv); host.addEventListener('mouseleave', lv);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', resize); host.removeEventListener('mousemove', mv); host.removeEventListener('mouseleave', lv); };
  }, []);
  return <canvas ref={ref} className="pbg" aria-hidden="true" />;
}
