# Homepage_streamlit

This repository now contains two pieces:

- `portfolio-next/` - the main public portfolio site built with React, Vite, and Tailwind.
- `Homepage.py` - a lightweight Streamlit redirect page that forwards visitors from the legacy Streamlit URL to the new public site.

## Local development

### Main site

```bash
cd portfolio-next
npm install
npm run dev
```

### Legacy redirect page

```bash
pip install -r requirements.txt
streamlit run Homepage.py
```

## Public deployment

The main site is prepared for GitHub Pages via `.github/workflows/deploy-portfolio.yml`.

- Production URL: `https://yzhang0328.github.io/Homepage_streamlit/`
- Legacy URL: `https://yujiazhang.streamlit.app/`

Set the repository's GitHub Pages source to `GitHub Actions`, then push to `main` to publish the new site.

The Streamlit app at the legacy URL now acts only as a redirect entry point.
