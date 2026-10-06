# roetod.github.io

Personal portfolio of **Taha**: developer, photographer and videographer.

**Live site:** https://roetod.github.io

## About

A small, fast, single-page portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies.

It covers my work in:

- C# and .NET (WPF, WinForms)
- Python backend (Django, DRF, FastAPI)
- Frontend development
- Web security
- Photography and videography

## Features

- Camera focus-lock intro animation on the hero
- Dark theme (black and blue) and light theme (white and blue)
- Follows the system theme by default, with a toggle that remembers your choice
- Fully responsive, from phones to wide screens
- Respects `prefers-reduced-motion`
- Visible keyboard focus and semantic markup

## Project structure

```
.
├── index.html   # page structure and content
├── style.css    # themes, layout and animations
├── script.js    # theme toggle and footer year
└── README.md
```

## Run locally

No installation needed. Open `index.html` in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

The site is hosted on GitHub Pages. Pushing to the `main` branch updates it automatically (Settings → Pages → Deploy from a branch → `main` / root).

## Customize

- **Colors:** edit the CSS variables at the top of `style.css`
- **Content:** edit the text in `index.html`
- **Font:** change the Google Fonts link in `index.html` and the `font-family` in `style.css`

## Contact

- GitHub: [@roetod](https://github.com/roetod)
- Telegram: [@roetod](https://t.me/roetod)
- Email: m.taha.baghiha@gmail.com

## License

© Taha. All rights reserved. Please do not copy or redistribute this site without permission.
