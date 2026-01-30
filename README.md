# Find Your Game — Landing Page

A single-page landing for the 5-day email course. ConvertKit captures signups; Fathom tracks the "Email signup" conversion event. Built for GitHub Pages (static HTML/CSS/JS).

## Setup before deploy

Replace the placeholders with your real IDs so the form and analytics work.

### 1. Fathom Analytics

In **index.html**, find the Fathom script in `<head>`:

```html
<script src="https://cdn.usefathom.com/script.js" data-site="SITE_ID" defer></script>
```

- Replace `SITE_ID` with your Fathom site ID (from Fathom dashboard → Site → Embed code).
- In the Fathom dashboard, create an event named **Email signup** (or change the name in `script.js` to match).

### 2. ConvertKit form

In **index.html**, find the ConvertKit embed in the signup section:

```html
<script async data-uid="YOUR_FORM_ID" src="https://YOUR-FORM-URL.convertkit.com/YOUR_FORM_SCRIPT.js"></script>
```

- In ConvertKit: **Grow → Landing Pages & Forms** → select your form → **Embed**.
- Copy the JavaScript embed code and replace the entire `<script ...></script>` above with it (so `data-uid` and `src` are your real form ID and script URL).

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: **main** (or **master**), folder: **/ (root)**.
4. Save. The site will be at `https://<username>.github.io/<repo>/` (or your custom domain).

## Local preview

Open `index.html` in a browser, or use a simple static server:

```bash
npx serve .
```

Then open the URL shown (e.g. http://localhost:3000). The ConvertKit form will only work on a real URL once the embed script is updated; Fathom will not send events from `localhost` unless you allow it in Fathom’s script settings.

## Files

- **index.html** — Full page copy, sections, ConvertKit embed, Fathom script.
- **styles.css** — Layout and typography.
- **script.js** — Watches for ConvertKit success message and fires `fathom.trackEvent('Email signup')` once per signup.
