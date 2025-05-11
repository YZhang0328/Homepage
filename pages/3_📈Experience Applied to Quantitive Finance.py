import streamlit as st

with st.container():
    st.markdown(
        """
        <style>
        .content-container {
            font-size: 18px;
            line-height: 1.75;
            max-width: 900px;
            margin: auto;
        }
        .content-container ul {
            margin-top: 0.5em;
            margin-bottom: 1em;
            padding-left: 1.5em;
        }
        .content-container li {
            margin-bottom: 0.5em;
        }
        hr {
            border: none;
            border-top: 1px solid #ccc;
            margin: 2em 0;
        }
        </style>

        <div class="content-container">
            <p>
                Modern trading and asset allocation increasingly rely on scientific and quantitative methodologies, 
                rather than traditional experience-based approaches.
            </p>    

            <p> 
                In trading and asset allocation, data-driven forecasting and mathematical formulation are pivotal. 
                These offer a structured and efficient way to predict price trends, assist decision-making, 
                optimize portfolios, and manage risks while adhering to regulatory requirements. 
            </p> 

            <p> 
                Developing effective investment strategies requires analyzing financial data, making predictions, and 
                formulating optimization problems to balance competing objectives—maximizing returns and minimizing 
                risk within specified constraints. 
            </p> 

            <hr />

            <h4>1. Financial Data Analysis and Preparation</h4>
            <ul>
                <li>Extract insights from complex datasets using Excel and SQL.</li>
                <li>Proficient in Python, MATLAB, AWS, and Git for data processing and modeling.</li>
                <li>Apply test-driven development: unit, integration, behavioral, and regression testing.</li>
                <li>Passed <strong>CFA Level I</strong>; actively pursuing further financial qualifications.</li>
                <li>Currently work in a modeling and development team, solving problems methodically.</li>
            </ul>

            <hr />

            <h4>2. Price Forecasting and Mathematical Optimization</h4>
            <ul>
                <li>Design both linear and nonlinear time-series forecasting models.</li>
                <li>Build financial models with assumptions, back-testing, and sensitivity analysis.</li>
                <li>Ph.D. in optimization theory and applications, with deep expertise in:
                    <ul>
                        <li>Multi-asset portfolio optimization balancing risk and return.</li>
                        <li>Embedding regulatory requirements into optimization frameworks.</li>
                        <li>Strategies for hedging interest rate and duration risk.</li>
                        <li>Analyzing market signals and detecting anomalies for risk management.</li>
                    </ul>
                </li>
            </ul>
        </div>
        """,
        unsafe_allow_html=True
    )
