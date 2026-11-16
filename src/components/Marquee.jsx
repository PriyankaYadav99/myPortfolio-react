const items = ['React', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap 5', 'jQuery', 'AJAX', 'HTML5', 'CSS3'];
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{[...items, ...items].map((t, i) => <span key={i}>{t}<b>✦</b></span>)}</div>
    </div>
  );
}
