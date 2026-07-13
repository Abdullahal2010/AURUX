# AURUX — Next.js port

This is the AURUX marketing site rebuilt in Next.js (App Router) + React,
converted from the original static `index.html`. Same design, same content,
same demo behaviors — now componentized.

## Setup

```bash
npm install
cp .env.local.example .env.local   # then fill in a real MONGODB_URI later
npm run dev
```

Open http://localhost:3000.

> **Note:** I wasn't able to run `npm install` or test the build myself —
> my sandbox's network access to the npm registry was blocked while I was
> building this. Everything here was hand-written and structurally checked
> (balanced tags/braces, no syntax errors I could catch by eye), but please
> run `npm install && npm run dev` and let me know if anything errors out —
> I'll fix it immediately.

## Structure

```
src/
  app/
    layout.js         — root layout, fonts, metadata
    page.js            — homepage, composes all sections
    globals.css         — all design tokens + styles (ported 1:1 from the old <style> block)
  components/
    Header.js           — nav + mobile menu (client component)
    Hero.js
    AuthSection.js       — login/signup tabs (client component, demo only for now)
    ServicesSection.js   — data-driven: add a service by adding to the `services` array
    ToolsSection.js      — data-driven: add a tool by adding to the `tools` array
    ReviewsSection.js
    HireSection.js       — demo form (client component)
    AskSection.js        — scripted chat demo (client component)
    AboutSection.js
    Footer.js
    RobotMascot.js       — scroll-reactive mascot (client component, IntersectionObserver)
  lib/
    mongodb.js           — Mongoose connection helper, ready for when you wire up real data
  models/
    User.js              — Mongoose schema skeleton for real auth (not wired up yet)
public/
  media-studio.html      — the Media Recorder tool, unchanged
```

## What's real vs. still a demo

- **Auth (login/signup), Hire form, Ask chat** — same as before: functional
  UI, but not connected to a backend. `AuthSection.js` and `HireSection.js`
  have `// TODO(real auth)` / `// TODO` comments marking exactly where to
  wire in real logic once you're ready.
- **MongoDB** — `src/lib/mongodb.js` and `src/models/User.js` are scaffolded
  and ready to use, but nothing calls them yet. Next step when you want
  real auth: add NextAuth (Auth.js) with the Credentials provider, hash
  passwords with `bcryptjs`, and use these files to read/write real users.
- **Media Recorder** — kept as the original static HTML/JS file in `public/`
  and linked to directly (`/media-studio.html`). It's a large, heavily
  imperative app (canvas editing, MediaRecorder API, camera/screen capture)
  that doesn't gain much from a line-by-line React rewrite. It works exactly
  as before. If you want it as a true React page later (so it can share
  state with the rest of the app, e.g. save recordings to a logged-in
  user's account), that's a separate, focused project — happy to help
  when you're ready.
- **Resource Downloader / Chat Platform** — still placeholder cards, same
  as the static site.

## Adding a new service or tool

Open `ServicesSection.js` or `ToolsSection.js` and add an entry to the
array at the top of the file — no need to touch the JSX layout.
