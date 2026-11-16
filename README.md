# Priyanka Yadav – Web Developer Portfolio

React + Vite + Bootstrap 5 portfolio. The project includes a responsive layout, 3D-inspired hero scene, light/dark theme toggle, animated sections and live website links.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Before publishing

1. Open `src/components/Contact.jsx` and replace `YOUR_EMAIL@example.com`, `YOUR_LINKEDIN_URL` and `YOUR_GITHUB_URL` with your real contact details.
2. Add your resume as `public/resume.pdf` if you want to add a resume download button later.
3. Confirm the project links in `src/data.js` are the correct public URLs and that you are comfortable featuring each website.
4. Your portrait is stored at `public/images/profile.jpg`; replace it with another image using the same filename if needed.

## Deploy to Vercel

Import the Git repository in Vercel. Use the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The `public` folder is copied into the production build automatically. After pushing changes to the connected Git branch, Vercel will create a new deployment.

## Main files

- `src/data.js` – skills, project links, services and work process
- `src/components/Hero.jsx` – introduction and 3D hero scene
- `src/components/Projects.jsx` – live website showcase
- `src/components/Contact.jsx` – contact links; configure your details before launch
- `src/styles/global.css` – theme, layout, 3D and responsive styling
