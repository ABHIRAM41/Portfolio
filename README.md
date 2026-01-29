# 3D Portfolio - J Abhiram Reddy

A modern, interactive 3D portfolio website built with Next.js, React Three Fiber, and Tailwind CSS.

## 🚀 Features

- **Immersive 3D Graphics**: Floating geometric shapes and particle effects using React Three Fiber
- **Smooth Animations**: Framer Motion for seamless transitions and scroll-based animations
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Glassmorphism effects and gradient accents
- **Performance Optimized**: Fast load times and smooth 60fps animations
- **SEO Friendly**: Optimized metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **3D Graphics**: React Three Fiber & @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Netlify

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── 3d/               # 3D components
│   │   ├── Scene.tsx
│   │   ├── FloatingShapes.tsx
│   │   └── ParticleField.tsx
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── sections/         # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       ├── Achievements.tsx
│       └── Contact.tsx
├── data/
│   └── resume.ts         # Portfolio data
├── types/
│   └── index.ts          # TypeScript types
├── utils/
│   └── animations.ts     # Animation variants
└── hooks/
    └── useScrollProgress.ts
```

## 🎨 Customization

All portfolio content can be customized in `src/data/resume.ts`:
- Personal information
- Work experience
- Education
- Skills
- Projects
- Achievements

## 🌐 Deployment

This project is configured for Netlify deployment:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with the default Next.js settings

The `netlify.toml` file is already configured with the correct build settings.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**J Abhiram Reddy**
- LinkedIn: [j-abhiram-reddy](https://linkedin.com/in/j-abhiram-reddy)
- GitHub: [ABHIRAM41](https://github.com/ABHIRAM41)
- Portfolio: Coming soon!
