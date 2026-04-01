import streamlit as st

NEW_SITE_URL = "https://yujiazhanghomepage.netlify.app/"

st.set_page_config(
    page_title="Yujia Zhang",
    page_icon=":link:",
    layout="centered",
)

st.markdown(
    f"""
    <meta http-equiv="refresh" content="0; url={NEW_SITE_URL}">
    <script>
      window.location.replace("{NEW_SITE_URL}");
    </script>
    <style>
      .stApp {{
        background: #f7f5f0;
      }}
      .redirect-shell {{
        max-width: 720px;
        margin: 8vh auto;
        padding: 2.5rem;
        border: 1px solid #d9d4c8;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
      }}
      .redirect-shell h1 {{
        margin: 0 0 1rem 0;
        font-size: 2rem;
        line-height: 1.05;
      }}
      .redirect-shell p {{
        margin: 0 0 1rem 0;
        font-size: 1rem;
        line-height: 1.7;
        color: #4b5563;
      }}
      .redirect-shell a {{
        display: inline-block;
        margin-top: 0.5rem;
        padding: 0.85rem 1.2rem;
        border-radius: 999px;
        background: #111827;
        color: white;
        text-decoration: none;
        font-weight: 600;
      }}
    </style>
    <div class="redirect-shell">
      <p>Portfolio Update</p>
      <h1>This site has moved.</h1>
      <p>
        You are being redirected to Yujia Zhang's new public website.
        If the new page does not open automatically, use the button below.
      </p>
      <a href="{NEW_SITE_URL}">Open the new website</a>
    </div>
    """,
    unsafe_allow_html=True,
)
