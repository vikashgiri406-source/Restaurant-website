<div align="center">

# 🍷 L'Aura Bistro & Lounge

### *Where Haute Cuisine Meets Culinary Artistry*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Design-Mobile--First-success?style=for-the-badge&logo=google-chrome&logoColor=white)](#-responsive-design--accessibility)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

A modern, luxurious, and fully responsive fine-dining restaurant website built with pure semantic **HTML5**, modern **CSS3**, and modular **JavaScript (ES6+)**. Features an interactive categorized menu, pop-up dish preview modals with sommelier pairings, a table reservation system with instant confirmation voucher tickets, and a responsive mobile drawer menu.

[Explore Features](#-key-features) • [Quick Start](#-quick-start) • [Project Structure](#-project-structure) • [Customization](#-customization-guide) • [Browser Support](#-browser-support)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Website Sections](#-website-sections)
- [Technologies & Design System](#-technologies--design-system)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Customization Guide](#-customization-guide)
- [Responsive Design & Accessibility](#-responsive-design--accessibility)
- [Browser Support](#-browser-support)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview

**L'Aura Bistro & Lounge** is designed to provide an opulent and frictionless digital presence for gourmet restaurants, bistros, luxury lounges, and chef-table dining venues. 

The website delivers an engaging guest journey—from browsing seasonal tasting menus and sommelier cellar pairings to securing an online table reservation with real-time feedback.

---

## ✨ Key Features

- 🎨 **Luxury Visual Design & Glassmorphism**: High-contrast obsidian dark palette (`#0c0e12`) accented with warm champagne gold (`#c5a059`), subtle borders, and smooth backdrop-blur effects.
- 📱 **Mobile-First & Touch-Optimized**: Fluid typography with CSS `clamp()`, flexible CSS Grid/Flexbox layouts, and an animated off-canvas drawer navigation.
- 🧭 **Intelligent Navigation & ScrollSpy**: Sticky navigation bar that blurs on scroll and dynamically highlights the current section as the user navigates.
- 🍽️ **Interactive Gastronomy Menu**:
  - Category filtering (*All Dishes*, *Starters & Tapas*, *Grills & Mains*, *Artisanal Pasta*, *Decadent Desserts*, *Craft Cocktails*).
  - Dietary badges (*GF*, *Vegetarian*, *Chef's Choice*, *Signature*).
  - Calorie indicator and instant pricing tags.
- 🔍 **Dish Quick-View Modal**:
  - Interactive popup displaying dish ingredients, allergen notices, preparation time, and **Sommelier Wine Pairing** recommendations.
- 📅 **Interactive Table Reservation Engine**:
  - Prevents booking past dates with automatic date constraints.
  - Multi-parameter options: Party Size (1 to 10+ guests), Service Slots (Lunch & Dinner), Seating Zones (*Main Dining*, *Garden Terrace*, *Rooftop Lounge*, *Private Wine Cellar*), and Special Occasions.
  - Generates an **Instant Reservation Voucher / Ticket** with a unique reference ID (`LA-XXXXXX`) and a printable slip.
- 💬 **Interactive Concierge & Contact Form**: Complete with validation and realistic floating **Toast Notifications**.
- 📧 **Culinary Journal Newsletter**: Micro-interaction toast confirmation for seasonal menu launches.
- ⬆️ **Floating Back-to-Top Action**: Automatically appears on scroll with smooth scrolling back to the hero section.

---

## 🗺️ Website Sections

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Navigation (Brand Logo, Nav Links, Reserve CTA) │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Headline, Dual CTAs, Rating, Highlights)   │
├─────────────────────────────────────────────────────────────┤
│ 3. Quick Info Bar (Service Hours, Location, Direct Line)    │
├─────────────────────────────────────────────────────────────┤
│ 4. About Us (Heritage Story, 15+ Years Badge, Chef Profile) │
├─────────────────────────────────────────────────────────────┤
│ 5. Seasonal Menu (Filter Tabs, Cards, Detail Modals)        │
├─────────────────────────────────────────────────────────────┤
│ 6. Signature Experience (Chef's Table & Tasting Highlights) │
├─────────────────────────────────────────────────────────────┤
│ 7. Book Table (Interactive Reservation & Voucher Modal)     │
├─────────────────────────────────────────────────────────────┤
│ 8. Connoisseur Reviews (Critic & Patron Testimonials)       │
├─────────────────────────────────────────────────────────────┤
│ 9. Contact & Schedule (Weekly Hours, Address, Message Form) │
├─────────────────────────────────────────────────────────────┤
│ 10. Footer (Social Links, Quick Nav, Newsletter, Legal)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technologies & Design System

### Technology Stack
- **HTML5**: Semantic and accessible markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: CSS Custom Properties (variables), CSS Grid, Flexbox, Backdrop Filter, Keyframe Animations, Media Queries.
- **JavaScript (ES6+)**: Pure Vanilla JavaScript with zero external runtime dependencies.
- **Typography**: 
  - *Headings*: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Editorial Serif)
  - *Body Text*: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Modern Geometric Sans)
- **Icons**: [Font Awesome 6](https://fontawesome.com/) (CDN)

### Color Palette

| Token | Hex Value | Preview | Role |
| :--- | :--- | :---: | :--- |
| `--color-primary` | `#c5a059` | ![#c5a059](https://via.placeholder.com/15/c5a059/000000?text=+) | Primary Champagne Gold Accent |
| `--color-primary-light` | `#dfb76c` | ![#dfb76c](https://via.placeholder.com/15/dfb76c/000000?text=+) | Gold Hover & Highlight State |
| `--color-bg-main` | `#0c0e12` | ![#0c0e12](https://via.placeholder.com/15/0c0e12/000000?text=+) | Deep Obsidian Background |
| `--color-bg-secondary` | `#13171f` | ![#13171f](https://via.placeholder.com/15/13171f/000000?text=+) | Secondary Section Background |
| `--color-bg-card` | `#181d26` | ![#181d26](https://via.placeholder.com/15/181d26/000000?text=+) | Elevated Cards & Containers |
| `--color-text-primary` | `#f5f6f8` | ![#f5f6f8](https://via.placeholder.com/15/f5f6f8/000000?text=+) | Crisp Heading & Body Typography |
| `--color-text-secondary` | `#a0a7b5` | ![#a0a7b5](https://via.placeholder.com/15/a0a7b5/000000?text=+) | Subtitles, Paragraphs & Metadata |

---

## 📂 Project Structure

```text
laura-bistro-restaurant/
│
├── index.html              # Core semantic HTML layout and interactive modal templates
│
├── css/
│   └── style.css           # Design tokens, typography, glassmorphism, layouts, and media queries
│
├── js/
│   └── app.js              # ScrollSpy, mobile drawer, menu filters, booking engine & toasts
│
└── README.md               # Comprehensive documentation and project guide
```

---

## 🚀 Quick Start

No build tools, package managers, or compilers are required. The project runs out of the box.

### Option 1: Direct File Launch
Simply double-click `index.html` or open it with your preferred browser.

### Option 2: Local Static Server

#### Using Python (Built-in)
```bash
# Navigate to the project directory
cd laura-bistro-restaurant

# Run a lightweight local HTTP server
python -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

#### Using Node.js (`npx serve`)
```bash
npx serve .
```

#### Using VS Code Live Server
Right-click on `index.html` inside VS Code and select **"Open with Live Server"**.

---

## ⚙️ Customization Guide

### 1. Changing Theme Colors
Open `css/style.css` and update the `:root` design tokens:
```css
:root {
  --color-primary: #c5a059;       /* Change your accent brand color */
  --color-primary-light: #dfb76c; /* Lighter accent variant */
  --color-bg-main: #0c0e12;       /* Main background */
}
```

### 2. Adding / Modifying Menu Dishes
1. **HTML Card** (`index.html`): Add a new `.menu-card` element with the matching `data-category`:
   ```html
   <div class="menu-card" data-category="mains">
     <!-- Card Image, Badges, Price, Title, and Description -->
     <button class="quick-view-btn" data-dish="my-custom-dish">Details</button>
   </div>
   ```
2. **Modal Data** (`js/app.js`): Add the dish metadata entry to the `dishData` dictionary:
   ```javascript
   'my-custom-dish': {
     title: 'Pan-Roasted Duck Breast',
     price: '$46',
     image: 'https://images.unsplash.com/...',
     description: 'Served with cherry port reduction...',
     pairing: 'Sommelier Pair: 2019 Pinot Noir',
     allergens: 'Gluten-Free, Dairy',
     prepTime: '20 mins'
   }
   ```

### 3. Updating Business Details & Hours
Update the quick info bar, service schedule table, and contact card in `index.html` with your custom phone number, address, and schedule.

---

## 📱 Responsive Design & Accessibility

- **Breakpoints**:
  - `Desktop / Widescreen`: `> 992px` (Multi-column grids, full navigation bar)
  - `Tablets / Small Laptops`: `640px – 992px` (Adaptive 2-column grids, mobile toggle)
  - `Mobile Smartphones`: `< 640px` (Single-column layout, touch-friendly inputs, full-width buttons)
- **Accessibility**:
  - Proper ARIA attributes (`aria-label`, semantic landmarks).
  - Clear color contrast compliant with WCAG standards.
  - Keyboard focusable form controls and interactive buttons.

---

## 🌐 Browser Support

| Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ✅ Latest | ✅ Latest | ✅ Latest | ✅ Latest | ✅ Latest | ✅ Latest |

---

## 📄 License & Acknowledgments

- **License**: Released under the [MIT License](https://opensource.org/licenses/MIT). Free for personal and commercial use.
- **Photography**: Curated gourmet culinary assets from [Unsplash](https://unsplash.com/).
- **Icons**: Provided by [Font Awesome](https://fontawesome.com/).
- **Fonts**: Curated via [Google Fonts](https://fonts.google.com/).

---

<div align="center">
  <sub>Crafted with precision for <strong>L'Aura Bistro & Lounge</strong>. Designed for modern fine dining experiences.</sub>
</div>
