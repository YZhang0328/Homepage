import streamlit as st

st.set_page_config(layout="wide")

with st.container():
    text_column, image_column = st.columns((3, 1))

    with text_column:
        st.markdown(
            """ 
            <p style="font-size: 20px;"> 
                Modern trading and asset allocation increasingly rely on scientific and quantitative methodologies, 
                rather than traditional experience-based approaches. 
            </p>    
            
            <p style="font-size: 18px;"> 
                In trading and asset allocation, data-based forecasting and mathematical formulation are pivotal, 
                offering a structured and efficient way to predict the future price trend assisting the decision-making process, 
                optimize portfolios, and manage risks while adhering to regulatory requirements. 
            </p> 
            
            <p style="font-size: 18px;"> 
                Developing effective investment strategies requires analyzing financial data, making predictions, formulating optimization problems to balance competing objectives— 
                maximizing returns and minimizing risk within specified constraints. 
            </p> 

            <p style="font-size: 20px;"> 
                My background provides expertise in two core areas essential to this process: 
            </p> 

            <p style="font-size: 20px;"> 
                1. Financial data analysis and preparation: 
            </p> 

            <p style="font-size: 18px;">
                1) Analytical skills, to extract relevant insights from complex datasets 
                and identify their significance to specific tasks. Excel and SQL are handy tools.
            </p>

            <p style="font-size: 18px;">
                2) Programming proficiency in Python, MATLAB, AWS, and Git (5+ years Python experience, 
                familiar with object-oriented programming), to process and model data efficiently. 
            </p>

            <p style="font-size: 18px;">
                3) Commitment to test-driven development, unit tests, integration tests, behaviour tests, regression tests, etc. 
            </p>

            <p style="font-size: 18px;">
                4) Continuous learning, which has led me to actively pursue the CFA designation and deepen the understanding of finance.
            </p>

            <p style="font-size: 18px;"> 
                5) Current role in a modeling and development team sharpened the ability to approach challenges methodically and find the best solutions. 
            </p> 

            <p style="font-size: 20px;"> 
                2. Price forecasting and mathematical optimization for finance decisions: 
            </p> 

            <p style="font-size: 18px;"> 
                1) Expertise in time-series algorithm design, developed many mature linear and nonlinear prediction models. 
                These models, strategically designed and not publicly available, leverage fundamental linear regression techniques for forecasting 
                and incorporate machine learning strategies for nonlinear data prediction.
            </p>

            <p style="font-size: 18px;">
                2) With a Doctorate in optimization theory and applications from the UK, I bring a deep understanding of advanced optimization techniques.
                I have knowledge in framing return expectations as objectives to maximize and incorporating risk—via variance/covariance, 
                or deviation—either as constraints or factors to minimize.
            </p>

            <p style="font-size: 18px;">
                3) Translating complex client requirements such as regulatory requirements into optimization frameworks, 
                ensuring compliance while achieving portfolio objectives.
            </p>
            """,
            unsafe_allow_html=True
        )


    with image_column:
        st.image("images/yujia_qipao.jpg", caption="Yujia in a Chatworth House")
        