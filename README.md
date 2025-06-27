# 1rstNoelle - Real Estate Fix & Flip Website

A professional website for 1rstNoelle, a premium fix & flip real estate company. Built with modern web technologies and featuring a dark, sophisticated design system.

## 🚀 Live Demo

Visit the live website: [1rstNoelle on GitHub Pages](https://[username].github.io/1rstNoelle)

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS v4** - Utility-first CSS framework
- **JavaScript** - Interactive functionality
- **GitHub Actions** - Automated deployment

## 🎨 Design System

The website implements a custom design system with:
- **Dark Theme**: Professional dark backgrounds with warm accent colors
- **Color Palette**: Based on `prd/design-system.json`
  - Primary: Various shades of gray (`#0f0f0f` to `#404040`)
  - Accent: Warm gold (`#d4c4b0`)
  - Text: White, light gray, and muted tones
- **Typography**: Inter font family with carefully crafted hierarchy
- **Responsive Design**: Mobile-first approach with breakpoints

## 📂 Project Structure

```
1rstNoelle/
├── index.html              # Main website file
├── src/
│   └── styles.css          # Tailwind CSS source with design system colors
├── dist/
│   └── styles.css          # Compiled CSS (auto-generated)
├── prd/
│   └── design-system.json  # Design system specifications
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/1rstNoelle.git
   cd 1rstNoelle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```
   This will start Tailwind in watch mode, automatically rebuilding CSS when you make changes.

4. **Serve locally**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have serve installed)
   npx serve .
   ```

5. **Open in browser**
   Navigate to `http://localhost:8000`

### Building for Production

```bash
npm run build
```

This creates an optimized, minified CSS file in `dist/styles.css`.

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic deployment**
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab for deployment status
   - Site will be available at `https://bipinshashi.github.io/1rstNoelle`

### Manual Deployment

If you prefer manual deployment:

1. **Remove dist/ from gitignore**
   ```bash
   # Edit .gitignore and remove the "dist/" line
   ```

2. **Build and commit**
   ```bash
   npm run build
   git add .
   git commit -m "Add built CSS for GitHub Pages"
   git push
   ```

## 🎯 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern CSS**: Utilizes Tailwind v4 with custom design system
- **Performance Optimized**: Minified CSS and optimized assets
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **SEO Friendly**: Proper meta tags and structured content

## 🎨 Customization

### Colors

The color system is defined in `src/styles.css` and matches the design system in `prd/design-system.json`. To customize:

1. **Update design system** (`prd/design-system.json`)
2. **Modify CSS variables** (`src/styles.css`)
3. **Rebuild** (`npm run build`)

### Content

Edit `index.html` to update:
- Company information
- Portfolio projects
- Contact details
- Service offerings

