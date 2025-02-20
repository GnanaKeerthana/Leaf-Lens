import { useState, useEffect } from "react";
import img from "../assets/img5.jpg";
import React from "react";
import axios from "axios";
import styled from "styled-components";

const API_URL = "http://localhost:8000/predict";

const Check = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;

  const sendFile = async () => {
    if (image) {
      let formData = new FormData();
      formData.append("file", selectedFile);
      try {
        setIsloading(true);
        let res = await axios.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsloading(false);
      }
    }
  };

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onSelectFile(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <MainContainer>
      <ImageCard>
        {image && (
          <ImagePreview>
            <img src={preview} alt="Potato Leaf" />
          </ImagePreview>
        )}
        {!image && (
          <Dropzone
            onClick={() => document.getElementById("file-input").click()}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={(e) => onSelectFile(e.target.files)}
            />
            <p>Drag and drop an image of a potato, tomato, or pepper plant leaf to process</p>
          </Dropzone>
        )}
        {data && (
          <Details>
            <Table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.class}</td>
                  <td>{confidence}%</td>
                </tr>
              </tbody>
            </Table>
            <Precautions>
              <h3>Precautions to Take:</h3>
              <p>{getPrecautions(data.class)}</p>
            </Precautions>
          </Details>
        )}
        {isLoading && (
          <Loader>
            <span>Processing...</span>
          </Loader>
        )}
      </ImageCard>
      {data && (
        <ClearButtonContainer>
          <ClearButton onClick={clearData}>Clear</ClearButton>
        </ClearButtonContainer>
      )}
    </MainContainer>
  );
};

export default Check;

const getPrecautions = (plantClass) => {
  switch (plantClass) {
    case 'Pepper_bell_Bacterial_spot':
      return [
        "Prune and destroy infected leaves to prevent disease spread.",
        "Disinfect tools after use to minimize contamination.",
        "Avoid working with wet plants to reduce bacterial growth.",
        "Apply copper-based fungicides weekly for disease control.",
        "Ensure good air circulation by proper spacing of plants.",
        "Recommended fertilizers: Balanced NPK fertilizer (10-10-10) and calcium-rich fertilizers."
      ];
    case 'Pepper_bell_healthy':
      return [
        "Maintain proper spacing to improve airflow and reduce humidity.",
        "Inspect leaves regularly for early signs of disease.",
        "Use well-draining soil to prevent root rot.",
        "Apply organic mulch to retain moisture and prevent soil splashing.",
        "Recommended fertilizers: Organic compost, potassium-rich fertilizers."
      ];
    case 'Potato_Early_blight':
      return [
        "Rotate crops every 2-3 years to prevent disease recurrence.",
        "Remove and destroy infected plant debris immediately.",
        "Apply preventive fungicides like chlorothalonil or mancozeb.",
        "Ensure balanced nitrogen fertilization for strong plant immunity.",
        "Recommended fertilizers: Potassium sulfate (K2SO4) and calcium nitrate."
      ];
    case 'Potato_Late_blight':
      return [
        "Plant resistant potato varieties.",
        "Avoid overhead irrigation to keep foliage dry.",
        "Ensure proper field drainage to prevent waterlogging.",
        "Apply protective fungicides like copper-based sprays or metalaxyl.",
        "Recommended fertilizers: Phosphorus-rich fertilizers like superphosphate."
      ];
    case 'Potato_healthy':
      return [
        "Use soil rich in organic matter for better plant health.",
        "Plant certified disease-free seeds.",
        "Monitor for pests like aphids that can spread diseases.",
        "Practice proper irrigation techniques to avoid excess moisture.",
        "Recommended fertilizers: Nitrogen-based fertilizers like ammonium nitrate."
      ];
    case 'Tomato_Early_blight':
      return [
        "Remove and dispose of infected leaves immediately.",
        "Use drip irrigation to keep foliage dry.",
        "Apply copper-based fungicides for protection.",
        "Mulch around plant bases to prevent soil-borne spores.",
        "Recommended fertilizers: Calcium nitrate and magnesium sulfate (Epsom salt)."
      ];
    case 'Tomato_Late_blight':
      return [
        "Select resistant tomato varieties.",
        "Prune lower leaves to improve airflow.",
        "Avoid overhead watering to prevent leaf wetness.",
        "Apply fungicides containing chlorothalonil or copper.",
        "Remove infected plants immediately.",
        "Recommended fertilizers: Potassium-rich fertilizers and phosphoric acid-based fertilizers."
      ];
    case 'Tomato_Leaf_Mold':
      return [
        "Improve greenhouse ventilation to reduce humidity.",
        "Water plants at the base rather than overhead.",
        "Apply fungicides like mancozeb or chlorothalonil if symptoms appear.",
        "Recommended fertilizers: Nitrogen-rich fertilizers like urea."
      ];
    case 'Tomato_Target_Spot':
      return [
        "Ensure proper plant spacing for good air circulation.",
        "Remove and destroy affected leaves.",
        "Avoid working with wet plants to prevent fungal spread.",
        "Apply fungicides such as azoxystrobin or mancozeb.",
        "Practice crop rotation to break the disease cycle.",
        "Recommended fertilizers: Phosphorus and calcium-based fertilizers."
      ];
    case 'Tomato_mosaic_virus':
      return [
        "Immediately remove and destroy infected plants.",
        "Sanitize tools and hands frequently to prevent spread.",
        "Use resistant seed varieties to minimize infection risk.",
        "Control insect vectors like aphids that spread the virus.",
        "Recommended fertilizers: Balanced micronutrient fertilizers with added boron and zinc."
      ];
    case 'Tomato_healthy':
      return [
        "Regularly inspect plants for early signs of disease.",
        "Apply balanced fertilizers to maintain plant health.",
        "Keep plants well-spaced to prevent overcrowding.",
        "Use mulch to reduce soil-borne disease risks.",
        "Maintain consistent watering practices.",
        "Recommended fertilizers: NPK 10-10-10 or organic compost-based fertilizers."
      ];
    case 'Mismatched':
      return [
        "Kindly upload the Appropriate images.",
        "Try to upload a leaf from the suitable plants[potato,tomato,bell pepper]."

      ];
  }
};




// Styled Components
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  overflow: hidden;
  backdrop-filter: blur(10px); /* Added background blur effect */
  -webkit-backdrop-filter: blur(10px); /* Safari support for backdrop filter */
  
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;


const ImageCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  max-width: 450px;
  width: 100%;
  padding: 30px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const ImagePreview = styled.div`
  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Dropzone = styled.div`
  padding: 40px;
  background-color: rgba(247, 247, 247, 0.8);
  border: 3px dashed #6c757d;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  input[type="file"] {
    display: none;
  }

  p {
    color: #555;
    font-size: 16px;
  }

  &:hover {
    background-color: rgba(224, 224, 224, 0.9);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    padding: 25px;
  }
`;

const Details = styled.div`
  margin-top: 20px;
`;

const Precautions = styled.div`
  background: #f7f9fc;
  padding: 15px 20px;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h3 {
    color: #be6a77;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

const Loader = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #6c757d;
  font-weight: bold;
`;

const ClearButtonContainer = styled.div`
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: #be6a77;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #a94e59;
    transform: translateY(-3px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #be6a77;
    color: white;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;