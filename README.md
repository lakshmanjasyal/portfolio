<div align="center">

# 🚀 Lakshman Narayan Jasyal — Portfolio

**Personal portfolio website built with React + Vite**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-7c6cff?style=for-the-badge&logo=vercel)](https://github.com/lakshmanjasyal/portfolio)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-e84b4b?style=for-the-badge&logo=framer)](https://www.framer.com/motion)

</div>

---

## ✨ Features

- 🎨 **Dark glassmorphism design** with purple & cyan gradient palette
- ⚡ **Smooth animations** powered by Framer Motion
- 🌌 **Particle canvas background** with interactive floating elements
- ⌨️ **Typing animation** in the hero section
- 📱 **Fully responsive** — mobile, tablet & desktop
- 🔮 **Scroll-triggered fade-ins** on every section
- 🗂️ **Single data file** — update all content from one place

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite 7** | Build tool & dev server |
| **Framer Motion** | Animations & transitions |
| **CSS Modules** | Scoped component styling |
| **Lucide React** | Icon library |
| **Outfit (Google Fonts)** | Typography |

---

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Profile photo
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Achievements.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── ParticlesCanvas.jsx
│   ├── data/
│   │   └── portfolio.js         # ⭐ All personal data lives here
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                # Global design tokens & utilities
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Run locally

```bash
# Clone the repo
git clone https://github.com/lakshmanjasyal/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The `dist/` folder is ready to deploy.

---

## ✏️ How to Update Content

All personal data lives in **one file**:

```
src/data/portfolio.js
```

| What to update | Where in the file |
|---|---|
| Name, email, links | `personal` object |
| Bio, taglines | `personal.bio`, `personal.taglines` |
| Add a new project | `projects` array |
| Add experience | `experience` array |
| Add a skill | `skills.languages` or `skills.tools` |
| Add an achievement | `achievements` array |
| Add a certification | `skills.certifications` |

Just save the file and the dev server auto-refreshes. ⚡

---

## 📦 Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your `portfolio` repo
4. Vercel auto-detects Vite — click **Deploy**
5. 🎉 Live in ~30 seconds!

Every `git push` after that auto-deploys the latest version.

---

## 📬 Contact

| | |
|---|---|
| 📧 Email | [lakshmanjasyal77777@gmail.com](mailto:lakshmanjasyal77777@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/lakshman-jasyal](https://www.linkedin.com/in/lakshman-jasyal/) |
| 🐙 GitHub | [github.com/lakshmanjasyal](https://github.com/lakshmanjasyal) |
| 📍 Location | Kochi, Kerala (originally from Jammu, J&K) |

---

<div align="center">

© 2026 · Built by **lakshh_73** with React + ❤️

</div>
