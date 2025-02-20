import React from "react";
import styled from "styled-components";
import img1 from "../assets/DL.jpg";
import img2 from "../assets/farmer1.jpg";
import img3 from "../assets/upload.jpg";
import img4 from "../assets/img4.jpg";
import img from "../assets/bg.png";

const About = () => {
  return (
    <Container>
      <Section>
        <ImageContainer>
          <Image src={img1} alt="Section 1" />
        </ImageContainer>
        <TextContainer>
          <p> This project leverages deep learning to create a plant disease detection system, focusing on key crops like potatoes, tomatoes, and pepper.</p>
        </TextContainer>
      </Section>

      <Section>
        <TextContainer>
          <p>Farmers often face economic losses due to various plant diseases, some with similar symptoms but requiring different treatments. Early and accurate identification is crucial for effective intervention.</p>
        </TextContainer>
        <ImageContainer>
          <Image src={img2} alt="Section 2" />
        </ImageContainer>
      </Section>

      <Section>
        <ImageContainer>
          <Image src={img3} alt="Section 3" />
        </ImageContainer>
        <TextContainer>
          <p>
            Users can upload clear images of their plant leaves directly through the platform, allowing the system to analyze and identify potential diseases affecting the plant. The platform uses advanced image recognition algorithms to compare the uploaded leaf images against a database of known plant diseases, providing users with an accurate diagnosis.          </p>
        </TextContainer>
      </Section>

      <Section>
        <TextContainer>
          <p>
            This technology empowers farmers to make informed decisions about crop management, potentially saving yields and preventing further spread of disease.
          </p>
        </TextContainer>
        <ImageContainer>
          <Image src={img4} alt="Section 4" />
        </ImageContainer>
      </Section>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced gap */
  padding: 200px;
  padding-top: 100px; /* Reduced padding-top */
  background: #f9f9f9;
   background: url(${img}) no-repeat center center;  /* Add background image */
  background-size: cover; /* Ensures the image covers the full container */
  background-attachment: fixed; /* Keeps the background fixed while scrolling */
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 5px; /* Reduced margins */
`;

const Image = styled.img`
  width: 85%;
  max-width: 330px; /* Reduced max-width */
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 12px; /* Reduced padding */
  
  h2 {
    font-size: 30px; /* Increased font size */
    font-weight: 700; /* Increased font weight */
    color: #00b8b8;
  }

  p {
    font-size: 20px; /* Increased font size */
    font-weight: 600; /* Increased font weight */
    color: black;
  }
`;
