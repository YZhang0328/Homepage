import streamlit as st

NEW_SITE_URL = "https://yujiazhang.co.uk/"

st.set_page_config(
    page_title="Redirecting...",
    page_icon=":link:",
)

st.markdown(
    f"""
    <meta http-equiv="refresh" content="0; url={NEW_SITE_URL}">
    <script>
      window.location.replace("{NEW_SITE_URL}");
    </script>
    <p><a href="{NEW_SITE_URL}">Continue to yujiazhang.co.uk</a></p>
    """,
    unsafe_allow_html=True,
)
