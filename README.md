# Homepage

This repository contains two pieces:

- `portfolio-next/` - the main public portfolio site built with React, Vite, and Tailwind.
- `Homepage.py` - a lightweight Streamlit redirect page that forwards visitors from the legacy Streamlit URL to the main site.
- `netlify-redirect/` - a tiny static redirect site for the legacy Netlify URL.

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

The main public site is deployed on GitHub Pages:

- Production URL: `https://yujiazhang.co.uk/`
- Legacy URL: `https://yujiazhang.streamlit.app/`
- Legacy Netlify URL: `https://yujizhanghomepage.netlify.app/`

The Streamlit app at the legacy URL acts as a redirect entry point to the GitHub Pages site.
The Netlify site is configured as a pure redirect to the same primary URL.

## GitHub Pages

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`
to build `portfolio-next/` and publish the static site to GitHub Pages.

Deployment behavior:

- The workflow runs automatically on every push to `main`.
- The workflow can also be started manually from the GitHub `Actions` tab.
- Pushing to `main` updates the live site because the workflow file currently watches only `main`.
- If you want deployments from a different branch later, update `.github/workflows/deploy-pages.yml`.

Current setup:

1. GitHub Pages source: `GitHub Actions`
2. Custom domain: `yujiazhang.co.uk`
3. HTTPS: enabled
4. Legacy redirect: `yujiazhang.streamlit.app` -> `https://yujiazhang.co.uk/`
5. Netlify redirect: `yujizhanghomepage.netlify.app` -> `https://yujiazhang.co.uk/`

Important:

- GitHub Pages on the free plan requires the repository to be public.
- Cloudflare DNS records for GitHub Pages should stay `DNS only`, not proxied.
- If DNS is changed in the future, it can take time to propagate.
- Streamlit Community Cloud apps can still feel slow after inactivity because sleeping apps hibernate and need to wake up again.
