import streamlit as st

st.set_page_config(layout="wide")

with st.container():
    text_column, image_column = st.columns((10, 7))

    with text_column:
        st.markdown("<div style='font-size: 18px; line-height: 1.75;'>", unsafe_allow_html=True)

        st.markdown("Modern trading and asset allocation increasingly rely on scientific and quantitative methodologies, rather than traditional experience-based approaches.", unsafe_allow_html=True)

        st.markdown("In trading and asset allocation, data-driven forecasting and mathematical formulation are pivotal. These offer a structured and efficient way to predict price trends, assist decision-making, optimize portfolios, and manage risks while adhering to regulatory requirements.", unsafe_allow_html=True)

        st.markdown("Developing effective investment strategies requires analyzing financial data, making predictions, and formulating optimization problems to balance competing objectives—maximizing returns and minimizing risk within specified constraints.", unsafe_allow_html=True)

        st.markdown("<hr />", unsafe_allow_html=True)

        st.markdown("#### 1. Financial Data Analysis and Preparation", unsafe_allow_html=True)

        st.markdown("""
        - Extract insights from complex datasets using Excel and SQL.
        - Proficient in Python, MATLAB, AWS, and Git for data processing and modeling.
        - Apply test-driven development: unit, integration, behavioral, and regression testing.
        - Passed **CFA Level I**; actively pursuing further financial qualifications.
        - Currently work in a modeling and development team, solving problems methodically.
        """, unsafe_allow_html=True)

        st.markdown("<hr />", unsafe_allow_html=True)

        st.markdown("#### 2. Price Forecasting and Mathematical Optimization", unsafe_allow_html=True)

        st.markdown("""
        - Design both linear and nonlinear time-series forecasting models.
        - Build financial models with assumptions, back-testing, and sensitivity analysis.
        - Ph.D. in optimization theory and applications, with deep expertise in:
            - Multi-asset portfolio optimization balancing risk and return.
            - Embedding regulatory requirements into optimization frameworks.
            - Strategies for hedging interest rate and duration risk.
            - Analyzing market signals and detecting anomalies for risk management.
        """, unsafe_allow_html=True)

        st.markdown("</div>", unsafe_allow_html=True)

    with image_column:
        st.image("images/quantitative_finance.png")  # Replace with uploaded image if needed
