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

The main public site was originally deployed on Netlify:

- Production URL: `https://yujiazhanghomepage.netlify.app/`
- Legacy URL: `https://yujiazhang.streamlit.app/`

The Streamlit app at the legacy URL acts as a redirect entry point to the Netlify site.

## GitHub Pages migration

This repo now includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`
to build `portfolio-next/` and publish the static site to GitHub Pages on every push to
`main`.

Suggested free setup:

1. In GitHub, open this repository and go to `Settings -> Pages`.
2. Set `Source` to `GitHub Actions`.
3. Wait for the `Deploy Portfolio To GitHub Pages` workflow to finish.
4. In the same `Pages` settings page, add the custom domain `yujiazhang.co.uk`.
5. Update DNS at your domain registrar to point `yujiazhang.co.uk` to GitHub Pages.
6. Keep `yujiazhang.streamlit.app` as a simple redirect to `https://yujiazhang.co.uk/`.

Important:

- GitHub Pages on the free plan requires the repository to be public.
- DNS changes can take time to propagate.
- Once the custom domain works on GitHub Pages, Netlify can be removed from the DNS setup.
