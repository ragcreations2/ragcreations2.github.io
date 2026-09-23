# Sanjay Interiors – Website

A free, static, single-page website for an interior design business. No frameworks, no build step, no server – just HTML, CSS and JavaScript, so it can be hosted for $0 on GitHub Pages, Cloudflare Pages or Netlify.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole website (all sections) |
| `styles.css` | Design, colours, responsive layout |
| `script.js` | Mobile menu + WhatsApp enquiry form |
| `favicon.svg` | Browser tab icon |
| `404.html` | Friendly "page not found" page |
| `robots.txt`, `sitemap.xml` | Tell Google what to index |

## Deploy free on GitHub Pages

1. Create a free account at https://github.com (choose a username, e.g. `sanjayinteriors`).
2. Create a new **public** repository named exactly `<username>.github.io` (e.g. `ragcreations2.github.io`).
3. Upload all files in this folder to the repository (drag-and-drop in the browser works).
4. Go to **Settings → Pages**, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, Save.
5. After 1–2 minutes the site is live worldwide at `https://<username>.github.io` with HTTPS included.

## Before going live – things to change

- **Phone / WhatsApp number**: `919876543210` in `script.js` and `index.html` (search for it).
- **Email, address, hours**: Contact section of `index.html`.
- **Site URL**: replace `https://ragcreations2.github.io/` in `index.html`, `robots.txt` and `sitemap.xml` with your real URL.
- **Portfolio photos**: the `.tile-1` … `.tile-6` gradients in `styles.css` – swap for `background-image: url("images/your-photo.jpg")`. Compress photos to under 300 KB first (https://squoosh.app).
- **Hero / About artwork**: `.room-*` and `.frame-*` blocks – replace with real photos the same way, or keep as decoration.
- **Social links**: footer of `index.html`.
- **Testimonials and stats**: use real numbers and quotes only.

## Get found on Google (free)

1. https://search.google.com/search-console → add your site → verify → submit `sitemap.xml`.
2. https://business.google.com → create a Google Business Profile with the website link.
3. Put the website link on Instagram / Facebook.

## Optional later upgrade (~$10/year)

Buy `sanjayinteriors.com` from a registrar and add it under **Settings → Pages → Custom domain**. Everything else stays free.
