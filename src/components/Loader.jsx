import { useEffect, useState } from 'react';
export default function Loader() {
  const [stage, setStage] = useState(0);
  useEffect(() => { const a = setTimeout(() => setStage(1), 900), b = setTimeout(() => setStage(2), 1600); return () => { clearTimeout(a); clearTimeout(b); }; }, []);
  if (stage === 2) return null;
  return <div className={`loader ${stage ? 'hide' : ''}`} aria-hidden="true"><div className="ring-load" /><span className="brand">PY<span>.</span></span></div>;
}
