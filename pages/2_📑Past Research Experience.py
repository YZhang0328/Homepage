import streamlit as st
from PIL import Image

st.set_page_config(layout="wide")

# Function to auto-crop blank areas
def trim_image(img):
    """Automatically crop the blank area from the image."""
    return img.crop(img.getbbox())

# ---- Research introduction ----

with st.container():
    text_column, image_column = st.columns((10, 7))
    with text_column:
        st.markdown(
            """
            <div style="text-align: left; font-size: 20px; font-style: italic; font-weight: bold;">
                "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."
            </div>
            <div style="text-align: right; font-size: 18px; ">
            – William Paul Thurston
            </div>

            <div style="text-align: left; font-size: 20px; font-style: italic; font-weight: bold;">
                "The goal is to turn data into information, and information into insight."
            </div>
            <div style="text-align: right; font-size: 18px; ">
            – Carly Fiorina
            </div>
            """, 
            unsafe_allow_html=True
        )

        # Use st.markdown separately
        st.markdown(
            '<p style="font-size: 18px;"> In most of my research, I <b>worked extensively with mathematics</b>, focusing on an algorithm called <b>model predictive control</b>, a powerful approach that integrates <b>optimization</b> and <b>prediction</b> to enhance decision-making in dynamic systems.  </p>',
            unsafe_allow_html=True
        )
        
        st.markdown(
            '<p style="font-size: 18px;"> Beyond control theory, I have also gained substantial experience in <b>machine learning</b>, leveraging data-driven approaches to enhance system modeling, do prediction and classification. </p>',
            unsafe_allow_html=True
        )

        st.markdown(
            '<p style="font-size: 18px;"> I have approximately one year of postdoctoral research experience, endorsed by <b>UK Research and Innovation (UKRI)</b> and the <b>Royal Society of Engineering</b>. During that time, I have served as a reviewer for prestigious journals. I was also an invited speaker for symposiums and academic conferences, where the following work was accomplished: </p>',
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <ul>
                <li style="font-size: 18px;"> An optimization framework for wave energy converters (WECs) to minimize levelized cost of electricity (LCOE) via <b>mixed integer nonlinear programming (MINLP)</b> and <b>robust optimization</b>. </li>
                <li style="font-size: 18px;"> Testing parameter sensitivity of system performance, i.e., find parameters that can enhance WEC productivity and efficiency, while reducing LCoE. </li>
            </ul>
            """, 
            unsafe_allow_html=True
        )

        st.markdown(
            '<p style="font-size: 18px;"> During PhD, I worked on <b>data-driven renewable energy system modelling and control</b>, where I\'ve </p>',
            unsafe_allow_html=True
        )

        st.markdown(
            """
            <ul>
                <li style="font-size: 18px;"> Developed a WEC model via <b>system identification</b> using historical input-output data. </li>
                <li style="font-size: 18px;"> Designed a linear optimal controller using <b>quadratic programming (QP)</b> to maximize wave energy under uncertainties, and validated its effectiveness through wave tank testing experiments. </li>
                <li style="font-size: 18px;"> Designed a <b>quantile regression-based machine learning algorithm</b> to quantify uncertainties, which significantly enlarged the feasibility region of the control problem. </li>
            </ul>
            """, 
            unsafe_allow_html=True
        )

    with image_column:
        st.image("images/background_picture.png")


st.write("---")
with st.container():
    image_column, text_column = st.columns((1, 1))
    with image_column:
        st.image("images/paper_1.png")
    with text_column:
        st.markdown(
            """
            ##### <b>Representative Publications</b>:

            <p style="font-size: 20px;">
                - Yujia Zhang and Guang Li.
                Robust tube-based model predictive control for wave energy converters. 
                <em>IEEE Transactions on Sustainable Energy</em> (2022).
            </p>

            <p style="font-size: 18px;">
                This paper developed a robust tube-based Model Predictive Control (RTMPC) strategy for 
                energy maximization in Wave Energy Converters (WECs), addressing constraints and model uncertainties.
            </p>
            """, 
            unsafe_allow_html=True
        )
        st.markdown(
            """
            ##### Modelling methodology:
            -  Integrated disturbance invariant sets into the MPC framework to explicitly handle uncertainties and ensure robustness without increasing computational complexity.
            """,
            unsafe_allow_html=True
        )
        st.empty()
        # st.markdown(
        #     """
        #     ##### Key Contributions:
        #     - Energy Optimization: RTMPC directly maximizes energy conversion, incorporating real-time wave predictions.
        #     - Robustness: The strategy reduces power loss by addressing model uncertainties and nonlinearities.
        #     - Efficiency: Disturbance invariant sets are precomputed, keeping online computational costs comparable to traditional MPC.
        #     """,
        #     unsafe_allow_html=True
        # )


with st.container():
    image_column, text_column = st.columns((1, 1))
    with image_column:
        st.image("images/paper_2.png")
    with text_column:
        st.markdown(
            """
                <p style="font-size: 20px;">- Yujia Zhang, Hongbiao Zhao, Guang Li, Christopher Edwards, and Mike Belmont. Robust nonlinear model predictive control of an autonomous launch and recovery system. IEEE Transactions on Control Systems Technology (2023).</p>
                <ul>
                    <p style="font-size: 18px;"> This paper developed an autonomous optimization-based control system for lifeboat launch and recovery in high sea states.</p>
                </ul>
            </ul>
            """, 
            unsafe_allow_html=True
        )
        st.markdown(
            """
            ##### Modelling methodology:
            - Adopted Tube-based Model Predictive Control (TMPC) to assess risk and optimize control. Model uncertainties and constraints are incorporated to ensure robust performance despite inaccurate environmental disturbance predictions.
            """,
            unsafe_allow_html=True
        )
        st.empty()
        # st.markdown(
        #     """
        #     ##### Key Contributions:
        #     - Model mother ship’s hydrodynamics using quantitative methods.
        #     - Apply TMPC for real-time, optimal control with improved safety.
        #     - Enhances mission success, reduces human error, and supports higher sea state operations.
        #     """,
        #     unsafe_allow_html=True
        # )


with st.container():
    image_column, text_column = st.columns((1, 1))
    with image_column:
        st.image("images/paper_3.png")
    with text_column:
        st.markdown(
            """
                <p style="font-size: 20px;">- Yujia Zhang, Guang Li and Mustafa Al-Ani. Robust Learning-based Model Predictive Control for Wave Energy Converters. IEEE Transactions on Sustainable Energy (2024).</p>
                <ul>
                    <p style="font-size: 18px;"> This paper developed a machine learning based MPC strategy for WECs to balancing the objectives of maximizing energy extraction and ensuring safety.</p>
                </ul>
            </ul>
            """, 
            unsafe_allow_html=True
        )
        st.markdown(
            """
            ##### Modelling methodology:
            - Used machine learning to dynamically adjust uncertainty sets in MPC for improved energy conversion.
            - Adopted a quantile-regression-based LSTM network to predict and optimize uncertainty bounds in real-time.
            """,
            unsafe_allow_html=True
        )
        # st.markdown(
        #     """
        #     ##### Key Contributions:
        #     - Improved MPC performance by addressing system uncertainties with adaptive learning techniques.
        #     - Demonstrated enhanced energy extraction efficiency and safety through numerical simulations.
        #     """,
        #     unsafe_allow_html=True
        # )
	

st.write("---")


with st.container():
    image_column, text_column = st.columns((5, 4))
    with image_column:
        # Input & Output Paths
        st.image("images/ML_remote_sensing_images.png")
        st.image("images/ML_remote_sensing_images_2.png")

    with text_column:
        st.markdown(
            """
            <p style="font-size: 20px;"><b> Machine Learning Research Experience (2019):</b></p>
            <ul>
                <li style="font-size: 18px;"><b>Objective:</b> Improve remote sensing object detection via multi-model fusion.</li>
                <li style="font-size: 18px;"><b>Few-Shot Learning:</b> Trained with minimal bounding box annotations.</li>
            </ul>
            
            <p style="font-size: 20px;"><b>Modelling methodology:</b></p>
            <ul>
                <li style="font-size: 18px;"><b>Multi-Model Fusion:</b></li>
                <ul>
                    <li>Combines Fast R-CNN & R-FCN to enhance accuracy.</li>
                    <li>Leverages model complementarities to enhance detection accuracy.</li>
                    <li>Uses minimal bounding box information for initialization and refinement.</li>
                    <li>Alternates between improving model reliability and generating additional pseudo-labels.</li>
                </ul>
                <li style="font-size: 18px;"><b>Self-Paced Learning for Precision Enhancement:</b></li>
                <ul>
                    <li>Mimics human learning by progressing from simple to complex tasks.</li>
                    <li>Starts training with simpler samples (fewer object categories, less background noise).</li>
                    <li>Gradually incorporates more diverse and complex samples.</li>
                    <li>Selects candidate samples based on lower loss and higher confidence scores.</li>
                    <li>Enhances test sample accuracy compared to random sample selection.</li>
                </ul>
            </ul>
            """,
            unsafe_allow_html=True
        )


