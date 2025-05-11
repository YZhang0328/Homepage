import streamlit as st

st.set_page_config(layout="wide")

with st.container():
    text_column, image_column = st.columns((10, 7))

    with text_column:
        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p>
                    Modern trading and asset allocation increasingly rely on scientific and quantitative methodologies, 
                    rather than traditional experience-based approaches.
                </p>    
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p> 
                    In trading and asset allocation, data-driven forecasting and mathematical formulation are pivotal. 
                    These offer a structured and efficient way to predict price trends, assist decision-making, 
                    optimize portfolios, and manage risks while adhering to regulatory requirements. 
                </p> 
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p> 
                    Developing effective investment strategies requires analyzing financial data, making predictions, and formulating optimization problems 
                    to balance competing objectives—maximizing returns and minimizing risk within specified constraints. 
                </p> 
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p> 
                    I specialize in two critical areas essential to successful financial decision-making:
                </p> 
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p><b>1. Financial data analysis and preparation:</b></p>
                <ul>
                    <li>Analytical skills to extract insights from complex datasets and assess their relevance to specific tasks. Tools like Excel and SQL are integral to this process.</li>
                    <li>Proficiency in Python, MATLAB, AWS, and Git for data processing and mathematical modeling.</li>
                    <li>Commitment to test-driven development, including unit, integration, behavioral, and regression tests.</li>
                    <li>Continuous learning: I have passed <b>CFA Level I</b> and am actively pursuing further expertise in finance.</li>
                    <li>In my current role in a modeling and development team, I approach challenges methodically to identify the best solutions.</li>
                </ul>
            </div>
            """,
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <div style="font-size: 20px; line-height: 1.75;">
                <p><b>2. Price forecasting and mathematical optimization for financial decisions:</b></p>
                <ul>
                    <li>Expertise in time-series algorithm design—developed both linear prediction algorithms and nonlinear models using machine learning.</li>
                    <li>Experience in complex financial modeling, including assumption setting, model development, back-testing, scenario, and sensitivity analysis.</li>
                    <li>With a Ph.D. in optimization theory and applications from the UK, I have deep expertise in:
                        <ul>
                            <li>Multi-asset portfolio construction using advanced optimization techniques to balance risk and return.</li>
                            <li>Incorporating regulatory requirements for financial institutions into optimization frameworks.</li>
                            <li>Developing robust optimization strategies for hedging interest rate and duration risks.</li>
                            <li>Interpreting complex market signals and detecting market anomalies for effective risk management.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            """,
            unsafe_allow_html=True
        )

    with image_column:
        st.image("images/quantitative_finance.png")
