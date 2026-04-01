# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Yujia Zhang, built with Streamlit and deployed on Streamlit Community Cloud. The site showcases research experience, publications, and curated industry news (fintech events, AI agents, market notes).

## Running the App

```bash
# Activate virtual environment
source venv/Scripts/activate   # Windows (Git Bash)

# Run locally
streamlit run Homepage.py
```

The app requires Python 3.11 (matching the venv). Dependencies are in `requirements.txt`; install with `pip install -r requirements.txt`.

## Architecture

**Streamlit multi-page app** using the `pages/` directory convention:

- `Homepage.py` — Entry point. Profile photo (circle-cropped via OpenCV at runtime), bio, and professional summary.
- `pages/2_📑Past Research Experience.py` — Academic publications and ML research, rendered with raw HTML via `st.markdown(unsafe_allow_html=True)`.
- `pages/3_📰Market News.py` — Tabbed news page (Fintech Events, AI Agents, Market News) with heavy custom CSS and generated article summaries.
- `news_utils.py` — All news logic: Google News RSS fetching/parsing, article generation with theme-based scoring, Unsplash image fetching, SVG cover generation. Uses `@st.cache_data` with a 3-day TTL.
- `style/style.css` — Global CSS loaded by Homepage.py (hides Streamlit branding).
- `config.toml` — Disables Streamlit file watcher (`fileWatcherType = "none"`).
- `unfinished/` — Draft pages not yet wired into the app.

**Key patterns:**
- Content is rendered almost entirely through `st.markdown(..., unsafe_allow_html=True)` with inline HTML/CSS rather than native Streamlit components.
- The Market News page (`pages/3_📰Market News.py`) defines all its CSS inline in a single large `st.markdown` block at the top.
- `news_utils.py` contains hardcoded event data (`LONDON_FINTECH_EVENTS`) and tab/theme definitions (`GENERATED_TAB_DEFINITIONS`) that drive the article generation pipeline.
- Unsplash integration requires `UNSPLASH_ACCESS_KEY` environment variable; gracefully degrades to SVG covers when missing.

## Deployment

- Hosted on **Streamlit Community Cloud**, which auto-deploys from the `main` branch.
- A GitHub Actions workflow (`.github/workflows/keepalive.yml`) pushes empty commits every 9 hours to prevent the Streamlit Cloud app from sleeping.
