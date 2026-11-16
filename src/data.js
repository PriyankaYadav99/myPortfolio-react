// Placeholder "screenshots" drawn as inline SVG – replace with real images in /public/images
export const mock = (title, a, b) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="500" fill="#120f18"/><rect width="800" height="36" fill="#1c1722"/><circle cx="20" cy="18" r="5" fill="#ff5f57"/><circle cx="38" cy="18" r="5" fill="#febc2e"/><circle cx="56" cy="18" r="5" fill="#28c840"/><rect x="40" y="70" width="720" height="190" rx="14" fill="url(#g)"/><text x="70" y="150" font-family="sans-serif" font-size="34" font-weight="700" fill="#fff">${title}</text><rect x="70" y="175" width="300" height="12" rx="6" fill="#ffffff66"/><rect x="70" y="200" width="220" height="12" rx="6" fill="#ffffff44"/><rect x="40" y="290" width="220" height="170" rx="12" fill="#241c2b"/><rect x="290" y="290" width="220" height="170" rx="12" fill="#241c2b"/><rect x="540" y="290" width="220" height="170" rx="12" fill="#241c2b"/></svg>`);

export const avatar = 'data:image/svg+xml;utf8,' + encodeURIComponent(
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6b35"/><stop offset="1" stop-color="#fbbf24"/></linearGradient></defs><rect width="400" height="480" fill="url(#g)"/><circle cx="200" cy="180" r="70" fill="#ffffffcc"/><path d="M60 480c0-100 60-150 140-150s140 50 140 150z" fill="#ffffffcc"/></svg>`);

export const links = [['about','About'],['skills','Skills'],['projects','Projects'],['experience','Journey'],['services','Services'],['process','Process'],['contact','Contact']];

export const skills = {
  Frontend: [['HTML5','Expert'],['CSS3','Expert'],['JavaScript','Advanced'],['Bootstrap 5','Expert'],['React.js','Advanced'],['jQuery','Advanced'],['AJAX','Advanced']],
  Backend: [['PHP','Advanced'],['MySQL','Advanced'],['WordPress','Expert']],
  Other: [['Responsive Web Design','Expert'],['Website Optimization','Advanced'],['Cross-Browser Compatibility','Advanced'],['UI Implementation','Expert'],['SEO-Friendly Development','Advanced'],['Website Maintenance','Advanced']],
};

export const projects = [
  ['NGO / Charity Website','Donation-focused site with campaigns, stories and volunteer sign-up.',['WordPress','PHP','Bootstrap'],'#ec4899','#fbbf24',true],
  ['Business Corporate Website','Clean multi-page corporate presence with service and team pages.',['HTML5','CSS3','jQuery'],'#ff6b35','#fbbf24',false],
  ['Digital Agency Website','Bold, animation-rich agency site with case studies.',['React','Bootstrap','AJAX'],'#f43f5e','#ff8a3d',true],
  ['E-commerce Website','Product catalogue, cart and order management.',['PHP','MySQL','JavaScript'],'#f97316','#ec4899',true],
  ['Personal Portfolio Website','Lightweight portfolio with smooth reveal effects.',['React','CSS3'],'#fb7185','#fbbf24',true],
  ['Landing Page Design','High-converting, fast-loading campaign landing page.',['HTML5','CSS3','JavaScript'],'#ff8a3d','#fbbf24',false],
].map(([title,desc,tech,a,b,gh]) => ({ title, desc, tech, gh, img: mock(title,a,b) }));

export const services = [
  ['🌐','Website Development','End-to-end websites built for speed, clarity and growth.'],
  ['🎨','Frontend Development','Pixel-accurate, interactive interfaces with React and modern CSS.'],
  ['🗄️','Backend Development','Secure PHP and MySQL back ends with clean data handling.'],
  ['🧩','WordPress Development','Custom themes, plugins and easy-to-manage content.'],
  ['📱','Responsive Design','Layouts that look great on every screen size.'],
  ['🔄','Website Redesign','Modernise outdated sites without losing your SEO.'],
  ['🛠️','Website Maintenance','Updates, fixes and performance care, month after month.'],
  ['🚀','Landing Pages','Focused pages designed to turn visitors into enquiries.'],
];

export const steps = [
  ['Understanding Requirements','Goals, audience and scope, clearly defined.'],
  ['Planning & Strategy','Structure, content flow and tech choices.'],
  ['Design & Development','Clean, responsive, reusable code.'],
  ['Testing & Optimization','Cross-browser, device and speed checks.'],
  ['Launch & Support','Smooth go-live and ongoing care.'],
];

export const duties = ['Developing responsive websites','Working on frontend and backend functionality','Building and customizing WordPress websites','Implementing modern website layouts','Working with PHP and MySQL','Improving website performance and usability','Maintaining and updating existing websites'];

export const testimonials = [
  ['Sample Client A','Founder, Demo Studio','Sample feedback: communicative, quick to understand the brief and delivered a polished site.'],
  ['Sample Client B','Manager, Demo Co.','Sample feedback: great attention to detail and responsive design across all devices.'],
  ['Sample Client C','Director, Demo NGO','Sample feedback: made our site easy to update and noticeably faster.'],
];
