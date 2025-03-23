import streamlit as st
import cairosvg
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
            '<p style="font-size: 18px;"> In most of my research, I <b>worked extensively with mathematics</b>, focusing on an algorithm called model predictive control, a powerful approach that integrates <b>optimization</b> and <b>prediction</b> to enhance decision-making in dynamic systems.  </p>',
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
    st.markdown(
        """
        <p style="font-size: 20px;"><b>Representative publications:</b></p>
        <ul>
            <li style="font-size: 18px;"> Yujia Zhang and Guang Li. Robust tube-based model predictive control for wave energy converters. IEEE Transactions on Sustainable Energy (2022). </li>
            <li style="font-size: 18px;"> Yujia Zhang, Hongbiao Zhao, Guang Li, Christopher Edwards, and Mike Belmont. Robust nonlinear model predictive control of an autonomous launch and recovery system. IEEE Transactions on Control Systems Technology (2023). </li>
            <li style="font-size: 18px;"> Yujia Zhang, Guang Li and Mustafa Al-Ani. Robust Learning-based Model Predictive Control for Wave Energy Converters. IEEE Transactions on Sustainable Energy (2024). </li>
            <li style="font-size: 18px;"> Yujia Zhang and Guang Li. Towards Robust and High-performance Operations of Wave Energy Converters: an Adaptive Tube-based Model Predictive Control Approach. IFAC-PapersOnLine, 55(31):339-344, 2022. </li>
        </ul>
        """, 
        unsafe_allow_html=True
    )

st.write("---")


with st.container():
    image_column, text_column = st.columns((2, 3))
    with image_column:
        # Input & Output Paths
        st.image("images/ML_remote_sensing_images.png")
        st.image("images/ML_remote_sensing_images_2.png")
        # input_svg = "images/ML_remote_sensing_images.svg"
        # output_png = "images/enlarged_image.png"

        # # Resize with Scaling Factor (e.g., 3x the original size)
        # scale_factor = 3  
        # cairosvg.svg2png(url=input_svg, write_to=output_png, scale=scale_factor)

        # # Open PNG with PIL
        # img = Image.open(output_png)

        # # Crop the blank area
        # cropped_img = trim_image(img)

        # # Save and display the cropped image
        # cropped_output = "images/cropped_image.png"
        # cropped_img.save(cropped_output)

        # # Display in Streamlit
        # st.image(cropped_output, caption="Cropped & Enlarged SVG as PNG", use_column_width=True)

        # # Display the original SVG with a specified size
        # svg_path_2 = "images/ML_remote_sensing_images_2.svg"
        # with open(svg_path_2, "r") as f_2:
        #     svg_content_2 = f_2.read()

        # st.markdown(
        #     f'<div style="text-align: center;">'
        #     f'<svg width="500px" height="auto">{svg_content_2}</svg>'
        #     f'</div>',
        #     unsafe_allow_html=True
        # )

    with text_column:
        st.markdown(
            """
            <ul>
                <p style="font-size: 20px;"><b>-&nbsp;&nbsp;Machine learning research experience (2019):</b></p>
                This project
                <li style="font-size: 18px;"><b>Worked on deep Learning for Weakly Supervised Target Detection in Remote Sensing images.<b></li>
                <li style="font-size: 18px;">Developed a target detection framework using few image samples, which is achieved by feeding the samples to multiple neural networks (NNs) in an easy-to-difficult order, known as the self-paced learning strategy.</li>
                <li style="font-size: 18px;">The framework can generate more pseudo bounding boxes and improved the accuracy of the bounding boxes by updating each NN during the training process, till the convergence of a defined loss function.</li>
            </ul>

            """, 
            unsafe_allow_html=True
        )


