# Veddhyaa Metals & Engineering - React One Page Website

Professional Vite + React + Bootstrap one-page starter prepared for Vercel deployment.

## 1. Install

```bash
npm install
npm run dev
```

## 2. Put your downloaded images here

Place your files inside:

```text
public/images/
```

Then update the image paths in `src/siteData.js`.

Recommended filenames:

- `hero.jpg` - wide landscape factory/product banner
- `about.jpg` - company/factory/workshop image
- `product-1.jpg` ... `product-6.jpg`

If you rename the placeholder files to JPG/PNG/WebP, update each corresponding path.

## 3. Update business details

Open `src/siteData.js` and replace:

- phone
- WhatsApp number (digits only, include country code, e.g. `919876543210`)
- email
- address
- working hours
- exact product names and descriptions from IndiaMART

## 4. Replace hero/about images

In `src/styles.css`, change:

```css
url('/images/hero.svg')
```

to:

```css
url('/images/hero.jpg')
```

In `src/App.jsx`, change:

```jsx
<img src="/images/about.svg" ... />
```

to:

```jsx
<img src="/images/about.jpg" ... />
```

## 5. Build before deploy

```bash
npm run build
```

## 6. Deploy to Vercel

Push the project to GitHub, then import that repository into Vercel.
For a standard Vite project, Vercel can deploy it with zero configuration.

Build command: `npm run build`
Output directory: `dist`

No SPA rewrite is required because this project uses anchor sections rather than client-side routes.
