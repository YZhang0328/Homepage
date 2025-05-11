import streamlit as st

st.set_page_config(layout="wide")

# ---- Trading and Asset Allocation Section ----

with st.container():
    text_column, image_column = st.columns((10, 7))
    with text_column:
        st.markdown(
            """
            <div style="text-align: left; font-size: 20px; font-style: italic; font-weight: bold;">
                "In investing, what is comfortable is rarely profitable."
            </div>
            <div style="text-align: right; font-size: 18px;">
                – Robert Arnott
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <p style="font-size: 18px;">
                Modern trading and asset allocation increasingly rely on <b>scientific and quantitative methodologies</b>, 
                replacing traditional experience-based approaches.
            </p>
            """, 
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <p style="font-size: 18px;">
                Data-driven forecasting and mathematical formulation provide a structured, efficient foundation 
                to predict price trends, guide decision-making, optimize portfolios, and manage risk under regulatory constraints.
            </p>
            """, 
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <p style="font-size: 18px;">
                Creating effective investment strategies demands the ability to <b>analyze financial data</b>, make informed 
                predictions, and formulate optimization models that balance return maximization and risk minimization.
            </p>
            """, 
            unsafe_allow_html=True
        )

        st.markdown("---", unsafe_allow_html=True)

        st.markdown("<h5><b>1. Financial Data Analysis and Preparation</b></h5>", unsafe_allow_html=True)
        st.markdown(
            """
            <ul style="font-size: 18px;">
                <li>Extract insights from complex datasets using <b>Excel</b> and <b>SQL</b>.</li>
                <li>Proficient in <b>Python</b>, <b>MATLAB</b>, <b>AWS</b>, and <b>Git</b> for data modeling and processing.</li>
                <li>Apply <b>test-driven development</b>: unit, integration, behavioral, and regression testing.</li>
                <li>Passed <b>CFA Level I</b>; actively pursuing further financial certifications.</li>
                <li>Work in a modeling and development team, solving technical problems with precision and structure.</li>
            </ul>
            """,
            unsafe_allow_html=True
        )

        st.markdown("---", unsafe_allow_html=True)

        st.markdown("<h5><b>2. Price Forecasting and Mathematical Optimization</b></h5>", unsafe_allow_html=True)
        st.markdown(
            """
            <ul style="font-size: 18px;">
                <li>Develop linear and nonlinear <b>time-series forecasting models</b>.</li>
                <li>Build financial models with assumptions, back-testing, and sensitivity analysis.</li>
                <li>Ph.D. in optimization theory and applications with deep expertise in:
                    <ul>
                        <li>Multi-asset portfolio optimization balancing risk and return.</li>
                        <li>Embedding regulatory requirements into optimization frameworks.</li>
                        <li>Hedging strategies for interest rate and duration risk.</li>
                        <li>Analyzing market signals and anomaly detection for risk mitigation.</li>
                    </ul>
                </li>
            </ul>
            """,
            unsafe_allow_html=True
        )

    with image_column:
        st.image("images/trading_allocation_banner.png")  # Replace with your relevant image path

st.write("---")
