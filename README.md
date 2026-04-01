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

The main public site is now deployed on Netlify:

- Production URL: `https://yujiazhanghomepage.netlify.app/`
- Legacy URL: `https://yujiazhang.streamlit.app/`

The Streamlit app at the legacy URL acts as a redirect entry point to the Netlify site.
