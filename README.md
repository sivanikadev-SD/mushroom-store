# Mycelium & Co. — HTML Template

A premium, multi-page HTML template for a mushroom farm and mycology supply business. Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

---

## 📁 Folder Structure

```
mycelium-template/
├── assets/
│   ├── css/
│   │   ├── style.css        # Core design system, variables, components
│   │   ├── dark-mode.css    # Dark theme overrides
│   │   └── rtl.css          # Right-to-left layout support
│   ├── js/
│   │   ├── main.js          # Theme toggle, RTL, password toggle, scroll FX
│   │   ├── dashboard.js     # Dashboard tab/section switching logic
│   │   └── plugins/         # (Place any 3rd-party JS plugins here)
│   ├── images/              # (Place image assets here)
│   └── fonts/               # (Place local font files here)
├── pages/
│   ├── index.html           # Home page (classic earthy landing)
│   ├── premium.html         # Home 2 — premium dark-mode landing
│   ├── shop.html            # Product catalogue with filter buttons
│   ├── pricing.html         # 3-tier pricing + FAQ
│   ├── login.html           # Sign-in form  
│   ├── signup.html          # Registration form
│   └── dashboard.html       # Subscriber dashboard (sidebar + sections)
├── documentation/
│   └── index.html           # Template documentation overview
└── README.md
```

---

## 🚀 Getting Started

No build step is required. Simply open any page in a browser:

```
mycelium-template/pages/index.html
```

Or serve locally with a simple static server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then navigate to `http://localhost:8080/pages/index.html`.

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `style.css`:

| Token | Value | Purpose |
|---|---|---|
| `--primary` | `#3A6B40` | Forest green — CTAs, accents |
| `--secondary` | `#9B5C28` | Earthy brown — secondary accents |
| `--bg` | `#F6F1EA` | Warm cream background |
| `--bg-card` | `#FDFAF6` | Card surfaces |
| `--text` | `#1E1812` | Primary text |
| `--gold` | `#C8912A` | Stars, highlights |
| `--font-display` | Playfair Display | Headlines |
| `--font-body` | Crimson Pro | Body copy |
| `--font-ui` | DM Sans | UI labels, buttons |

---

## 🌙 Dark Mode

Dark mode is activated automatically by toggling the `data-theme` attribute on `<html>`:

```js
document.documentElement.setAttribute('data-theme', 'dark');
```

All dark overrides live in `assets/css/dark-mode.css`.

---

## 🔁 RTL Support

Right-to-left layout is toggled by setting the `dir` attribute on `<html>`:

```js
document.documentElement.dir = 'rtl';
```

RTL-specific overrides live in `assets/css/rtl.css`.

---

## 📄 Pages Summary

| File | Description |
|---|---|
| `index.html` | Classic hero, product grid, how-it-works, varieties, testimonials, CTA |
| `premium.html` | Dark luxury landing for the Master plan, marquee scroll, premium feature grid |
| `shop.html` | 8-product catalogue with category filter tabs |
| `pricing.html` | 3-tier pricing cards (Starter / Grower / Master) + FAQ |
| `login.html` | Email + social sign-in form |
| `signup.html` | Registration form with 14-day free trial CTA |
| `dashboard.html` | Full subscriber dashboard: overview, deliveries, variety picker, guides, notifications, settings |

---

## 🛠 Customisation

1. **Change brand colours** — Edit the CSS variables at the top of `style.css`
2. **Add new pages** — Copy any existing page, update the `<title>` and `active` class on the nav link, and drop in your content
3. **Add real images** — Place images in `assets/images/` and replace the emoji placeholders in the product/hero sections
4. **Connect a backend** — The login/signup forms have standard `<input>` fields ready to wire up to any API

---

## 🖋 Credits

- **Fonts:** [Google Fonts](https://fonts.google.com/) — Playfair Display, Crimson Pro, DM Sans
- **Icons:** Inline SVG (no external dependency)
- **Design:** Earthy Luxury aesthetic — warm greens, earthy browns, cream backgrounds
