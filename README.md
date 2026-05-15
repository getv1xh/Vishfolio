# Vishfolio
Preview : https://vfolio.projects.vishlabs.xyz

<p align="center">
  A cinematic developer portfolio crafted with smooth motion, premium UI systems, and modern frontend tooling.
</p>

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1496871967813533776/1504806980521431111/Screenshot_2026-05-15_at_4.43.45_PM.png?ex=6a085436&is=6a0702b6&hm=52e1dd18f0efee96201d180ef0558c8f73b4a5e2b73ec99d8c773315be0be2ac&" width="92%" alt="Vishfolio Preview" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Three.js-111111?style=for-the-badge&logo=threedotjs" />
</p>

---

## Overview

Vishfolio is a modern developer portfolio focused on:
- cinematic layouts
- subtle interaction
- glassmorphism
- motion-driven UI
- premium typography
- responsive frontend systems

Built for developers who want a clean and visually polished digital identity.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Motion system |
| GSAP | Advanced animations |
| React Three Fiber | 3D rendering |
| Drei | R3F helpers |
| Lenis | Smooth scrolling |

---

## Features

- Smooth scrolling experience
- Interactive project cards
- Motion-based UI transitions
- Responsive layout system
- Premium dark visual design
- Floating interaction elements
- Glassmorphism surfaces
- 3D hero atmosphere
- Clean developer-focused structure

---

## Screenshots


<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1496871967813533776/1504806980060053515/Screenshot_2026-05-15_at_4.44.00_PM.png?ex=6a085436&is=6a0702b6&hm=28033dbc7b2f4513541ace88a91c0e02102098a211b284f39b64717d8d9875db&" width="92%" />
</p>

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/1496871967813533776/1504806979577843782/Screenshot_2026-05-15_at_4.44.11_PM.png?ex=6a085435&is=6a0702b5&hm=9314756b14ff7d83e29a15af6bcb0bc996991eb5ae36b8fb5f4511cf14f732e3&" width="92%" />
</p>


---

# Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/vishfolio.git
```

Move into the project directory:

```bash
cd vishfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Project Structure

```bash
app/
 ├── globals.css
 ├── layout.tsx
 └── page.tsx


```

---

# Customization Guide

This project is intentionally easy to edit and personalize.

## Edit Personal Information

Open:

```txt
app/page.tsx
```

Change:
- hero heading
- description
- contact links
- technologies
- project cards
- section content

---

## Change Theme / Colors

Open:

```txt
app/globals.css
```

Main variables:

```css
:root {
  --background: #050607;
  --foreground: #eef5f8;
  --cyan-soft: rgba(125, 227, 255, 0.18);
}
```

You can fully re-theme the portfolio here.

---

## Remove the 3D Orb Scene

Inside:

```txt
app/page.tsx
```

Remove:

```tsx
<Scene />
```

This disables:
- the floating orb
- cinematic glow
- 3D background atmosphere

You can also remove:

```tsx
<FloatingTech />
```

for a cleaner minimal layout.

---

## Edit Projects

Inside:

```tsx
const projects = [...]
```

Update:
- titles
- descriptions
- stacks
- gradients

---

## Edit Technologies

Inside:

```tsx
const technologies = [...]
```

These control the floating tech pills around the hero section.

---

## Motion & Animation

Animation systems use:
- Framer Motion
- GSAP
- Lenis

Main animation logic lives in:

```txt
app/page.tsx
```

Search for:
- `motion.div`
- `gsap`
- `useMotionValue`
- `whileHover`

---

## Replace Screenshots

Add your own images inside:

```txt
public/
```

Recommended:
- `preview.png`
- `hero.png`
- `projects.png`

---

# Design Direction

Inspired by:
- Linear
- Vercel
- Framer
- Apple developer pages
- Modern cinematic UI systems

Focused on restraint, spacing, depth, and smooth interaction.

---

# Deployment

Deploy instantly on:

- Vercel
- Netlify
- Railway

---

# Author
[Built by Vish.](https://www.vishlabs.xyz)

Focused on crafting smooth developer experiences with modern frontend systems.

---

<p align="center">
  Designed with motion, clarity, and restraint.
</p>
